import React from 'react'

const Faqs =({data}) => {
    console.log(data)
    
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Q: {data.question}</div>
  <div className="collapse-content">
    <p className='text-md'>A.  {data.answer}</p>
  </div>
</div>

    </div>
  )
}

export default Faqs
