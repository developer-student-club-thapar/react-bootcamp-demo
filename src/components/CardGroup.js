import React, {Component} from "react";
import Card from "./Card";

export default class CardGroup extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Card
                    text={"sample card 1"}
                    buttonText={"sample button 1"}
                    content={"Nostrud ipsum nostrud eu occaecat."}
                />
                <Card
                    text={"sample card 2"}
                    buttonText={"sample button 2"}
                    content={"Nostrud ipsum nostrud eu occaecat."}
                />
                <Card
                    text={"sample card 3"}
                    buttonText={"sample button 3"}
                    content={"Nostrud ipsum nostrud eu occaecat."}
                />
            </div>
        );
    }
}

const styles = {
    container: {
        display: "flex",
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30
    }
};
