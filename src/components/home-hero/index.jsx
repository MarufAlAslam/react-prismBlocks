import React from 'react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
    return (
        <div className='pt-[110px] pb-[220px]'>
            <div className="container">
                <div className="lg:w-1/2 md:w-2/3 w-full">
                    <h1 className='font-semibold text-white text-[60px] mb-[50px]'>
                        Revolutionizing <br />Blockchain <br />Security
                    </h1>
                    <Link to="/contact" className="text-black inline-block py-[20px] px-[35px] rounded-[10px] bg-[#fff] hover:bg-[#252525]">Click here to Get secured!</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHero