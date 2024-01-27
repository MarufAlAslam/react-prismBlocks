import React from 'react'
import briefImg from "../../assets/img/brief-img.png"
import NewsSidebar from '../news-sidebar'

const Brief = () => {
    return (
        <div className='brief py-[40px]'>
            <div className="container">
                <div className="flex justify-between items-start gap-5">
                    <div className="left lg:w-3/4 w-full">
                        <div className="py-[30px] px-[55px] bg-[#181818] rounded-[20px]">
                            <div className="flex justify-between items-start">
                                <h2 className='text-white text-[32px] font-semibold'>
                                    A Comprehensive Guide to Decentralized Technology
                                </h2>
                                <div className="flex py-4 justify-end items-center gap-2">
                                    <button className='px-2 py-1 text-xs bg-white rounded-full text-black'>
                                        Product
                                    </button>
                                    <button className='px-2 py-1 text-xs bg-white rounded-full text-black'>
                                        Product
                                    </button>
                                </div>
                            </div>

                            <img src={briefImg} className='w-full my-4' alt="" />

                            <p className='text-sm'>
                                19 Jan 2024
                            </p>
                            <div className="block">
                                <p className='text-2xl mt-2 mb-4 font-semibold'>
                                    A Comprehensive Guide to Decentralized Technology
                                </p>
                                <p>
                                    Our (TBA) bug HUNTERS platform gives us an extreme boost ahead of our competitors on the detection of new kinds of malicious activities Homepage - we always start from homepage so can you please share content/text for it first, how much time you need? If it takes longer we can extend the order of course :)
                                    If you don't have it ready we will need sections defined so that we can use dummy text.
                                    <br /><br />
                                    Our super-experienced team is capable of doing mind-blowing development in this area.
                                </p>
                            </div>
                            <div className="block mt-10">
                                <p className='text-2xl mt-2 mb-4 font-semibold'>
                                    A Comprehensive Guide to Decentralized Technology
                                </p>
                                <p>
                                    Our (TBA) bug HUNTERS platform gives us an extreme boost ahead of our competitors on the detection of new kinds of malicious activities Homepage -
                                </p>
                            </div>
                            <div className="block mt-10">
                                <p className='text-2xl mt-2 mb-4 font-semibold'>
                                    A Comprehensive Guide to Decentralized Technology
                                </p>
                                <p>
                                    Our (TBA) bug HUNTERS platform gives us an extreme boost ahead of our competitors on the detection of new kinds of malicious activities Homepage - we always start from homepage so can you please share content/text for it first, how much time you need? If it takes longer we can extend the order of course :)
                                    If you don't have it ready we will need sections defined so that we can use dummy text.
                                    <br /><br />
                                    Our super-experienced team is capable of doing mind-blowing development in this area.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="left lg:w-1/4 w-full">
                        <NewsSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brief