import React from 'react'

const HeaderLine = () => {
    return (
        <section className="headline panel">
            <div className="headline__wrap first__container">
                <div className="headline__info">
                    <h2>
                        <span>
                            <em className="headline__one">P</em>
                            <em className="headline__one">o</em>
                            <em className="headline__one">r</em>
                            <em className="headline__one">t</em>
                        </span>
                        <strong>
                            <em className="headline__tit">MERN STACK</em>
                        </strong>
                    </h2>
                    <p className="headline__desc">
                       
                        <br />
                    </p>
                    <button type="button" className="headline__btn">
                        SCROLL
                    </button>
                </div>
            </div>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="/assets/video/ex.mp4" type="video/mp4" />
                    <source src="/assets/video/ex.mp4" type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>
        </section>
    )
}

export default HeaderLine
