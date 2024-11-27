import React from 'react'
import { useNavigate } from 'react-router-dom';
const BrowseCategory = () => {
  const navigate = useNavigate();

  const goToPage = (Cat) => {
    navigate('/category', { state: Cat })
  };

  return (
    <div className='max-w-[1200px] h-auto bg-[#dfdfdf] mx-auto rounded-[40px] mt-[-40px] mb-9 flex flex-col justify-center items-center '>
         <h1 className="text-5xl font-bold text-center py-6">Browse By Categories</h1>
        <div className=" w-[90%] h-[60%] flex justify-between flex-wrap gap-4  py-9">
            <div onClick={()=>goToPage("mobile")}  className="w-[38%] h-[250px]  bg-slate-100 rounded-lg flex overflow-hidden cursor-pointer">
                <h2 className="text-3xl m-8 text-slate-600 font-bold w-[38%]">Mobile</h2>
                <img src="./assets/image/mobile.png" alt="" className="h-[300px] w-[100%] mr-5" />
                

            </div>
            <div onClick={()=>goToPage("gaming")}  className="w-[60%] h-[250px] bg-slate-100 rounded-lg flex overflow-hidden cursor-pointer">
            <h2 className="text-3xl m-8 text-slate-600 font-bold w-[40%]">Gaming</h2>
                <img src="./assets/image/game.png" alt="" className="h-[300px] w-[100%] mr-5" />
                

            </div>
            <div onClick={()=>goToPage("tv")}  className="w-[60%] h-[250px] bg-slate-100 rounded-lg flex overflow-hidden cursor-pointer">
            <h2 className="text-3xl m-8 text-slate-600 font-bold w-[40%]">TV</h2>
                <img src="./assets/image/tv.png" alt="" className="h-[200px] w-[100%] mt-[50px]" />
                

            </div>
            
            <div onClick={()=>goToPage("all")} className="w-[38%] h-[250px] bg-slate-100 rounded-lg flex overflow-hidden cursor-pointer">
           
            <h2 className="text-xl m-8 text-slate-600 font-bold w-[40%]">More Products</h2>
                <img src="./assets/image/all.png" alt="" className="h-[300px] w-[300px] mr-7" />
                
                
            </div>
         
            
       
        
       
        
        </div>
      
    </div>
  )
}

export default BrowseCategory
