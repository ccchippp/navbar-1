import React from 'react'
import { Bars, NavMenu, NavLink, Nav, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    {/* <img src="" alt=""/> */}
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/service' activeStyle>
                        Service
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-in'></NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
