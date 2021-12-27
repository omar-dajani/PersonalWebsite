import React from 'react';
import './sidebars.css';

function SideBars(props) {
    return (
        <React.Fragment>
            <div id="icon-bar">
                <a href="https://github.com/omar-dajani" rel="noopener noreferrer" target="_blank"><i className="fab fa-github" /></a>
                <a href="https://www.instagram.com/_omardajani/" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram" /></a>
                <a href="#c"><i class="fab fa-twitter" /></a>
                <a href="https://www.linkedin.com/in/omardajani/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin-in" /></a>
                <div id="line" />
            </div>

            <div id="email-bar">
                <p>omar.dajani.01@gmail.com</p>
                <div id="line" />
            </div>
        </React.Fragment>
    );
}

export default SideBars;