import React from "react";
import Nav from "../components/Nav";
import CarouselComponent from "../components/Carousel";

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
            </div>
        );
    }
}

export default Home;
