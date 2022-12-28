import React from 'react'
import Navbar from './navbar'
import './header.css'

function Header () {
    return(
        <div className="header-main">
            <Navbar />
            <div className="header-hero">
                <h1 className="header-h1">Clean Blog</h1>
                <h3 className="header-h3">A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}

export default Header