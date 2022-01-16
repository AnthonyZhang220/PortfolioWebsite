import React, { useState } from 'react';
import "./Contact.scss"

export default function Contact() {
    let currentYear = new Date().getFullYear();

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        recruiter: false,
        collaborator: false,
    })

    const [submitted, setSubmitted] = useState(false)
    const [checked, setChecked] = useState([false, false])

    const handleName = (event) => {
        event.persist();
        setInput((values) => ({
            ...values, name: event.target.value,
        }))
    }
    const handleEmail = (event) => {
        event.persist();
        setInput((values) => ({
            ...values, email: event.target.value,
        }))
    }
    const handleMessage = (event) => {
        event.persist();
        setInput((values) => ({
            ...values, message: event.target.value,
        }))
    }
    const handleRecruiter = (event) => {
        event.persist();

        setChecked(!(checked[0]));
        console.log(checked[0]);

        setInput((values) => ({
            ...values, recruiter: checked[0],
        }))

    }
    const handleCollaborator = (event) => {
        event.persist();
        setChecked(!(checked[1]));
        console.log(checked[1]);
        setInput((values) => ({
            ...values, collaborator: checked[1],
        }));
    }
    const [valid, setValid] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.name && input.email && input.message) {
            setValid(true);
        }
        setSubmitted(true);

        console.log(input);

    }



    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <div className="illustration">
                    <img src="/assets/images/contact_bg.png" alt="contact_background_image" />
                </div>
                <div className="form-wrapper">
                    <div className="contact-title">
                        <h1>
                            Contact Me
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} id="form">
                        <label>
                            <input type="name" value={input.name} onChange={handleName} placeholder='Name' />
                            <br />
                            {submitted && !input.lastName && <span id='error'>Please enter your name.</span>}
                        </label>
                        <label>
                            <input type="email" value={input.email} onChange={handleEmail} placeholder='Email' />
                            <br />
                            {submitted && !input.lastName && <span id='error'>Please enter your email.</span>}
                        </label>
                        <label>
                            <textarea type="message" value={input.message} onChange={handleMessage} form="form" placeholder='Message' />
                            <br />
                            {submitted && !input.lastName && <span id='error'>Please enter a message.</span>}
                        </label>
                        <label>
                            Recruiter
                            <input type="checkbox" defaultChecked={checked[0]} onChange={handleRecruiter} />
                        </label>
                        <label>
                            <span>
                                Collaborator
                                <input type="checkbox" defaultChecked={checked[1]} onChange={handleCollaborator} />

                            </span>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <footer>
                <div className="copyright">
                    <span id="copyright">
                        Copyright &copy; 2020-{currentYear} Anthony Zhang - All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    )
}
