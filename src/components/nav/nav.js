import React from 'react';
import { useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.css'
import { useSpring, animated, useChain, useSpringRef, Spring } from 'react-spring';

import logo from '../../images/logo.png';
import bars from '../../images/bars.png';

import NavLink from "../navlink/navlink.js";
import NormalButton from "../button/normalbutton.js";

function Navigation() {
    const link1Ref = useSpringRef();
    const link2Ref = useSpringRef();
    const link3Ref = useSpringRef();
    const link4Ref = useSpringRef();
    const link5Ref = useSpringRef();

    const link1Style = useAnimation(link1Ref);
    const link2Style = useAnimation(link2Ref);
    const link3Style = useAnimation(link3Ref);
    const link4Style = useAnimation(link4Ref);
    const link5Style = useAnimation(link5Ref);

    useChain([link1Ref, link2Ref, link3Ref, link4Ref, link5Ref], [0, 0.2, 0.4, 0.6, 0.8]);
    return (
        <React.Fragment>
            <Navbar id="nav" expand="md">
                <img id="logo" alt="logo" width="40" height="40" src={logo}></img>
                <Navbar.Toggle id="bars" aria-controls="basic-navbar-nav"><img alt="bars" width="40" height="40" src={bars}></img></Navbar.Toggle>
                <Navbar.Collapse id="links">
                    <Nav className="ml-auto">
                        <animated.div style={link1Style} className="animated-div-nav">
                            <NavLink num={"01."} label={"About"} to={"container-1"} offSets={-100} />
                        </animated.div>
                        <animated.div style={link2Style} className="animated-div-nav">
                            <NavLink num={"02."} label={"Experience"} to={"container-2"} offSets={-200} />
                        </animated.div>
                        <animated.div style={link3Style} className="animated-div-nav">
                            <NavLink num={"03."} label={"Work"} to={"container-3"} offSets={-50} />
                        </animated.div>
                        <animated.div style={link4Style} className="animated-div-nav">
                            <NavLink num={"04."} label={"Contact"} to={"container-4"} offSets={-100} />
                        </animated.div>
                        <animated.div style={link5Style} className="animated-div-nav">
                            <div className="button-container">
                                <NormalButton pX="17px" pY="10px" fontSize="13px" label={"Resume"} resume="resume"/>
                            </div>
                        </animated.div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

const useAnimation = (springRef) => {
    const spring = useSpring({
        from: {
            opacity: 0, y: 150
        },

        to: {
            opacity: 1, y: 0
        },

        ref: springRef,
    });

    return spring;
};

export default Navigation;