import React from 'react'

const FooterSubcontent = () => {
  return (
    <div className='flex justify-around items-center '>
      <div className="w-[50%] flex pt-9  ">
        <h1 className='text-white font-extrabold text-[40px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      </div>
      <div className="">
        <div className=" flex flex-col justify-center items-center pt-8">

        <input type="text" className="w-64 h-12 rounded-full pl-4 outline-none" placeholder='Enter your Email Address' />
        <br />
        <button className='btn text-black bg-white w-64 h-12 rounded-full '>Subscribe To Newsletter</button>
        
        </div>
       
      </div>
    </div>
  )
}

export default FooterSubcontent
