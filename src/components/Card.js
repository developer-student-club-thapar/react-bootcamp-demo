import React, {Component} from "react";

export default class Card extends Component {
    render() {
        return (
            <div style={styles.card}>
                <div style={styles.container}>
                    <h2>{this.props.text}</h2>
                    <button style={styles.button}>
                        {this.props.buttonText}
                    </button>
                </div>
                <div style={styles.content}>
                    <p style={{color: "white"}}>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

const styles = {
    card: {
        alignItems: "center",
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 20
    },
    container: {
        display: "flex",
        backgroundColor: "#c6c9cf ",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10%",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    button: {
        borderRadius: 7,
        backgroundColor: "white",
        padding: 5
    },
    content: {
        display: "flex",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    }
};
