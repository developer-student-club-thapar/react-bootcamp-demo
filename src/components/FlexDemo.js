import React, { Component } from "react";
import styles from "./styles/FlexDemo.module.css";
export default class FlexDemo extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <img
                        src="https://source.unsplash.com/random"
                        width="40%"></img>
                    <div className={styles.subText}>
                        <h1>Flex Box Demo</h1>
                        <p>
                            Aliquip ea culpa dolore ut culpa culpa incididunt
                            minim culpa qui elit veniam ut. Excepteur irure
                            voluptate amet nisi excepteur non dolore ipsum id
                            dolor proident mollit nostrud nulla. Duis proident
                            voluptate quis sit excepteur ut qui mollit. Anim
                            ullamco nostrud proident amet nulla ut est deserunt
                            cillum. Ea ex nostrud occaecat consectetur et.
                        </p>
                    </div>
                </div>

                <div className={styles.subContainer}>
                    <div className={styles.subText}>
                        <h1>Flex Box Demo</h1>
                        <p>
                            Aliquip ea culpa dolore ut culpa culpa incididunt
                            minim culpa qui elit veniam ut. Excepteur irure
                            voluptate amet nisi excepteur non dolore ipsum id
                            dolor proident mollit nostrud nulla. Duis proident
                            voluptate quis sit excepteur ut qui mollit. Anim
                            ullamco nostrud proident amet nulla ut est deserunt
                            cillum. Ea ex nostrud occaecat consectetur et.
                        </p>
                    </div>
                    <img
                        src="https://source.unsplash.com/random"
                        width="40%"
                        // height="50%"
                    ></img>
                </div>
            </div>
        );
    }
}
