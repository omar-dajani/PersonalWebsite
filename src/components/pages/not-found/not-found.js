import React from 'react';
import { Container, Button } from 'react-bootstrap';

import './not-found.css';

function NotFound(props) {
    return (
        <Container fluid id="container-0" className="height-90">
            <span id="error-404">
                404
            </span>
            <span id="page-not-found">
                Page Not Found
            </span>
            <a href="https://www.omardajani.com" rel="noopener noreferrer" target="_blank">
                <Button id="go-home">
                    Go Home
                </Button>
            </a>
        </Container>
    );
}

export default NotFound;