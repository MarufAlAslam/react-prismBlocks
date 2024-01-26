import React from 'react'
import img1 from "../../assets/img/1.png"
import img2 from "../../assets/img/2.png"
import img3 from "../../assets/img/3.png"
import Card from '../card'

const Cards = () => {
    const data = [
        {
            id: 1,
            value: "751+",
            description: "Business-grade blockchain breaches in 2023 alone",
            img: img1
        },
        {
            id: 1,
            value: "8B$+",
            description: "Financially loss in the last 3 years alone",
            img: img2
        },
        {
            id: 1,
            value: "5+",
            description: "More then 5 major exploits in a week",
            img: img3
        },
    ]
    return (
        <div>
            <div className="container">
                <div className="holder px-[30px] py-[40px] rounded-[40px] bg-grad-gray">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[25px]">
                        {
                            data.map((item) => (
                                <Card key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards