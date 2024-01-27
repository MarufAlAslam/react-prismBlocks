import React from 'react'

const Card = ({ item }
) => {
    return (
        <div className='bg-[#0e0e0f] px-[25px] py-[40px] rounded-[20px]'>
            <div className="flex justify-between items-center gap-5">
                <div className="left">
                    <h2 className='font-semibold text-white text-[25px] md:text-[50px]'>
                        {item.value}
                    </h2>
                    <p className='md:text-[16px] text-xs'>
                        {item.description}
                    </p>
                </div>
                <div className="img">
                    <img src={item.img} className='min-w-[100px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card