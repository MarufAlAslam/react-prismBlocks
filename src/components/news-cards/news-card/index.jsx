import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ item }) => {
    return (
        <div className="news-card bg-[#181818] rounded-[20px] px-[30px] py-[30px]">
            <img src={item.img} className='w-full mb-[20px]' alt="" />
            <p className="text-white text-sm">
                {item.date}
            </p>
            <p className="font-semibold text-2xl md:text-[32px] text-white mt-3">{item.title}</p>
            <p className='text-white text-sm md:text-lg mb-[30px]'>{item.description}</p>
            <Link to="/news/1" className="text-black bg-white inline-block py-[10px] px-[15px] rounded-[20px]">Keep Reading</Link>
        </div>
    )
}

export default NewsCard