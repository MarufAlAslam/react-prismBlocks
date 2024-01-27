import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NewsSidebar = () => {
    const data = [
        {
            date: '19 Jan 2024',
            title: 'A Comprehensive Guide to Decentralized Technology',
        },
        {
            date: '19 Jan 2024',
            title: 'Exploring the Diverse Applications of Blockchain',
        },
        {
            date: '19 Jan 2024',
            title: 'How Blockchain is Revolutionizing the ',
        },
        {
            date: '19 Jan 2024',
            title: 'A Comprehensive Guide to Decentralized Technology',
        },
        {
            date: '19 Jan 2024',
            title: 'A Comprehensive Guide to Decentralized Technology¸',
        },
    ]
    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index} className='py-[20px] px-[25px] bg-[#181818] rounded-[20px] mb-5'>
                        <p className='text-xs flex justify-between items-center gap-2'>
                            <span>{item.date}</span>
                            <Link to="/news/1" className='text-white'>
                                <MdOutlineArrowOutward className='text-white text-[16px]' />
                            </Link>
                        </p>
                        <h2 className='text-white text-lg mt-3 font-semibold'>
                            {item.title}
                        </h2>
                    </div>
                ))
            }
        </div>
    )
}

export default NewsSidebar