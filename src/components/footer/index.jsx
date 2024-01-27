import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import ficon from "../../assets/img/f-icon.png"
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='py-[60px]'>
            <div className="container">
                <div className="flex md:flex-nowrap flex-wrap gap-[50px] justify-between items-start">
                    <div className="md:w-[40%] w-full border border-[#282829] rounded-[22px] md:py-[60px] md:px-[80px] py-[20px] px-[30px] md:block flex gap-4">
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="logo" className="md:w-14 w-[50px] mb-4" />
                        </Link>

                        <p className='md:text-sm text-xs text-white mt-5'>
                            Empowering clients with by proactively detect and prevent criminal activities, ensuring the highest level of security and integrity before transactions are approved on the blockchain.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 py-[40px] w-[60%] justify-center items-start">
                        <div className="item md:border-r border-[#181818]">
                            <p className='text-sm font-semibold mb-6'>Quick Links</p>

                            <Link to="/" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Home</Link>
                            <Link to="/about" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">About Us</Link>
                            <Link to="/services" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Services</Link>
                            <Link to="/roadmap" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Roadmap</Link>
                            <Link to="/contact" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Contact Us</Link>
                            <Link to="/faq" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">FAQ</Link>
                        </div>
                        <div className="item md:border-r md:pl-10 border-[#181818]">
                            <p className='text-sm font-semibold mb-6'>Resources</p>

                            <Link to="/" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Blog</Link>
                            <Link to="/about" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Case Studies</Link>
                            <Link to="/services" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Whitepapers</Link>
                            <Link to="/roadmap" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Security Reports</Link>
                        </div>
                        <div className="item md:pl-10 border-[#181818]">
                            <p className='text-sm font-semibold mb-6'>Legal</p>

                            <Link to="/" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Privacy Policy</Link>
                            <Link to="/about" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Terms of Use</Link>
                            <Link to="/services" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Cookie Policy</Link>
                            <Link to="/roadmap" className="block text-sm text-white mb-3 hover:text-[#ff6d00]">Regulatory Complience</Link>
                        </div>
                    </div>
                </div>

                <div className="copyright mt-6 py-2 px-10">
                    <div className="flex md:flex-row flex-col justify-between items-center">
                        <div className="left md:w-[40%] w-full">
                            <p className='text-white'>© 2024 PrismBlocks. All rights reserved.</p>
                        </div>
                        <div className="middle md:w-[20%] w-full">
                            <img src={ficon} className="block" alt="" />
                        </div>
                        <div className="right md:w-[40%] w-full flex justify-end items-center gap-4">
                            <Link to="/" className="text-white">
                                <FaFacebookF />
                            </Link>
                            <Link to="/" className="text-white">
                                <FaXTwitter />
                            </Link>
                            <Link to="/" className="text-white">
                                <FaInstagram />
                            </Link>
                            <Link to="/" className="text-white">
                                <FaTelegramPlane />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer