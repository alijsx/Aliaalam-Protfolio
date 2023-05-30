import React, { useEffect, useRef } from 'react'
import Hole from '../../utils/Hole'
import  profile from '../../assets/img/profile.png'

const About = () => {
    const holeOneref = useRef(null)
    const holeTworef = useRef(null)
    useEffect(() => {
        const holeOne = new Hole('', holeOneref.current, 0xfb0692)
        const holeTwo = new Hole('', holeTworef.current, 0x07d36e)
    }, [])

    return (
        // onLoad={handleFocus}
        <section className="about">
            <div className="second__container">
                <article className="bulidUp">
                    <div className="bulidUp__info">
                        <h2>
                            <span>build Up</span> Developer
                        </h2>
                        <p>
                            Hello.This Is Ali Aalam.A Mern Stack Developer
                            <br />
                            Welcome to my portfolio. To compensate for the lack of design, 
                            <br />
                            I learned the web responsive UI/UX web publisher course, and 
                            <br />
                            I gradually became interested in Mern-Stack development that can implement dynamic things on web pages.
                            <br />
                        </p>
                    </div>
                    <div className="holebox1 hole" ref={holeOneref}></div>
                </article>

                <img className="profile" src={profile} alt="profile" />
                <article className="skillUp">
                    <div className="skillUp__info">
                        <h2>
                            <span>Skill Up</span> Developer
                        </h2>
                        <h3 className="skillUp__info__subtit">Languages</h3>
                        <p className="skillUp__info__lang">html5, css3, Javascript, MongoDB, Express, React, NodeJS</p>
                        <p className="skillUp__info__desc">
                        Hello.This Is Ali Aalam.A Mern Stack Developer
                            <br />
                            Welcome to my portfolio. To compensate for the lack of design, 
                            <br />
                            I learned the web responsive UI/UX web publisher course, and 
                            <br />
                            I gradually became interested in Mern-Stack development that can implement dynamic things on web pages.
                            <br />
                        </p>
                        <a href="https://www.instagram.com/dev.aliaalam/" target="_blank">
                            Go Instagram
                        </a>
                    </div>
                    <div className="holebox2 hole" ref={holeTworef}></div>
                </article>
            </div>
        </section>
    )
}

export default About
