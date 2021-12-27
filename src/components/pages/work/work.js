import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Container, Button } from 'react-bootstrap';

import './work.css';

function Work(props) {
    const [helper, setHelper] = useState(false);
    const currentSelection = useRef(0);

    let one = <span>
        <div id="work-title">
            Software Engineer @ <a href="http://www.1trolley.com" rel="noopener noreferrer" target="_blank" className="link">1Trolley</a>
        </div>
        <div id="work-date">
            January 2020 - February 2020
        </div>
        <div id="work-points">
            <ul>
                <li>
                    <i className="fas fa-angle-right">
                    </i>Created a web scraper using PHP to extract data from a website which was later inserted into a database.
                </li>
                <li>
                    <i className="fas fa-angle-right">
                    </i>Program resulted in significant cost savings, time and effort.
                </li>
                <li>
                    <i className="fas fa-angle-right">
                    </i>Built a business website for 1Trolley using HTML, CSS and Bootstrap.
                </li>
            </ul>
        </div>
    </span>

    // let two = <span>
    //     <div id="work-title">
    //         Software Engineer @ <span className="link">WOhooo</span>
    //     </div>
    //     <div id="work-date">
    //         January 2022 - February 2029
    //     </div>
    //     <div id="work-points">
    //         <ul>
    //             <li>
    //                 <i className="fas fa-angle-right">
    //                 </i>fooo a program using PHP and mySQL to automate a task initially assigned with, extracting menus.
    //             </li>
    //             <li>
    //                 <i className="fas fa-angle-right">
    //                 </i>feeee resulted in significant cost savings, time and effort.
    //             </li>
    //             <li>
    //                 <i className="fas fa-angle-right">
    //                 </i>faaaaa a business website for 1Trolley using HTML and CSS.
    //             </li>
    //         </ul>
    //     </div>
    // </span>

    useEffect(() => {
        currentSelection.current = 0;
    }, []);

    return (
        <Container id="container-2">
            <div id="about-header">
                <span id="about-title-num">
                    02.
                </span>
                &nbsp;
                <span id="about-title">
                    Where I've Worked
                </span>
                <hr />
            </div>
            <div id="work-content">
                <div id="work-left">
                    {(currentSelection.current === 0 && <Button onClick={() => { currentSelection.current = 0; setHelper(!helper); }} id="selected-work">1Trolley</Button>) || (currentSelection.current !== 0 && <Button className="normal" onClick={() => { currentSelection.current = 0; setHelper(!helper); }}>1Trolley</Button>)}
                    {/* {(currentSelection.current === 1 && <Button onClick={() => { currentSelection.current = 1; setHelper(!helper); }} id="selected-work">Google</Button>) || (currentSelection.current !== 1 && <Button className="normal" onClick={() => { currentSelection.current = 1; setHelper(!helper); }}>Google</Button>)} */}
                </div>
                <div id="work-right">
                    <div id="work-right-container">
                        {
                               (currentSelection.current === 0 && one)
                            //    || (currentSelection.current === 1 && two)
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Work;