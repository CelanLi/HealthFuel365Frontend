import React from 'react'
import "./index.css";
import { message } from 'antd';

import OrderProduct from '../me_order_product';
import Link from 'antd/es/typography/Link';

function MyOrder({id,date,totalPrice,status,orderProducts}) {
    const handleDetail = (orderID) => {
        window.location.href = `myorder/orderdetail/orderId=${orderID}`;
    }

    return(
        <div className="myaccount-order">
            <div className='myaccount-order-row'>
                <div className='myaccount-order-title'>
                    <p className='myaccount-order-text'>Order ID:&nbsp;</p>
                    <p className='myaccount-order-text'>{id}</p>
                </div>
                <div className='myaccount-order-title'>
                    <p className='myaccount-order-text'>Order Date:&nbsp;</p>
                    <p className='myaccount-order-text'>{date}</p>
                </div>
            </div>
            <div className='myaccount-order-center'>
                <div className='myaccount-order-products'>
                    <OrderProduct orderProducts={orderProducts}/>
                </div>
                <div>
                    <Link to={'myorder/orderdetail/${id}'}></Link>
                    <button className='myaccount-edit' onClick={() => handleDetail(id)} value={id}>Detail</button>
                </div>
            </div>
            <div className='myaccount-order-row'>
                <div className='myaccount-order-title'>
                    <p className='myaccount-order-text'>Total Price:&nbsp;</p>
                    <p className='myaccount-order-text'>{totalPrice}€</p>
                </div>
                <div className='myaccount-order-title'>
                    <p className='myaccount-order-text'>Order Status:&nbsp;</p>
                    <p className='myaccount-order-text'>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default MyOrder