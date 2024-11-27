import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useDispatch} from 'react-redux';
import { ProductAction } from '../../Store/Action/ActionType';
import { useNavigate } from 'react-router';

const ProductCard = ({product}) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate()

  const Dispatch = useDispatch()
  // const Selector = useSelector((state)=>state?.Cart)
  
  const addToCart = (Data) => {
    Dispatch({type: ProductAction.Add_Cart, payload: Data})
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
   
  }



  const handleProductClick = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <div  className=" w-[285px] shadow-md hover:shadow-lg  relative ">
        <div className="w-[285px] h-[298px] ">
          <img className='w-[240px] h-[250px] mx-auto' src={product.image} alt="product image"  />
          <FaCartPlus onClick={()=>addToCart(product)} className='text-4xl absolute top-6 right-6  cursor-pointer' />
          {showToast && (
        <div className="alert alert-success bg-[#e4e4e4] fixed top-8 right-0 shadow-lg w-fit font-bold ">
          <span>🎉 Success! Product has been added to your cart.</span>
        </div>
      )}
            {product.popular ? 
            <h3 className='text-sm text-red-700 bg-red-400 max-w-fit px-3 py-1 rounded-full absolute top-6 left-2'>Popular</h3>:null}
        </div>
        <div className="px-5 py-5 flex flex-col gap-4">
          <h3 className="text-lg font-bold">{product.title.slice(0,20)}...</h3>
          <p className="text-sm">{product.description.slice(0,60)}</p>
          <p className="text-2xl font-bold text-gray-600">Price: ${product.price}{product.discount ?<span className='text-[#00000066] line-through ml-2' > ${ product.price+product.discount } </span>: null}</p>
           <button onClick={()=>handleProductClick(product.id)} className="">View Detail</button> 
         
        

        </div>
      </div>
    </div>
  )
}

export default ProductCard
