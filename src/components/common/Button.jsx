import React from 'react'

const Button = ({text}) => {
  return (
    <div>
     <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-black rounded-[64px] mt-6">{text}</button>
    </div>
  )
}

export default Button
