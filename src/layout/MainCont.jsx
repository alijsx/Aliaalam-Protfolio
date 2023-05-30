import React from 'react'
import HeaderLine from '../components/mainconts/HeaderLine'
import About from '../components/mainconts/About'
import Example from '../components/mainconts/Example'
import Project from '../components/mainconts/Project'
import StudyWork from '../components/mainconts/StudyWork'
import Growing from '../components/mainconts/Growing'
import GroupPhoto from '../components/mainconts/GroupPhoto'
import Connect from '../components/mainconts/Connect'

const MainCont = () => {
    const exampleClass = ['topEx', 'black']
    return (
        <main>
            <HeaderLine />
            <About />
            <Example exampleClass={exampleClass[0]} />
            <Project />
            <Example exampleClass={exampleClass[1]} />
            <StudyWork />
            <Growing />
            <GroupPhoto />
            <Connect />
        </main>
    )
}

export default MainCont
