"use client"

import React, { useState } from "react";
import "./style.css"; // Import the CSS module

export default function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const sendMsg = () => {
        const url = `https://wa.me/917428728458?text=I'm%20${name.replaceAll(" ", "%20")},%20${message.replaceAll(" ", "%20")}`;

        window.open(url, "_blank");
    }
    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                <div className={'flexContainer'}>
                    {/* Left Section */}
                    <div className={'leftSection'}>
                        <h1 className={'heading'}>Contact Us</h1>
                        <p className={'info'}>
                            <span className="flex items-center gap-2" style={{textWrap: "wrap"}}>
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <b>Address</b>: C5C-14A, Janak Puri, New Delhi
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <b>Email</b>:{' '}
                                <a href="mailto:meerasight@gmail.com" className={'link'}>
                                    meerasight@gmail.com
                                </a>
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <b>WhatsApp</b>:{' '}
                                <a href="tel:+917428728458" className={'link'}>
                                    +91-7428728458
                                </a>

                                <p className="flex items-center gap-2">
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <b>Tel.</b>:{' '}
                                <a href="tel:+911147092310" className={'link'}>
                                    +91-11-47092310
                                </a>
                                </p>
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <a href="https://www.google.com/maps/dir//C5C-14A,+Janakpuri,+Delhi,+110058/@28.6141403,77.0148757,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d055aa8ed8889:0x466a3246cc8bf154!2m2!1d77.0972771!2d28.6141652?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D" className={'link'}>
                                    <u><b>Locate Us</b></u>
                                </a>
                            </span>
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className={'rightSection'}>
                        <form className={'form'}>
                            <div className={'inputGroup'}>
                                <label htmlFor="name" className={'label'}>
                                    Name
                                </label>
                                <input onChange={e => setName(e.target.value)} type="text" id="name" className={'input'} />
                            </div>
                            <div className={'inputGroup'}>
                                <label htmlFor="email" className={'label'}>
                                    Email
                                </label>
                                <input type="email" id="email" className={'input'} />
                            </div>
                            <div className={'inputGroup'}>
                                <label htmlFor="phone" className={'label'}>
                                    Phone
                                </label>
                                <input type="text" id="phone" className={'input'} />
                            </div>
                            <div className={'inputGroup'}>
                                <label htmlFor="subject" className={'label'}>
                                    Subject
                                </label>
                                <input type="text" id="subject" className={'input'} />
                            </div>
                            <div className={'inputGroup'}>
                                <label htmlFor="message" className={'label'}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className={'textarea'}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className={'inputGroup'}>
                                <label className={'checkboxLabel'}>
                                    <input type="checkbox" className={'checkbox'} /> I want to
                                    subscribe to the Blogs & newsletter.
                                </label>
                            </div>
                            <div>
                                <button onClick={sendMsg} type="submit" className={'button'}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
