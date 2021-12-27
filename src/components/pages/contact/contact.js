import React from 'react';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import './contact.css';

function Contact(props) {
    const [content, setContent] = useState(1);
    const [messageStatus, setMessageStatus] = useState("unset");

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_8qho53h', 'template_b30lraj', e.target ,'user_oQ7kRU1IBefvNgNOYWwk6')
            .then((result) => {
                console.log(result.text);
                setMessageStatus("sent");
            }, (error) => {
                console.log(error.text);
                setMessageStatus("failed");
            });

        e.target.reset();
    }
    return (
        <Container id="container-4">
            {content === 1 &&
                <div id="contact-header" >
                    <div id="whats-next">
                        04. What's Next?
                    </div>
                    <div id="get-in-touch">
                        Get In Touch
                    </div>
                    <div id="contact-paragraph">
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </div>
                    <Button id="say-hello" onClick={
                        () => {
                            setContent(2);
                        }
                    }>
                        Say Hello
                    </Button>
                </div>
            }
            {(content === 2) &&
                <div id="contact-2">
                    {messageStatus !== "sent" && <div>
                        <span id="contact-me">
                            Contact Me
                        </span>
                        <span id="contact-me-low">
                            You should hear back from me soon :)
                        </span>
                        <Form id="form" onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="field" type="email" placeholder="Enter email" name="from_email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="field" type="text" placeholder="Enter name" name="from_name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="field" type="text" placeholder="Enter subject" name="subject" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="field" as="textarea" rows={10} placeholder="Enter message" name="message" />
                            </Form.Group>
                            <Button id="submit" variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>}
                    {messageStatus === "sent" && <div id="sent">
                        <div id="sent-title">
                            Sent!
                        </div>
                        <div id="sent-message">
                            Thanks for reaching out, keep an eye out for an email from me!
                        </div>
                    </div>}
                </div>}
        </Container >
    );
}

export default Contact;