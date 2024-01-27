import React from 'react'
import phaseImg from "../../assets/img/phase-img.png"
import { FaCheck } from 'react-icons/fa'
const Phases = () => {
    return (
        <div className='phases'>
            <div className="phase-changer border-b border-[#616161] py-[45px]">
                <div className="container">
                    <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-3">
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 1</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 2</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 3</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 4</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 5</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 6</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 7</span>
                        </button>
                        <button className='btn flex justify-center items-center gap-3'>
                            <div className="indicator rounded-full p-2 w-[35px] h-[35px] border border-[#616161]">
                                <div className="indicator-inner rounded-full w-full h-full bg-[#616161]"></div>
                            </div>
                            <span className='text-white'>Phase 8</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="phase-content py-[45px]">
                <div className="container">
                    <div className="flex justify-between items-center gap-[100px]">
                        <img src={phaseImg} alt="" />
                        <div className="contents-item">
                            <h2 className='text-[28px] mb-8 text-white block font-semibold'>Deployment of the contracts</h2>

                            <p className='flex items-center gap-3 mb-3'>
                                <FaCheck />
                                Token contract
                            </p>
                            <p className='flex items-center gap-3 mb-3'>
                                <FaCheck />
                                ntraditional ICO contract
                            </p>
                            <p className='flex items-center gap-3 mb-3'>
                                <FaCheck />
                                Staking pool contract
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phases