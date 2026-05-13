import React from 'react'

const Button = ({ text, onClick, hidden = false, mobile = false}) => {
    return (
        <button className={`md:flex justify-center cursor-pointer items-center bg-[#CDC72A] text-white font-semibold px-10 h-11 rounded-md transition duration-300 shadow-md hover:text-[#CDC72A] hover:bg-transparent hover:border-[1px] hover:shadow-[#CDC72A] ${hidden ? 'hidden' : 'flex'} ${mobile ? 'hidden' : 'flex'}`} onClick={onClick} >
            {text}
        </button >
    )
}

export default Button