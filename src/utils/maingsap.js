import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

function maingsap() {
    const splitText = (selector) => {
        const elem = document.querySelector(selector)

        const text = elem.innerText
        const chars = text.split('')
        for (let index = 0; index < chars.length; index++) {
            if (chars[index] === ' ') {
                chars[index] = '&nbsp;'
            }
        }

        const charsContainer = document.createElement('div')
        const charsArray = []

        charsContainer.style.position = 'relative'
        charsContainer.style.display = 'inline-block'

        chars.forEach((char) => {
            const charContainer = document.createElement('span')

            charContainer.style.position = 'relative'
            charContainer.style.display = 'inline-block'
            charContainer.innerHTML = char
            charsContainer.appendChild(charContainer)

            charsArray.push(charContainer)
        })
        // remove current text
        elem.innerHTML = ''
        // append new structure
        elem.appendChild(charsContainer)

        return charsArray
    }

    let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 })
    const chars = splitText('.loader__item--c')
    tl.to('.loader__item--c', { opacity: 1, duration: 0 })
    tl.from(
        chars,
        {
            duration: 1.5,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            delay: 0.5,
            ease: 'elastic.out(1, 0.3)',
        },
        '-=0.5'
    )
    tl.fromTo(
        '.loader__item--ct',
        {
            opacity: 0,
            y: '400%',
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
        },
        '-=1'
    )
    tl.fromTo(
        '.loader__item--cb',
        {
            opacity: 0,
            y: '-400%',
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
        },
        '-=1.5'
    )

    tl.fromTo(
        '.loader__item--ctt',
        {
            opacity: 0,
            y: '400%',
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
        },
        '-=0.5'
    )
    tl.fromTo(
        '.loader__item--cbb',
        {
            opacity: 0,
            y: '-400%',
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
        },
        '-=1.5'
    )

    tl.fromTo(
        '.loader__col--2 .loader__item',
        {
            opacity: 0,
            x: '80%',
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
        },
        '-=0'
    )
    tl.fromTo(
        '.loader__col--4 .loader__item',
        {
            opacity: 0,
            x: '-80%',
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
        },
        '-=1'
    )

    tl.fromTo(
        '.loader__col--1 .loader__item',
        {
            opacity: 0,
            x: '80%',
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
        },
        '-=0.3'
    )
    tl.fromTo(
        '.loader__col--5 .loader__item',
        {
            opacity: 0,
            x: '-80%',
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
        },
        '-=1'
    )
    tl.to(
        '.dope',
        {
            delay: 0.2,
            opacity: 0,
            duration: 1,
        },
        '-=0.2'
    )
    tl.to('.loader__item--c', {
        scale: 40,
        duration: 1.5,
        ease: 'sine.out',
    })

    tl.to(
        '.loader__item--c',
        {
            opacity: 0,
            duration: 1,
        },
        '-=0.3'
    )
    tl.to('.loader', {
        className: 'dnone',
    })

    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.saveStyles('.mobile, .desktops');
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 })
    ScrollTrigger.saveStyles('.mobile, .desktops')
    ScrollTrigger.matchMedia({
        '(min-width: 1100px)': function () {
            const sections1 = gsap.utils.toArray('.card1 .card')
            const sections2 = gsap.utils.toArray('.card2 .card')
            const sections3 = gsap.utils.toArray('.card3 .card')
            // const sections4 = gsap.utils.toArray('.card4 .card');

            const horiz = gsap.to(sections1, {
                xPercent: -131 * (sections1.length - 1),
                ease: 'none',
                scrollTrigger: {
                    start: 'top 5%',
                    trigger: '.card1',
                    pin: true,
                    scrub: 1,
                    end: '+=5000',
                    // markers: true,
                },
            })
            // const horiz2 = gsap.to(sections2, {
            //     yPercent: -130 * (sections2.length - 1),
            //     ease: 'none',
            //     scrollTrigger: {
            //         start: 'top 5%',
            //         trigger: '.card2',
            //         pin: true,
            //         scrub: 1,
            //         end: '+=5000',
            //         // markers: true,
            //     },
            // });
            const horiz3 = gsap.to(sections3, {
                xPercent: -130 * (sections3.length - 1),
                ease: 'none',
                scrollTrigger: {
                    start: 'top 5%',
                    trigger: '.card3',
                    pin: true,
                    scrub: 1,
                    end: '+=5000',
                    // markers: true,
                },
            })

            gsap.utils.toArray('.desc__title').forEach((desc, i) => {
                gsap.set(desc, {
                    opacity: 1,
                })
            })
            document.querySelectorAll('.t_movement').forEach((e, inx) => {
                if (inx === 0) {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: e,
                            containerAnimation: horiz,
                            start: 'left 100%',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                } else {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: e,
                            containerAnimation: horiz,
                            start: '-50% 70%',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                }
            })

            document.querySelectorAll('.t_movement2').forEach((e, inx) => {
                if (inx === 0) {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: e,
                            start: 'left 100%',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                } else {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: e,
                            start: '-50% 70%',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                }
            })

            document.querySelectorAll('.t_movement3').forEach((e, inx) => {
                if (inx === 0) {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: e,
                            containerAnimation: horiz3,
                            start: 'left 100%',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                } else {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: e,
                            containerAnimation: horiz3,
                            start: '-50% 70%',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                }
            })

            document.querySelectorAll('.t_movement4').forEach((e, inx) => {
                // console.log(e);
                if (inx === 0) {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.card4',
                            start: '20% center',
                            end: '20% center',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                } else {
                    gsap.set(e, {
                        y: '-10%',
                        opacity: 0,
                    })
                    gsap.to(e, {
                        y: '-20%',
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.card4',
                            start: '20% center',
                            end: '20% center',
                            toggleActions: 'play none none play',
                            // markers: true,
                        },
                    })
                }
            })

            gsap.set('.connect__info h2', {
                x: '2000',
            })
            gsap.to('.connect__info h2', {
                xPercent: -130,
                ease: 'none',
                scrollTrigger: {
                    start: 'top center',
                    trigger: '.connect__info h2',
                    // pin: true,
                    scrub: 1,
                    end: '200% center',
                    //markers: true,
                },
            })
        },
        '(max-width: 1099px)': function () {
            gsap.utils.toArray('.desc__title').forEach((desc, i) => {
                gsap.set(desc, {
                    opacity: 0,
                })
                gsap.to(desc, {
                    duration: 0.5,
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: desc,
                        start: 'top 70%',
                        end: 'top 70%',
                        toggleActions: 'play none none play',
                        // markers: true,
                    },
                })
            })

            gsap.utils.toArray('.desc__info').forEach((desc, i) => {
                gsap.set(desc, {
                    y: '-10%',
                    opacity: 0,
                })
                gsap.to(desc, {
                    y: '-20%',
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: desc,
                        start: 'top 70%',
                        toggleActions: 'play none none play',
                        // markers: true,
                    },
                })
            })

            gsap.set('.connect__info h2', {
                x: '1300',
            })
            gsap.to('.connect__info h2', {
                xPercent: -150,
                ease: 'none',
                scrollTrigger: {
                    start: 'top center',
                    trigger: '.connect__info h2',
                    // pin: true,
                    scrub: 1,
                    end: '200% center',
                    //markers: true,
                },
            })
        },

        all: function () {
            gsap.set('.headline__tit', {
                opacity: 1,
            })

            tl.fromTo(
                '.headline__tit',
                {
                    x: -1000,
                },
                { x: 0, duration: 0.6 }
            )
            tl.fromTo(
                '.headline__one',
                {
                    opacity: 0,
                    y: 100,
                },
                { opacity: 1, y: 0, duration: 0.8 }
            )
            tl.fromTo('.headline__desc', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
            tl.to('.bg-video__content', { y: 0, opacity: 1, duration: 0.4 }, '-=0.6')
            tl.fromTo('.headline__btn', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2')
            tl.fromTo('.header', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1')

            gsap.fromTo(
                '.logo',
                {
                    color: '#ffffff',
                },
                {
                    scrollTrigger: {
                        trigger: '.example.black',
                        start: 'top top',
                        end: '30% top',
                        scrub: true,
                        // markers: true,
                        toggleActions: 'play play reverse play',
                    },
                    color: '#000000',
                }
            )

            gsap.fromTo(
                '.logo',
                {
                    color: '#000000',
                },

                {
                    scrollTrigger: {
                        trigger: '.groupPhoto',
                        start: 'top top',
                        end: '30% top',
                        scrub: true,
                        // markers: true,
                        toggleActions: 'play play reverse play',
                    },
                    color: '#ffffff',
                }
            )

            gsap.set('.logo', {
                color: '#ffffff',
            })

            gsap.utils.toArray('.panel').forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                })
            })

            gsap.set('.bulidUp__info h2', {
                y: -100,
            })
            gsap.to('.bulidUp__info h2', {
                scrollTrigger: {
                    trigger: '.bulidUp__info h2',
                    start: '-150% center',
                    end: '-150% center',
                    // scrub: true,
                    //markers: true,
                    toggleActions: 'play play play play',
                },
                duration: 2,
                opacity: 1,
                y: 0,
                ease: 'elastic.out(1, 0.3)',
                stagger: 0.1,
            })

            gsap.set('.bulidUp__info p', {
                y: 100,
            })
            gsap.to('.bulidUp__info p', {
                scrollTrigger: {
                    trigger: '.bulidUp__info h2',
                    start: '-150% center',
                    end: '-150% center',
                    // scrub: true,
                    //markers: true,

                    toggleActions: 'play play play play',
                },
                duration: 2,
                opacity: 1,
                y: 0,
                ease: 'elastic.out(1.5, 0.3)',
                stagger: 0.1,
            })

            gsap.to('.holebox1', {
                scrollTrigger: {
                    trigger: '.bulidUp__info h2',
                    start: '-150% center',
                    end: '-150% center',
                    // scrub: true,
                    //markers: true,

                    toggleActions: 'play play play play',
                },
                delay: 0.4,
                duration: 2,
                opacity: 1,
            })
            gsap.to('.holebox2', {
                scrollTrigger: {
                    trigger: '.skillUp__info',
                    start: '-80% center',
                    end: '-80% center',
                    // scrub: true,
                    //markers: true,

                    toggleActions: 'play play play play',
                },
                delay: 0.6,
                duration: 2,
                opacity: 1,
            })

            gsap.to('.profile', {
                scrollTrigger: {
                    trigger: '.bulidUp__info h2',
                    start: '-150% center',
                    end: '-150% center',
                    // scrub: true,
                    //markers: true,

                    toggleActions: 'play play play play',
                },
                delay: 0.6,
                duration: 2,
                opacity: 1,
            })

            gsap.set('.skillUp__info', {
                x: '-100%',
            })
            gsap.to('.skillUp__info', {
                scrollTrigger: {
                    trigger: '.skillUp__info',
                    start: '-80% center',
                    end: '-80% center',
                    // scrub: true,
                    //markers: true,

                    toggleActions: 'play play play play',
                },
                duration: 2,
                opacity: 1,
                x: 0,
                ease: 'elastic.out(0.5, 0.3)',
                // stagger: 0.1,
            })

            gsap.to('.groupPhoto', {
                scrollTrigger: {
                    trigger: '.groupPhoto',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                    // markers: true,

                    toggleActions: 'play play reverse play',
                },
                opacity: 1,
                // stagger: 0.1,
            })
        },
    })
}
export default maingsap
