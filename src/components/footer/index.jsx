import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ficon from "../../assets/img/f-icon.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="md:py-[60px] py-[30px]">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap md:gap-[50px] justify-between items-start">
          <div className="md:w-[40%] w-full border border-[#282829] rounded-[22px] md:py-[60px] md:px-[80px] py-[20px] px-[30px] md:block flex gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="logo" className="md:w-14 w-[50px] mb-4" />
            </Link>

            <p className="md:text-sm text-xs text-white mt-5">
              Empowering clients with by proactively detect and prevent criminal
              activities, ensuring the highest level of security and integrity
              before transactions are approved on the blockchain.
            </p>
          </div>

          <div className="md:grid hidden md:grid-cols-3 grid-cols-1 py-[40px] w-[60%] justify-center items-start">
            <div className="item md:border-r border-[#181818]">
              <p className="text-sm font-semibold mb-6">Quick Links</p>

              <Link
                to="/"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Home
              </Link>
              <Link
                to="/team"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Our Team
              </Link>
              <Link
                to="/news"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                News & Events
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Contact Us
              </Link>
              {/* <Link
                to="/contact"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Contact Us
              </Link> */}
              {/* <Link
                to="/faq"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                FAQ
              </Link> */}
            </div>
            <div className="item md:border-r md:pl-10 border-[#181818]">
              <p className="text-sm font-semibold mb-6">Resources</p>

              {/* <Link
                to="/"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Blog
              </Link> */}
              {/* <Link
                to="/about"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Case Studies
              </Link> */}
              <Link
                to="https://docsend.com/view/ibszysy223khq4v5/"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Whitepapers
              </Link>
              {/* <Link
                to="/roadmap"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Security Reports
              </Link> */}
              {/* <Link
                to="/roadmap"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Waitinglist
              </Link> */}
              <Link
                to="https://docsend.com/view/s5jdedajn7ypvmfx"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                The Deck
              </Link>
            </div>
            <div className="item md:pl-10 border-[#181818]">
              <p className="text-sm font-semibold mb-6">Legal</p>

              <Link
                to="/privacy-policy"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-use"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Terms of Use
              </Link>
              {/* <Link
                to="/services"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Cookie Policy
              </Link>
              <Link
                to="/roadmap"
                className="block text-sm text-white mb-3 hover:text-[#ff6d00]"
              >
                Regulatory Complience
              </Link> */}
            </div>
          </div>

          <div className="mobile-footer w-full md:hidden grid grid-cols-2">
            <div className="left pb-3 pt-5 text-center border-r border-[#616161]">
              <div className="flex flex-col gap-3">
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About Us</Link>
                <Link to={"/"}>Services</Link>
                <Link to={"/"}>Roadmap</Link>
                <Link to={"/"}>Contact Us</Link>
                <Link to={"https://docsend.com/view/s5jdedajn7ypvmfx"}>
                  The Deck
                </Link>
              </div>
            </div>
            <div className="left pb-3 pt-5 text-center">
              <div className="flex flex-col gap-3">
                {/* <Link to={"/"}>FAQ</Link> */}
                <Link to={"/"}>Blog</Link>
                <Link to={"/"}>Case Studies</Link>
                <Link to={"https://docsend.com/view/ibszysy223khq4v5/"}>
                  WhitePaper
                </Link>
                <Link to={"/"}>Security Reports</Link>
                <Link to={"/"}>Waitinglist</Link>
              </div>
            </div>
          </div>

          <div className="border-y border-[#616161] w-full py-4 md:hidden flex justify-center items-center gap-5">
            <Link to="/privacy-policy" className="text-white">
              Privacy Policy
            </Link>
            <Link to="/" className="text-white">
              Cookie Policy
            </Link>
          </div>
          <div className="border-b border-[#616161] w-full py-4 md:hidden flex justify-center items-center gap-5">
            <Link to="/terms-of-use" className="text-white">
              Terms of Use
            </Link>
            <Link to="/" className="text-white">
              Regulatory Compliance
            </Link>
          </div>
        </div>

        <div className="copyright md:block hidden mt-6 py-2 px-10">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="left md:w-[40%] w-full">
              <p className="text-white">
                © 2024 PrismBlocks. All rights reserved.
              </p>
            </div>
            <div className="middle md:w-[20%] w-full">
              <img src={ficon} className="block" alt="" />
            </div>
            <div className="right md:w-[40%] w-full flex justify-end items-center gap-4">
              {/* <Link to="/" className="text-white">
                <FaFacebookF />
              </Link> */}
              <Link to="https://twitter.com/Prism_Blocks" className="text-white">
                <FaXTwitter />
              </Link>
              {/* <Link to="" className="text-white">
                <FaInstagram />
              </Link> */}
              <Link to="https://t.me/PrismBlocks" className="text-white">
                <FaTelegramPlane />
              </Link>
            </div>
          </div>
        </div>

        <div className="mobile-copyright mt-5 md:hidden block text-center">
          <img src={ficon} className="block mx-auto w-[100px]" alt="" />

          <div className="right mobile-social py-4 md:w-[40%] mt-4 w-full flex justify-center items-center gap-4">
            {/* <Link to="/" className="text-white text-2xl">
              <FaFacebookF />
            </Link> */}
            <Link to="https://twitter.com/Prism_Blocks" className="text-white text-2xl">
              <FaXTwitter />
            </Link>
            {/* <Link to="/" className="text-white text-2xl">
              <FaInstagram />
            </Link> */}
            <Link to="https://t.me/PrismBlocks" className="text-white text-2xl">
              <FaTelegramPlane />
            </Link>
          </div>

          <p className="text-center text-sm mt-6">
            © 2024 PrismBlocks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
