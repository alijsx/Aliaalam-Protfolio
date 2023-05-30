import { gsap } from 'gsap'

function loader() {
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
}

export default loader
