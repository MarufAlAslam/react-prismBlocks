import React from 'react'
import logo from "../../assets/img/logo.png"
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='py-5 relative z-20'>
            <div className="container">
                <div className="flex justify-between items-center gap-3">
                    <NavLink to="/" className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="w-14" />
                    </NavLink>
                    <div className="items flex justify-end items-center gap-[10px] bg-[#252525] px-[18px] py-[15px] rounded-[20px]">
                        <Link to="/" className="text-white block py-[20px] px-[35px] rounded-[20px] hover:bg-[#0e0e0f]">Home</Link>
                        <Link to="/team" className="text-white block py-[20px] px-[35px] rounded-[20px] hover:bg-[#0e0e0f]">Our Team</Link>
                        <Link to="/news" className="text-white block py-[20px] px-[35px] rounded-[20px] hover:bg-[#0e0e0f]">News and Resources</Link>
                        <Link to="/contact" className="text-white block py-[20px] px-[35px] rounded-[20px] Labg-[#0e0e0f]">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav