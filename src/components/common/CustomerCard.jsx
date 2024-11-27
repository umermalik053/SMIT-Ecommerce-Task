import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

const CustomerCard = ({data}) => {
  return (
    <div className='w-[380px]  h-[210px] bg-slate-100 rounded-lg'>
      <div className="pl-4 pt-7 rating ">
            <input
              disabled
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              disabled
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
              defaultChecked
            />
            <input
              disabled
              defaultChecked
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              disabled
              defaultChecked
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              disabled
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
          </div>
          <h2 className='pl-4 pt-2 text-2xl flex gap-2 '>{data.name} <span className='text-green-700'> <IoCheckmarkDoneCircle /></span></h2>
          <p className='text-sm pl-4 pt-1 text-gray-400'>"{data.desc}"</p>
         
    </div>
  )
}

export default CustomerCard
