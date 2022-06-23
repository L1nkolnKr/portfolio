import React, {useContext, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import"./contact.css"
import {ThemeContext} from "../../context";



const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_ftp4d91',
            'template_bgtjdfo',
            formRef.current,
            "0cu1CC6tmolGpD51K")
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Title</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="" alt="Phone" className="c-icon"/>
                            Phone number
                        </div>
                        <div className="c-info-item">
                            <img src="" alt="Email" className="c-icon"/>
                            Contact email
                        </div>
                        <div className="c-info-item">
                            <img src="" alt="Address" className="c-icon"/>
                            Address
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Contact with me</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank you for a message"}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;