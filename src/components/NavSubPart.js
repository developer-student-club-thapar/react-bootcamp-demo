import React, {Component} from "react";

import styled from "styled-components";
export default class NavSubPart extends Component {
    state = {
        active: this.props.active
    };
    render() {
        return (
            <Container>
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Gallery</div>
                <div>Contact</div>
            </Container>
        );
    }
}

const Container = styled.nav`
    justify-content: space-around;
    align-items: center;
    display: flex;
    margin: auto;
    width: 70%;
    padding-top: 1%;
    padding-bottom: 1%;
    font-size: 1.3em;
    font-weight: 300;
`;
