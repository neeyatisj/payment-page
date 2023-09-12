import React, {useState} from 'react';
import '../registratn_comp/style.css';
import PaymentHeader from './paymentform_header';
function PaymentForm() {
    return(
        <> 
        <div className='div1'>
        <paymentform_header />
      <div className="form">
          <div className="form-body">
              <div className="cardno">
                  <label className="form__label" for="cardno">Credit/Debit Card Number </label>
                  <input  type="cardno" id="cardno" className="form__input" placeholder="cardno"/>
              </div>
              <div className="Card Holder's Name">
                  <label className="form__label" for="card_holder_name">Card Holder's Name </label>
                  <input className="form__input" type="card_holder_name"  id="card_holder_name" placeholder="card_holder_name"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className='btn btn-primary'>Checkout</button>
              <br></br>
              <br></br>
              <button type="submit" className='btn btn-primary'>Cancel</button>
              &nbsp;
              &nbsp;
              </div>
      </div>  
      </div>
      </>    
    )       
}
export default PaymentForm;