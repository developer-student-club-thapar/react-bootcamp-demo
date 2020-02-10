import React from "react";
import Nav from "../components/Nav";
import CarouselComponent from "../components/Carousel";

import FlexDemo from "../components/FlexDemo";
import CardGroup from "../components/CardGroup";

import Footer from "../components/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div
                    style={{
                        backgroundColor: "#000",
                        padding: "80px"
                    }}
                >
                    <CarouselComponent />
                </div>
                <FlexDemo />
                <CardGroup />
                <Footer />
            </div>
        );
    }
}

export default Home;
