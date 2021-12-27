import React from 'react';
import { Container } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { useSpring, animated, useChain, useSpringRef } from 'react-spring';

import NormalButton from '../../button/normalbutton';
import './intro.css';

function Intro(props) {
    const hiRef = useSpringRef();
    const nameRef = useSpringRef();
    const largeCaptionRef = useSpringRef();
    const shortDescriptionRef = useSpringRef();
    const buttonRef = useSpringRef();

    const hiStyle = useAnimation(hiRef);
    const nameStyle = useAnimation(nameRef);
    const largeCaptionStyle = useAnimation(largeCaptionRef);
    const shortDescriptionStyle = useAnimation(shortDescriptionRef);
    const buttonStyle = useAnimationButton(buttonRef);

    useChain([hiRef, nameRef, largeCaptionRef, shortDescriptionRef, buttonRef], [1, 2, 2.2, 2.4, 3]);

    return (
        <Container id="container">
            <animated.p style={hiStyle} id="hi">
                Hi, my name is,
            </animated.p>
            <animated.h1 style={nameStyle} id="large-name">
                Omar Dajani.
            </animated.h1>
            <animated.h1 style={largeCaptionStyle} id="large-caption">
                I love problem solving.
            </animated.h1>
            <animated.p style={shortDescriptionStyle} id="short-description">
                I'm a junior computer science student studying at the University of Colorado Boulder who loves to problem solve, learn, code and work with others. Make sure to check out my <span onClick={() => {
                    scroller.scrollTo("container-3", {
                        duration: 800,
                        delay: 0,
                        offset: -50,
                        smooth: "easeInOutQuart",
                    });
                }} class="link">work</span> and shoot me a message!
            </animated.p>
            <animated.div id="button-div" style={buttonStyle}>
                {<NormalButton fontSize="14px" label="Get In Touch" pY="15px" pX="27px" to="container-4" offSets={-100} />}
            </animated.div>
        </Container>
    );
}

const useAnimation = (springRef) => {
    const spring = useSpring({
        from: {
            opacity: 0, y: 300
        },

        to: {
            opacity: 1, y: 0
        },

        ref: springRef,
    });

    return spring;
};

const useAnimationButton = (springRef) => {
    const spring = useSpring({
        from: {
            opacity: 0, x: -800
        },

        to: {
            opacity: 1, x: 0
        },

        ref: springRef,
    });

    return spring;
};

export default Intro;