import React from 'react'

const Values = () => {
    const data = [
        {
            id: 1,
            value: "2100+",
            description: "Critical exploits detected"
        },
        {
            id: 1,
            value: "126M+",
            description: "We secured on protocols"
        },
        {
            id: 1,
            value: "3B+",
            description: "Total value monitored"
        }
    ]
    return (
        <div className='values py-[60px] bg-[#181818]'>
            <div className="container">
                <div className="flex justify-center items-center text-center lg:flex-row flex-col gap-[50px] md:gap-[100px]">
                    {
                        data.map((item, index) => (
                            <div key={item.id} className={`flex ${index !== 0 && "border-l border-[#282829]"} md:pl-[100px] justify-center text-center items-center`}>
                                <div className="left">
                                    <h2 className='font-semibold text-white text-[50px]'>
                                        {item.value}
                                    </h2>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Values