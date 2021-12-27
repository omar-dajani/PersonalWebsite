import React from 'react';
import { Button } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import './navlink.css'

function NavLink(props) {
    return (
        <React.Fragment>
            <Button id="button" onClick={
                () => {
                    scroller.scrollTo(props.to, {
                        duration: 800,
                        delay: 0,
                        offset: props.offSets,
                        smooth: "easeInOutQuart",
                    });
                }
            }>
                <span id="num">
                    {props.num}
                </span>
                <span id="space">
                    &nbsp;
                </span>
                <span id="label">
                    {props.label}
                </span>
            </Button>

        </React.Fragment>
    );
}

export default NavLink;