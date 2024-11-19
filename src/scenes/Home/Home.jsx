import React from 'react'
import Contact from './components/Contact'
import Front from './components/Front'
import Nav from './components/Nav'
import Resume_Home from './components/Resume_Home'

function Home() {
    return (
        <div>
            <Nav />
            <Front />
            <Resume_Home />
            <Contact />
        </div>
    )
}

export default Home
