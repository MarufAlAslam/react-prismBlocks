import React from 'react'
import logo1 from "../../assets/img/l1.png"
import logo2 from "../../assets/img/l2.png"
import logo3 from "../../assets/img/l3.png"
import logo4 from "../../assets/img/l4.png"
import logo5 from "../../assets/img/l5.png"
import logo6 from "../../assets/img/l6.png"
import logo7 from "../../assets/img/l7.png"


const TrustedBy = () => {
    const data = [
        {
            id: 1,
            img: logo1
        },
        {
            id: 2,
            img: logo2
        },
        {
            id: 3,
            img: logo3
        },
        {
            id: 4,
            img: logo4
        },
        {
            id: 5,
            img: logo5
        },
        {
            id: 6,
            img: logo6
        },
        {
            id: 7,
            img: logo7
        },
    ]
    return (
        <div className='relative py-[75px]'>
            <div className="container">
                <div className="text-center">
                    <p className='text-white text-xl font-semibold mb-[75px]'>
                        Trusted By
                    </p>
                </div>
            </div>
            <div className="track relative">
                <div className="continuous-slider relative flex justify-between items-center">
                    {
                        data.map((item) => (
                            <div key={item.id} className="item">
                                <img src={item.img} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="continuous-slider-after absolute flex justify-between items-center">
                    {
                        data.map((item) => (
                            <div key={item.id} className="item">
                                <img src={item.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TrustedBy