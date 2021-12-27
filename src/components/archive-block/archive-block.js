import React from 'react';
import './archive-block.css'

import folder from '../../images/folder.png';

function ArchiveBlock(props) {
    return (
        <React.Fragment>
            <div id="archive-block" style={{ marginRight: props.margin }}>
                <div id="top-bar">
                    <div id="top-bar-left">
                        <img alt="folder" src={folder} width="45px" />
                    </div>
                    <div id="top-bar-right">
                        <a href="https://github.com/omar-dajani" style={{ marginRight: "10px" }} rel="noopener noreferrer" target="_blank"><i className="fab fa-github" /></a>
                        <a href={props.link} rel="noopener noreferrer" target="_blank" style={{ marginRight: "30px" }}><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div id="archive-block-title">
                    {props.title}
                </div>
                <div id="archive-block-summary">
                    {props.summary}
                </div>
                <div id="archive-block-languages">
                    {props.languages}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ArchiveBlock;