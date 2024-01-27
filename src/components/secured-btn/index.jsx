import React from 'react'
import { Link } from 'react-router-dom'

const SecuredBtn = () => {
    return (
        <Link to="/contact" className="text-black inline-block py-[20px] px-[35px] rounded-[10px] bg-[#fff] hover:bg-[#252525]">Click here to Get secured!</Link>
    )
}

export default SecuredBtn