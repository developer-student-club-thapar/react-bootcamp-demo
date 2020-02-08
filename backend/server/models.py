from server import app, db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(60), nullable=False)
    username = db.Column(db.String(60), nullable=False, unique=True)
    password = db.Column(db.String(60), nullable=False)
    number_of_visits = db.Column(db.Integer)
    previous_active = db.Column(db.String(120))

    def __repr__(self):
        return f"{self.id}, {self.number_of_visits}, {self.previous_active}, {self.name}, {self.email}, {self.username}, {self.password}"