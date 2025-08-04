import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        I am <span className="purple">Ravi Kumar </span>
                        a curious engineer at heart and a backend Java developer by profession.
                        I am currently employed as a Associate Software Engineer at Nagarro.
                        <br/>
                        <br/>
                        I’ve spent over 7.10 years building scalable software systems, but my curiosity doesn't stop at
                        code
                        <br/>
                        <br/>
                        I love understanding how things work, whether it’s debugging a distributed system or
                        wiring up sensors in a DIY electronics project.
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Reading books (self-help, or tech-related)
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Exploring UI technology currently learning Angular
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Listening to podcasts or watching Si-Fi Movies
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Traveling to explore new places and cultures in mountains
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Experimenting with microcontrollers like ESP32
                        </li>
                    </ul>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
