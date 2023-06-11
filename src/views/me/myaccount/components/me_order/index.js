import React from 'react'
import "./index.css"; 

function MyOrder({id,date,totalPrice,status}) {
    return(
        <div className="myaccount-order">
            <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Order ID:</p>
            <p className='myaccount-order-text'>{id}</p>
            </div>
            <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Order Date:</p>
            <p className='myaccount-order-text'>{date}</p>
            </div>
            <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Total Price:</p>
            <p className='myaccount-order-text'>{totalPrice}</p>
            </div>
            <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Order Status:</p>
            <p className='myaccount-order-text'>{status}</p>
            </div>
        </div>
    )
}

export default MyOrder