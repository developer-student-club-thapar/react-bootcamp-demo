from server import db, app
from server.models import User
import jwt
from functools import wraps
from flask import request, abort, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'X-Access-Token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message': 'token is missing'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            _id = data['user_id']
            current_user = User.query.get(_id)
        except:
            return jsonify({'message': 'Token is Invalid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated

@app.route('/register', methods=['GET', 'POST'])
def register():
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    hashed_password = generate_password_hash(password)

    user = User(
        name = name,
        email = email,
        username = username,
        password = hashed_password,
        number_of_visits = "0"
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'Successfully registered user!'})

@app.route('/login', methods=['GET', 'POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not username or not password:
        return jsonift({'message': 'could not verify'}), 401

    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({'message': 'could not verify'}), 401

    if check_password_hash(user.password, password):
        token = jwt.encode(
            {
                'user_id': user.id,
                'username': user.username
            },
            app.config['SECRET_KEY']
        )
        return jsonify({'token': token.decode('UTF-8')})
    return jsonify({'message': 'could not verify'}), 401

@app.route('/logout', methods=['GET', 'POST'])
@token_required
def logout(current_user):
    current_user.number_of_visits = current_user.number_of_visits + 1
    current_user.previous_active = str(datetime.utcnow())
    db.session.add(current_user)
    db.session.commit()
    return jsonify({'is_logged_in': False})