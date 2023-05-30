import React, { useEffect } from 'react'

import Intro from './components/Intro'
import Header from './layout/Header'
import MainCont from './layout/MainCont'
import Footer from './layout/Footer'
import maingsap from './utils/maingsap'
import click from './utils/click'

const App = () => {
    const bodyStart = () => {
        document.body.style.height = '100vh'
        document.body.style.overflow = 'hidden'
        console.log(document.body)
    }
    const bodyComplete = () => {
        document.body.style.height = 'auto'
        document.body.style.overflow = 'unset'
    }
    useEffect(() => {
        bodyStart()
        setTimeout(() => {
            bodyComplete()
        }, 10000)
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0)
        }

        click()
        maingsap()
    }, [])

    return (
        <>
            <Intro />
            <Header />
            <MainCont />
            <Footer />
        </>
    )
}

export default App
