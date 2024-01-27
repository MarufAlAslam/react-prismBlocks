import React from 'react'
import SecuredBtn from '../secured-btn'

const HomeHero = () => {
    return (
        <div className='pt-[400px] md:pt-[245px] pb-[220px] homepage-hero relative top-[-135px] mb-[-135px]'>
            <div className="container">
                <div className="lg:w-1/2 md:w-2/3 w-full">
                    <h1 className='font-semibold text-white text-[32px] md:text-[60px] mb-[50px]'>
                        Revolutionizing <br />Blockchain <br />Security
                    </h1>
                    <SecuredBtn />
                </div>
            </div>
        </div>
    )
}

export default HomeHero