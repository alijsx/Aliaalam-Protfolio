import React from 'react'
import web1 from '../../assets/img/website01.png'
import web2 from '../../assets/img/website02.png'
import web3 from '../../assets/img/phpsite02.png'
const Project = () => {
    return (
        <section className="project">
            <div className="first__container">
                <article className="project__card__conts card1">
                    <div className="project__card__wrap">
                        <div className="project__card__inner">
                            <div className="project__card__in">
                                <div className="card mobiles">
                                    <div className="desc__title tt_movement">
                                        <h2>
                                            <span>website</span> coding
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">01</span>
                                        <img src={web1} alt="website01" />
                                    </figure>
                                    <div className="desc__info t_movement">
                                        <h2>UPDATED-TO-PTO</h2>
                                        <p>This Is A Social Media Web App Made With React.js Firebase For Backend Chakra UI  For Designing .</p>
                                        <p className="mb-30"></p>
                                        <a href="https://updatedtopro.web.app/" target="_blank">
                                        Site View
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">02</span>
                                        <img src={web2} alt="website02" />
                                    </figure>
                                    <div className="desc__info t_movement">
                                        <h2>Naeem Aslam</h2>
                                        <p>This Is Protfolio Site Made With HTML CSS Javascrip.</p>
                                        <p className="mb-20"></p>
                                        <a href="https://naeem-aslam.surge.sh/" target="_blank">
                                        Site View
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card mobiles">
                                    <div className="desc__title tt_movement">
                                        <h2>
                                            <span>React Js</span> Coding
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="project__card__conts card2">
                    <div className="project__card__wrap">
                        <div className="project__card__inner ywrap">
                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">01</span>
                                        <img src={web1} alt="website02" />
                                    </figure>
                                    <div className="desc__info t_movement2">
                                    <h2>UPDATED-TO-PTO</h2>
                                        <p>This Is A Social Media Web App Made With React.js Firebase For Backend Chakra UI  For Designing .</p>
                                        <p className="mb-30"></p>
                                        <a href="https://updatedtopro.web.app/" target="_blank">
                                           Site View
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">02</span>
                                        <img src={web3} alt="" />
                                    </figure>
                                    <div className="desc__info t_movement2">
                                        <h2>Event Brite</h2>
                                        <p>This Is A Event Planner Web App Made With React.js Firebase For Backend css  For Designing .</p>
                                        <p className="
                                        mb-20"></p>
                                        <a href="https://hackathon-1122.surge.sh" target="_blank">
                                            Site View
                                        </a>
                                      
                                    </div>
                                </div>
                            </div>

                            {/* <div className="project__card__in">
                                <div className="card mobiles">
                                    <div className="desc__title tt_movement2">
                                        <h2>
                                            <span>reactsite</span> coding
                                        </h2>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </article>

                {/* <article className="project__card__conts card3">
                    <div className="project__card__wrap">
                        <div className="project__card__inner">
                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">01</span>
                                        <img src="/assets/img/reactsite01.png" alt="reactsite01" />
                                    </figure>
                                    <div className="desc__info t_movement3">
                                        <h2>APISITE</h2>
                                        <p>React.js 를 이용하여 만든 사이트입니다.</p>
                                        <p className="mb-20">다양한 Open API와 useEffect,useState 를 이용하여 SPA 구현을 했습니다.</p>
                                        <a href="https://reactapi.netlify.app/" target="_blank">
                                            사이트 보기
                                        </a>
                                        <a href="https://github.com/hmm365/react_api" target="_blank">
                                            코드 보기
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">02</span>
                                        <img src="/assets/img/reactsite02.png" alt="reactsite02" />
                                    </figure>
                                    <div className="desc__info t_movement3">
                                        <h2>YOUTUBE</h2>
                                        <p>React.js 를 이용하여 만든 사이트입니다.</p>
                                        <p className="mb-20">youtube API를 이용하여 클론사이트를 구현을 했습니다.</p>
                                        <a href="https://youtubereactapi-site.netlify.app/" target="_blank">
                                            사이트 보기
                                        </a>
                                        <a href="https://github.com/hmm365/react_youtube" target="_blank">
                                            코드 보기
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">03</span>
                                        <img src="/assets/img/reactsite03.png" alt="reactsite03" />
                                    </figure>
                                    <div className="desc__info t_movement3">
                                        <h2>BookSite</h2>
                                        <p>React.js 를 이용하여 만든 사이트입니다.</p>
                                        <p className="mb-20">googleBooks API를 이용하여 책정보 검색 기능을 구현을 했습니다.</p>
                                        <a href="https://bookbookreact.netlify.app/" target="_blank">
                                            사이트 보기
                                        </a>
                                        <a href="https://github.com/hmm365/teamprojectreact" target="_blank">
                                            코드 보기
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project__card__in">
                                <div className="card mobiles">
                                    <div className="desc__title tt_movement3">
                                        <h2>
                                            <span>VUESITE</span> Coding
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
{/* 
                <article className="project__card__conts card4">
                    <div className="project__card__wrap">
                        <div className="project__card__inner">
                            <div className="project__card__in">
                                <div className="card">
                                    <figure className="siteImg">
                                        <span className="num">01</span>
                                        <img src="/assets/img/vuesite01.png" alt="vuesite01" />
                                    </figure>
                                    <div className="desc__info t_movement4">
                                        <h2>APISITE</h2>
                                        <p>Vue.js 를 이용하여 만든 사이트입니다.</p>
                                        <p className="mb-20">다양한 Open API를 이용한 SPA 를 이용하여 spa를 구현했습니다.</p>
                                        <a href="https://vuemyapi.web.app/" target="_blank">
                                            SHOW
                                        </a>
                                        <a href="https://github.com/hmm365/vue_api" target="_blank">
                                            SOURCE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article> */}
            </div>
        </section>
    )
}

export default Project
