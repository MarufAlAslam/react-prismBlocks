import React from 'react'
import s1 from "../../assets/img/s1.png"
import s2 from "../../assets/img/s2.png"
import s3 from "../../assets/img/s3.png"
import SecuredBtn from '../secured-btn'

const OurSolution = () => {
    const data = [
        {
            id: 1,
            img: s1,
            title: "We monitor",
        },
        {
            id: 2,
            img: s2,
            title: "We detect",
        },
        {
            id: 3,
            img: s3,
            title: "We modify",
        },
    ]
    return (
        <div className='solution relative py-[60px]'>
            <div className="container">
                <div className="after"></div>
                <div className="card relative py-[30px] md:py-[95px] px-[35px] md:px-[100px] rounded-0 md:rounded-[90px]">

                    <div className="text-center">
                        <h2 className='font-semibold text-[32px] md:text-[42px] mb-[20px]'>
                            Our Solution
                        </h2>
                        <p className='text-white text-sm md:text-[16px]'>
                            AI-based engine to detect and modify vulnerabilities, exploits, and fraud <br className='md:block hidden' />for the security of the blockchain users.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] my-[45px]">
                        {
                            data.map((item) => (
                                <div key={item.id} className="bg-[#0e0e0fd7] justify-center solution-flex items-center gap-3 flex md:flex-col flex-row rounded-[10px] py-[20px] md:py-[50px] px-[20px] md:px-[100px] h-full">
                                    <div className="img md:mb-[30px]">
                                        <img src={item.img} className='block solution-img mx-auto h-[100px] w-[100px] object-contain' alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className='font-semibold text-xl'>
                                            {item.title}
                                        </h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-center md:block hidden">
                        <SecuredBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSolution