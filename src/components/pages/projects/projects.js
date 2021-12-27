import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import pathfindingVisualizer from '../../../images/pathfinding-visualizer.png';
import brewery from '../../../images/brewery.png';
import ProjectModule from '../../../components/project-module/project-module.js';
import ArchiveBlock from '../../../components/archive-block/archive-block.js';
import './projects.css';

function Projects(props) {
    return (
        <Container fluid id="container-3">
            <div id="about-header">
                <span id="about-title-num">
                    03.
                </span>
                &nbsp;
                <span id="about-title">
                    Some Things I've Built
                </span>
                <hr />
            </div>
            <div id="projects-content">
                <ProjectModule
                    img={pathfindingVisualizer}
                    projectName={"Pathfinding Visualizer"}
                    summary={"A web application for visualizing different pathfinding algorithms. Add weights and walls to see how the algorithms work and compare them by taking a look at the path cost."}
                    github={"https://github.com/omar-dajani/Path-Visualizer"}
                    link={"http://www.omardajani.com/projects/path-visualizer"}
                    languages={
                        <React.Fragment>
                            <p>CSS</p>
                            <p>HTML</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </React.Fragment>}
                    side={"right"}
                    margin={true}
                />
                <ProjectModule
                    img={brewery}
                    projectName={"Brewery Review"}
                    summary={"A web application that allows users to search through breweries using Open Brewery’s API. Users can leave reviews which are stored in a database (Postgres)"}
                    github={"https://github.com/omar-dajani/Brewery-Reviews"}
                    link={"https://omardajani-breweryreviews.herokuapp.com/"}
                    languages={
                        <React.Fragment>
                            <p>SQL</p>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>Firebase</p>
                            <p>Express.js</p>
                        </React.Fragment>}
                    side={"left"}
                />
            </div>
            <div id="other-noteworthy-projects">
                <span id="other-noteworthy-projects-title">
                    Other Noteworthy Projects
                </span>
                <span id="view-the-archive">
                    view the archive
                </span>
                <Container id="archive-content">
                    <Row id="rows">
                        <Col lg="4" md="6" id="col">
                            <ArchiveBlock title={"Personal Website"} summary={"Final build of my personal website built with React."} languages={
                                <React.Fragment>
                                    <span>
                                        React
                                    </span>
                                    <span>
                                        Javascript
                                    </span>
                                    <span>
                                        HTML
                                    </span>
                                    <span>
                                        CSS
                                    </span>
                                </React.Fragment>
                            } />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default Projects;