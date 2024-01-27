import React from 'react'
import SecuredBtn from '../secured-btn'

const HomeHero = () => {
    return (
        <div className='pt-[110px] pb-[220px]'>
            <div className="container">
                <div className="lg:w-1/2 md:w-2/3 w-full">
                    <h1 className='font-semibold text-white text-[60px] mb-[50px]'>
                        Revolutionizing <br />Blockchain <br />Security
                    </h1>
                    <SecuredBtn />
                </div>
            </div>
        </div>
    )
}

export default HomeHero