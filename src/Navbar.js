import styles from './Navbar.css'
import React from 'react'

function Navbar() {
    return (
        <div className='Navbar'>
            <span className="hamburger"><p>-</p></span>
            <span className="home">home</span>
            <span className="search">search</span>
            <span className="voice">voice</span>
            <span className="create">create</span>
            <span className="notifications">notifications</span>
            <span className="profile">profile</span>
        </div>
    )
}

export default Navbar
