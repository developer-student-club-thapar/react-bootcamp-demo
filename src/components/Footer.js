import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faYoutube,
    faMedium,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    render() {
        return (
            <div class="flex-container">
                <div class="column">
                    <div class="footer-left">
                        <div>
                            <h1 style={{color: "#fff", textAlign: "center"}}>
                                Get In Touch
                            </h1>
                        </div>
                        <div>
                            <p style={{textAlign: "justify"}}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In interdum eleifend auctor
                                adipiscing sagittis, turpis porta id. Nunc nisl
                                vestibulum, non sollicitudin sollicitudin
                                suscipit sed habitant. Turpis iaculis pretium eu
                                quam risus morbi fusce eu. Varius eget est
                                convallis et consectetur eget velit. Rhoncus
                                morbi vivamus aenean eget. Nibh commodo faucibus
                                volutpat ut.
                            </p>
                        </div>
                        <div>
                            <div class="footer-left-icons">
                                <div style={{margin: 10}}>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="2x"
                                    />
                                </div>
                                <div style={{margin: 10}}>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                </div>
                                <div style={{margin: 10}}>
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        size="2x"
                                    />
                                </div>
                                <div style={{margin: 10}}>
                                    <FontAwesomeIcon
                                        icon={faMedium}
                                        size="2x"
                                    />
                                </div>
                                <div style={{margin: 10}}>
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        size="2x"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="footer-right">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <textarea
                                className="textArea"
                                placeholder="Message"
                            ></textarea>
                            <button className="FormButton">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
