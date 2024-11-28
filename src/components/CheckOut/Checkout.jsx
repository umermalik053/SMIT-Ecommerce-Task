import React from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const CartData = useSelector((state)=>state?.Cart)
   
    let priceCalculate = CartData.reduce((acc,curr)=>{
      return  acc + curr.price * curr.quantity 
    },0)
    const shipping = CartData.length ? 20 : 0
    // const shipping = 0
  return (
      <div className='max-w-[1200px] mx-auto '>
      <div className="container">
  <div className="child1-container">
    <div className="child1-portion1">
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>Billing Info</h2>
      <div className="portion1-section1">
        <span>Please Enter your Billing Info</span>
        <span>Step 1 Of 3</span>
      </div>
      <div className="portion1-section2">
        <div className="subcontent">
          <h3 className="sub-heading">Name</h3>
          <input
            type="text"
            className="inputfield"
            placeholder="   Type Your Name"
          />
        </div>
        <div className="subcontent">
          <h3 className="sub-heading">Phone Number</h3>
          <input
            type="text"
            className="inputfield"
            placeholder="   Type Your Phone Number"
          />
        </div>
        <div className="subcontent">
          <h3 className="sub-heading">Address</h3>
          <input
            type="text"
            className="inputfield"
            placeholder="   Type Your Address"
          />
        </div>
        <div className="subcontent">
          <h3 className="sub-heading">Town/City</h3>
          <input
            type="text"
            className="inputfield"
            placeholder="   Town/City"
          />
        </div>
      </div>
    </div>
    
    <div className="child1-portion3">
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>Payment Method</h2>
      <div className="portion1-section1">
        <span>Please Enter your Payment Method</span>
        <span>Step 2 Of 3</span>
      </div>
      <div className="card-section">
        <div className="credit-option">
          <span className="credit-button">
            <input type="radio" />
            <span className="credithead"> Credit Card</span>
          </span>
          <span className="flex w-[100px]">
            <img src="./assets/image/visa.png" width={60} />
            <img src="./assets/image/mastercard.png " width={60} />
          </span>
        </div>
        <div className="portion3-section1">
          <div className="subcontent">
            <h3 className="sub-heading">Card Number</h3>
            <input
              type="number"
              className="inputfield1"
              placeholder="   Card Number"
            />
          </div>
          <div className="subcontent">
            <h3 className="sub-heading">Expiration Date</h3>
            <input
              type="text"
              className="inputfield1"
              placeholder="   DD/MM/YYYY"
            />
          </div>
          <div className="subcontent">
            <h3 className="sub-heading">Card Holder</h3>
            <input
              type="text"
              className="inputfield1"
              placeholder="   Card Holder"
            />
          </div>
          <div className="subcontent">
            <h3 className="sub-heading">CVC</h3>
            <input type="text" className="inputfield1" placeholder="   CVC" />
          </div>
        </div>
      </div>
      <div className="paypal">
        <div className="paypal-section1">
          <input type="radio" />
          <span className="paypal-text">PayPal</span>
        </div>
        <div className="paypal-section2">
          <img src="../pictures/Paypal.png" alt="" width="80px" />
        </div>
      </div>
      <div className="paypal">
        <div className="paypal-section1">
          <input type="radio" />
          <span className="paypal-text">Bitcoin</span>
        </div>
        <div className="paypal-section2" style={{ marginTop: "-6px" }}>
          <img src="../pictures/bitcoin.png" alt="" width="70px" />
        </div>
      </div>
    </div>
    <div className="child1-portion3">
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>Confirmation</h2>
      <div className="portion1-section1">
        <span>
          We are getting to the end.Just few click and your rental is ready.
        </span>
        <span>Step 3 Of 3</span>
      </div>
      <div className="Confirmation-section">
        <div className="paypal-section1">
          <input type="checkbox" />
          <span className="confirmation-text">
            I agree with sending an marketing and newsletter email.No
            Spam,Promissed.
          </span>
        </div>
      </div>
      <div className="Confirmation-section">
        <div className="paypal-section1">
          <input type="checkbox" />
          <span className="confirmation-text">
            I agree with our terms and condition and privacy policy.
          </span>
        </div>
      </div>
      <button className="Confirmation-button">Shop Now</button>
      <br />
      <img className="Confirmation-data" src="./assets/image/data.png" alt="" />
      <h4>All your Data are Safe</h4>
      <span className="data-quote">
        We are using the most advanced security to provide you the best
        experience ever.
      </span>
    </div>
  </div>
  <div className="child2-container">
    <h2 className='text-3xl font-bold'>CheckOut</h2>
    <p className="summary-para">
      Price may change depending on your Product Quantity
    </p>
    <div className="subtotal">
      <span className="subtotal-name">Sub-Total</span>
      <span className="subtotal-value">${priceCalculate+shipping}</span>
    </div>
    <div className="subtotal">
      <span className="subtotal-name">Tax</span>
      <span className="subtotal-value">$0.00</span>
    </div>
    <div className="promo-code">
      <input
        className="promocode-input"
        type="text"
        placeholder="Apply Promo Code"
      />
      <button className="promocode-btn">Apply Now </button>
    </div>
    <div className="last-item">
      <div className="lastitem-part1">
        <h2 className="lastitem-heading font-bold">Total Price</h2>
        <p className="lastitem-content">
          Overall Price and Include Discount
        </p>
      </div>
      <div className="lastitem-part1">
        <h2 className="lastitem-Price font-bold">${priceCalculate+shipping}</h2>
      </div>
    </div>
  </div>
</div>
      </div>
  )
}

export default Checkout;
