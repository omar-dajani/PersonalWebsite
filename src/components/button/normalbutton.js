import React from 'react';
import { Button } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import './normalbutton.css'

function NormalButton(props) {
    const styles = {
        paddingLeft: props.pX,
        paddingRight: props.pX,
        paddingTop: props.pY,
        paddingBottom: props.pY,
        fontSize: props.fontSize
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
        <React.Fragment>
            <Button id="normalbutton" style={styles} onClick={
                () => {
                    if (props.to !== null && props.offSets !== null) {
                        scroller.scrollTo(props.to, {
                            duration: 800,
                            delay: 0,
                            offSet: props.offSets,
                            smooth: "easeInOutQuart",
                        });
                    }
                    openInNewTab('https://omardajani.com/files/resume.pdf');
                }
            }>
                {props.label}
            </Button>
        </React.Fragment>
    );
}

export default NormalButton;