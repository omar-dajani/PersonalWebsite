import React from 'react';
import { Container } from 'react-bootstrap';

import me from '../../../images/me.jpg';
import './about.css';

function About(props) {
    return (
        <Container fluid id="container-1">
            <div id="about-header">
                <span id="about-title-num">
                    01.
                </span>
                &nbsp;
                <span id="about-title">
                    About Me
                </span>
                <hr />
            </div>
            <div id="about-content">
                <div id="about-left">
                    <p id="summary">
                        I am a third year computer science student attending the University of Colorado Boulder. While I am a proficient full-stack developer, my expertise is working with backend services.
                        <br />
                        <br />
                        I love building things while solving hard engineering problems that are intrinsically fun to tackle. I am currently looking for a software engineer role where I can work with a collaborative team to build backend services.
                        <br />
                        <br />
                        Here are a few technologies I have been working with recently:
                    </p>
                    <div id="bullet-container">
                        <div id="about-left-bullet-points">
                            <ul>
                                <li>
                                    <i className="fas fa-angle-right">
                                    </i>JavaScript (ES6+)
                                </li>
                                <li>
                                    <i className="fas fa-angle-right">
                                    </i>Node.js
                                </li>
                                <li>
                                    <i className="fas fa-angle-right">
                                    </i>Git
                                </li>
                            </ul>
                        </div>
                        <div id="about-right-bullet-points">
                            <ul>
                                <li>
                                    <i className="fas fa-angle-right">
                                    </i>Docker
                                </li>
                                <li>
                                    <i className="fas fa-angle-right">
                                    </i>AWS
                                </li>
                                <li>
                                    <i className="fas fa-angle-right">
                                    </i>React
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="about-right">
                    <div id="filter" />
                    <div id="background" />
                    <img id="me-image" alt="me" src={me} width="230px" height="300px" />
                </div>
            </div>
        </Container>
    );
}

export default About;