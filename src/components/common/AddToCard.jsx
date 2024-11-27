import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { ProductAction } from '../../Store/Action/ActionType';

const AddToCard = ({product}) => {
    const dispatch = useDispatch()
    const removeProduct = (id) => {
        dispatch({type: ProductAction.Remove_Card_Products, payload: {id:id}})
    }
   
  return (
    <>
      <div className="w-full h-[150px] flex flex-col mt-[30px]  ">
      
        <div className="flex itemss-center h-full pb-8 gap-4 relative  ">
            <div className="">
                
            <img className='h-[150px] w-[150px] rounded-lg' src={product.image} alt="" />
                
            </div>
            <div className=" flex flex-col gap-3">
                <h1 className='text-2xl font-bold'>{product?.title.slice(0,25)}...</h1>
                <p className='text-sm'>Brand: {product.brand}</p>
                <p className='text-sm'>Color: {product.color}</p>
                <p className='text-2xl font-bold'>${product.price}{product.discount ?<span className='text-[#00000066] line-through ml-2' > ${ product.price+product.discount } </span>: null}</p>
            </div>
            <RiDeleteBin5Fill onClick={()=>removeProduct(product.id)}  className='text-3xl text-[red] absolute top-0 right-7 cursor-pointer'/>

            



            
        </div>

        <hr className='border-b-2 border-gray-200 my-3' />


      </div>
     
    </>
  )
}

export default AddToCard
