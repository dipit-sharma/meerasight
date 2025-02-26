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
                            <span>
                                <b>Address</b>: C5C-14A, Janak Puri,
                                <br />
                                New Delhi - 11 00 58
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <b>Email</b>:{' '}
                                <a href="mailto:meerasight@gmail.com" className={'link'}>
                                    meerasight@gmail.com
                                </a>
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <b>WhatsApp</b>:{' '}
                                <a href="tel:+917428728458" className={'link'}>
                                    +91-7428728458
                                </a>
                                <br />
                                <b>Tel.</b>:{' '}
                                <a href="tel:+911147092310" className={'link'}>
                                    +91-11-47092310
                                </a>
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
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
