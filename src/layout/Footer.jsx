import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="second__container">
                <div className="footer__info">
                    <h2>
                        <button className="scrollUpmain">ALIAALAM</button>
                    </h2>
                    <ul>
                        <li>
                            <span>About</span>
                            <ul className="scrollUpBtn">
                                <li>
                                    <button>Protfolio</button>
                                </li>
                                <li>
                                    <button>Bulid up</button>
                                </li>
                                <li>
                                    <button>Skill Up</button>
                                </li>
                                <li>
                                    <button>Project Work</button>
                                </li>
                                <li>
                                    <button>Study Work</button>
                                </li>
                                <li>
                                    <button>Growing</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>Connect</span>
                            <ul>
                                <li>ALIAALAM</li>

                                <li className="mb-20">ASIA/PAKISTAN</li>

                                <li>
                                    <a href="mailto:aliaalam.me@gmail.com">aliaalam.me@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://aliaalam.surge.sh/">aliaalam.com</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer_btn">
                    <a href="https://www.instagram.com/dev.aliaalam/" target="_blank">
                       Instagram
                    </a>
                    <a href="https://www.facebook.com/aliaalam.dev" target="_blank">
                       Facebook
                    </a>
                    <a href="https://www.snapchat.com/add/aliaalam.dev" target="_blank">
                       Snapchat
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
