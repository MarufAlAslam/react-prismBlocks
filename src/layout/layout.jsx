import React, { useEffect } from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import HomeHero from '../components/home-hero'

const Layout = () => {
    const [pathName, setPathName] = React.useState(window.location.pathname)
    useEffect(() => {
        setPathName(window.location.pathname)
    }
        , [])
    return (
        <div>
            <div className={`hero ${pathName === '/' ? "homepage" : ""}`}>
                <Header />
                {
                    pathName === '/' && <HomeHero />
                }
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout