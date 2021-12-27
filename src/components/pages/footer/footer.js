import React from 'react';
import { Container } from 'react-bootstrap';

import './footer.css';

function Footer(props) {
    return (
        <Container id="container-5">
            <div id="side-bar-bottom">
                <a href="https://github.com/omar-dajani" rel="noopener noreferrer" target="_blank"><i className="fab fa-github" /></a>
                <a href="https://www.instagram.com/_omardajani/" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram" /></a>
                <a href="#c"><i class="fab fa-twitter" /></a>
                <a href="https://www.linkedin.com/in/omardajani/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin-in" /></a>
            </div>
            <div id="built-by">
                Built by Omar Dajani &#38; Designed by Brittany Chiang
            </div>
        </Container>
    );
}

export default Footer;