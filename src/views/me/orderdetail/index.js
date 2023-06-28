import React, { useEffect, useState } from 'react'
import './index.css'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import { getOrderById } from '../../../services/orderService';
import OrderDetailProduct from './component';
import Receiver from '../../../assets/images/myaccount/icon-receiver.png'
import PhoneIcon from '../../../assets/images/myaccount/icon-phone.png'
import AddIcon from '../../../assets/images/myaccount/icon-address.png'

function Index() {
    const { orderId } = useParams(); // 使用 useParams 钩子来获取 URL 中的 orderId 参数
    const [order, setOrder] = useState(null);
  
    useEffect(() => {
      // get order detail when first load the page
      fetchOrderDetail(orderId);
    }, [orderId]);

    const fetchOrderDetail = async (orderId) => {
      try {
        // async request to get order by id from backend
        const response = await getOrderById(orderId);
        console.log(response)
        setOrder(response);
      } catch (error) {
        console.error('Error fetching order detail:', error);
      }
    };
  
    if (!order) {
      return <div>Loading...</div>;
    }
  
  return (
    <div className='order-detail-wrap'>
      <div className='order-detail-back'>
        <Link to={`/myaccount/myorder`} className='order-detail-back'>
          <p className='order-detail-back-text1'>{"<<<"}</p>
          <p className='order-detail-back-text2'>&nbsp;&nbsp;&nbsp;Back</p>
        </Link>
      </div>
      <div className='order-detail-row'>
        <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Order ID:&nbsp;</p>
            <p className='myaccount-order-text'>{order.id}</p>
        </div>
        <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Order Date:&nbsp;</p>
            <p className='myaccount-order-text'>{order.orderDate}</p>
        </div>
      </div>
      <div className='order-detail-row'>
        <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Order Status:&nbsp;</p>
            <p className='myaccount-order-text'>{order.orderStatus}</p>
        </div>
        <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Total Price:&nbsp;</p>
            <p className='myaccount-order-text'>{order.totalPrice}€</p>
        </div>
      </div>

      <div className="order-detail-address">
        <div className="order-detail-address-up">
          <p className='order-detail-name'>Delivery Information</p>
        </div>
        <div>
          <div>
            <div className="order-detail-address-up">
              <div className="order-detail-address-up-block">
                  <img src={Receiver} className="myaccount-address-icon"/>
                <div className="detail-product-text">Receiver: {order.shipTo.receiver}</div>
              </div>
              <div className="order-detail-address-up-block">
                <img src={PhoneIcon} className="myaccount-address-icon"/>
                <div className="detail-product-text">Tel: {order.shipTo.tel}</div>
              </div>
            </div>
            <div className="order-detail-address-up">
                <img src={AddIcon} className="myaccount-address-icon" />
                <div className="myaccount-content-bottom-text">
                    <div className="detail-product-text">Address: {order.shipTo.additionalAddress}, {order.shipTo.street}, {order.shipTo.postCode}, {order.shipTo.city}</div>
                </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>

      </div>

      <div>
        {order.orderProducts.map(orderDetailProduct => ((
          <>
            <OrderDetailProduct orderDetailProduct = {orderDetailProduct}/>
          </>
        )
        ))}
      </div>

    </div>
  )
}

export default Index