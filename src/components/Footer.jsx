import React from 'react'

const Footer = () => {
  return (
    <div className=" " >
<div className="max-w-[1200px] mx-auto">
<footer className="footer bg-base-100 text-base-content p-10">
  <aside>
   <h1 className='text-5xl font-extrabold mb-7'>SHOP.CO</h1>
    <p className='max-w-[300px] '>
      SHOP.CO pvt Ltd
      <br />
      We have clothes that suits your style and which you’re proud to wear. From women to men.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
    </div>
    
    
  )
}

export default Footer
