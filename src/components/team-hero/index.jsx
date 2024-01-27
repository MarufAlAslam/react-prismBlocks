import React from 'react'
import arrow from "../../assets/img/arrow.png"
import t1 from "../../assets/img/t1.png"
import t2 from "../../assets/img/t2.png"
import t3 from "../../assets/img/t3.png"
import t4 from "../../assets/img/t4.png"
import t5 from "../../assets/img/t5.png"
import frame from "../../assets/img/frame.png"
import dp from "../../assets/img/dp.png"
import pp from "../../assets/img/pp.png"

const TeamHero = () => {
    return (
        <div className='team-hero py-[75px]'>
            <div className="container">
                <div className="text-center">
                    <h2 className='text-white text-[60px] font-semibold'>Our Team</h2>
                    <p className='mb-[50px]'>
                        Each and every person in this amazing team is dedicated to a safer blockchain future. <br />
                        Our dream? Non-vulnerable space
                    </p>

                    <img src={arrow} className='block mx-auto mb-[50px]' alt="" />

                    <div className="flex justify-center items-center gap-10">
                        <div className="item">
                            <img src={t1} alt="" />
                        </div>
                        <div className="item">
                            <img src={t2} alt="" />
                        </div>
                        <div className="item">
                            <img src={t3} alt="" />
                        </div>
                        <div className="item">
                            <img src={t4} alt="" />
                        </div>
                        <div className="item">
                            <img src={t5} alt="" />
                        </div>
                    </div>

                    <div className="dp relative">
                        <img src={frame} className='block mx-auto' alt="" />
                        <img src={dp} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt="" />
                    </div>

                    <div className="details relative top-[-50px]">
                        <h3 className='text-xl font-semibold'>Ian McCann</h3>
                        <p className='text-white'>
                            Data Scientist Specializing in AI, ML, <br /> and Blockchain
                        </p>
                        <img src={pp} className='block mx-auto' alt="" />

                        <p className='my-10 text-white text-[16px] md:text-xl'>
                            Ian McCann, a seasoned Data Scientist, has a rich background in Mathematics, Physics, and Programming. His academic path includes a Masters in Computational Science and a Bachelors in Physics and Applied Mathematics, leading to an intensive Data Science Immersive program at Galvanize.
                        </p>
                        <p className='mb-10 tetx-white text-[16px] md:text-xl'>
                            In his professional career, Ian made significant strides at Conversica over five years, focusing on ML and AI. He was instrumental in developing deep learning frameworks and automating data processes, integrating LLMs and the GPT-3 API for advanced applications.
                        </p>
                        <p className='mb-10 tetx-white text-[16px] md:text-xl'>
                            Ian's entrepreneurial spirit shone in the web3 space, where he not only created PostThread, a decentralized social media platform, but also founded Unstable Labs, developing a text-to-image NFT generator with Stable Diffusion. His innovative efforts were further recognized when he won first place in a Polkadot hackathon, highlighting his prowess in Blockchain technology.
                        </p>
                        <p className='mb-10 tetx-white text-[16px] md:text-xl'>
                            Ian's passion for AI, ML, and Blockchain drives his continuous contributions to the technological revolution, making him a notable figure in these fields.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamHero