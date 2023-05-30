import React, { useEffect } from 'react'
import Header from './Header'
import MainCont from './MainCont'
import Footer from './Footer'
import maingsap from '../utils/maingsap'
import click from '../utils/click'
const Content = () => {
    useEffect(() => {
        click()
        maingsap()
    }, [])
    return (
        <>
            <Header />
            <MainCont />
            <Footer />
        </>
    )
}

export default Content
