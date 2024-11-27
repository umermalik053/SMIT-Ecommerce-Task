import React from 'react'
import CustomerCard from './common/CustomerCard'


const Customer = () => {
   const content =  [
        {
          name: "Umar Malik",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 16 , 2024",
        },
        {
          name: "Bilal Memon",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2024",
        },
        {
          name: "Wasi Khatri",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 1 November , 2024",
        },
        {
          name: "Mubashir Ali",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 4 November , 2024",
        },
        {
          name: "Faizan Ali",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2024",
        },
        {
          name: "Sir Sadiq Shah",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 25 , 2024",
        },
      ]
   
  return (
    <div className='max-w-[1200px] mx-auto'>
      <h1 className='font-bold text-[48px] text-center'>Our Happy Customer</h1>
      <div className=" mt-6 max-w-[1200px] flex flex-wrap gap-4">
        {
             content.map((item,index)=>{
                return (<CustomerCard key={index} data={item}/>)
             })
        }
      
      </div>
       
      
    </div>
  )
}

export default Customer
