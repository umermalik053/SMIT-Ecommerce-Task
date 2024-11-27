import React from 'react'
import { useSelector } from 'react-redux'

const BrandSection = () => {

  return (
    <div className='w-[100%] h-[122px] bg-black'>
        <div className="max-w-[1200px] mx-auto px-5 h-[122px] flex justify-between items-center flex-wrap">
            <img src="./assets/Logo/Versace.png" alt="" />
            <img src="./assets/Logo/Zara.png" alt="" />
            <img src="./assets/Logo/Gucci.png" alt="" />
            <img src="./assets/Logo/Prada.png" alt="" />
            <img src="./assets/Logo/Calvin.png" alt="" />
            

        </div>
      
    </div>
  )
}

export default BrandSection
