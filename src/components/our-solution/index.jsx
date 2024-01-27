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
                <div className="card relative py-[95px] px-[100px] rounded-[90px]">

                    <div className="text-center">
                        <h2 className='font-semibold text-[42px] mb-[20px]'>
                            Our Solution
                        </h2>
                        <p className='text-white'>
                            AI-based engine to detect and modify vulnerabilities, exploits, and fraud <br />for the security of the blockchain users.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-[30px] my-[45px]">
                        {
                            data.map((item) => (
                                <div key={item.id} className="bg-[#0e0e0fd7] rounded-[10px] py-[50px] px-[100px] h-full">
                                    <div className="img mb-[30px]">
                                        <img src={item.img} className='block mx-auto h-[100px] w-[100px] object-contain' alt="" />
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

                    <div className="text-center">
                        <SecuredBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSolution