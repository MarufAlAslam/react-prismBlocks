import React from 'react'
import featured from "../../assets/img/featured.png"
import { Link } from 'react-router-dom'

const NewsFeatured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="featuerd-card relative">
                    <img src={featured} className='w-full' alt="" />
                    <div className="featured-content w-calc(100%-40px) px-[20px] md:px-[40px] py-[30px] rounded-[20px] bg-[#181818] md:absolute bottom-[20px] left-[20px] right-[20px]">
                        <p className="text-white text-sm">
                            19 Jan 2024
                        </p>
                        <p className="font-semibold text-xl md:text-[32px] text-white mt-3">Migrating to Linear 101</p>
                        <p className='text-white text-sm md:text-lg mb-[30px]'>Linear helps streamline software projects, sprints, tasks, and bug tracking. </p>
                        <Link to="/news/1" className="text-black bg-white inline-block py-[10px] px-[15px] rounded-[20px]">Keep Reading</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeatured