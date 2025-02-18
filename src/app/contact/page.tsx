import React from "react";
import "./style.css"; // Import the CSS module

export default function Contact() {
    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                <div className={'flexContainer'}>
                    {/* Left Section */}
                    <div className={'leftSection'}>
                        <h1 className={'heading'}>Contact Us</h1>
                        <p className={'info'}>
                            <span>
                                <img
                                    src="https://img.icons8.com/ios-filled/20/6b3674/home.png"
                                    alt="Location icon"
                                    className={'icon'}
                                />
                                C5C-14A, Janak Puri,
                                <br />
                                New Delhi - 11 00 58
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <img
                                    src="https://img.icons8.com/ios-filled/20/6b3674/email.png"
                                    alt="Email icon"
                                    className={'icon'}
                                />
                                <a href="mailto:meerasight@gmail.com" className={'link'}>
                                    meerasight@gmail.com
                                </a>
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <img
                                    src="https://img.icons8.com/ios-filled/20/6b3674/phone.png"
                                    alt="Phone icon"
                                    className={'icon'}
                                />
                                <a href="tel:+917428728458" className={'link'}>
                                    +91-7428728458
                                </a>
                                <br />
                                <a href="tel:+911147092310" className={'link'}>
                                    +91-11-47092310
                                </a>
                            </span>
                        </p>
                        <p className={'info'}>
                            <span>
                                <img
                                    src="https://img.icons8.com/ios-filled/20/6b3674/marker.png"
                                    alt="Locate icon"
                                    className={'icon'}
                                />
                                <a href="#" className={'link'}>
                                    Locate Us
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
                                <input type="text" id="name" className={'input'} />
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
                                ></textarea>
                            </div>
                            <div className={'inputGroup'}>
                                <label className={'checkboxLabel'}>
                                    <input type="checkbox" className={'checkbox'} /> I want to
                                    subscribe to the Blogs & newsletter.
                                </label>
                            </div>
                            <div>
                                <button type="submit" className={'button'}>
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
