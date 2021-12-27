import React from 'react';
import './project-module.css'

function ProjectModule(props) {
    return (
        <React.Fragment>
            {props.side === "right" && <div id="project-module-container">
                <div id="project-module-left">
                    <img alt="project-img" src={props.img}></img>
                    <div id="project-filter" />
                </div>
                <div id="project-module-right">
                    <span id="featured-project">
                        Featured Project
                    </span>
                    <span id="title">
                        {props.projectName}
                    </span>
                    <div id="project-summary-right">
                        {props.summary}
                    </div>
                    <div id="project-languages">
                        {props.languages}
                    </div>
                    <div id="project-links-right">
                        <a href={props.link} rel="noopener noreferrer" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                        <a href={props.github} rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                {props.margin === true && <div id="margin" />}
            </div>}
            {props.side === "left" && <div id="project-module-container">
                <div id="project-module-right-left">
                    <span id="featured-project">
                        Featured Project
                    </span>
                    <span id="title">
                        {props.projectName}
                    </span>
                    <div id="project-summary-left">
                        {props.summary}
                    </div>
                    <div id="project-languages-left">
                        {props.languages}
                    </div>
                    <div id="project-links-left">
                        <a href={props.github} rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
                        <a href={props.link} rel="noopener noreferrer" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div id="project-module-left">
                    <img alt="project-img" src={props.img}></img>
                    <div id="project-filter" />
                </div>
            </div>}
            {props.margin === true && <div id="margin" />}
        </React.Fragment>
    );
}

export default ProjectModule;