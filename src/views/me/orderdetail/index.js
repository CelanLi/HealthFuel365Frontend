import React, { useEffect, useState } from 'react'
import './index.css'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import { getOrderById, getPaymentByOrderId, getPromocodeByOrderId } from '../../../services/orderService';
import OrderDetailProduct from './component/order_detail_product';
import OrderAddress from './component/order_detail_address';
import OrderServices from './component/order_detail_service';
import { LoadingScreen } from '../../../components/loading/index'

(function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          docEl.style.fontSize = 100 * (clientWidth / 1512) + 'px';
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function Index() {
    const { orderId } = useParams(); // use useParams hook to get userid from url
    const [order, setOrder] = useState(null);
    const [payment, setPayment] = useState(null);
    const [discountRate, setDiscountRate] = useState(null);
  
    useEffect(() => {
      // get order detail when first load the page
      fetchOrderDetail(orderId);
      fetchPayment(orderId);
      fetchPromocode(orderId);
      // store current path
      localStorage.setItem("navigationHistory", JSON.stringify(window.location.pathname));
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

    const fetchPayment = async (orderId) => {
      try {
        // async request to get payment by id from backend
        const response = await getPaymentByOrderId(orderId);
        setPayment(response.payment.paymentID)
        console.log("response.payment.paymentID",response.payment.paymentID)
      } catch (error) {
        console.error('Error fetching payment detail:', error);
      }
    };

    const fetchPromocode = async (orderId) => {
      try {
        // async request to get payment by id from backend
        const response = await getPromocodeByOrderId(orderId);
        console.log(response.promocode)
        if (response.promocode) {
          const discount = (1-response.promocode.discountRate).toFixed(2);
          setDiscountRate(discount*100)
        }
      } catch (error) {
        console.error('Error fetching order detail:', error);
      }
    };
  
    if (!order) {
      return <div><LoadingScreen /></div>;
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
            <p className='myaccount-order-text'>{order.orderID}</p>
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
      <div className='order-detail-row'>
        <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Payment ID:&nbsp;</p>
            <p className='myaccount-order-text'>
              {payment? (
                payment
              ): (
                <>-</>
              )}</p>
        </div>
        <div className='myaccount-order-title'>
            <p className='myaccount-order-text'>Tracking Number:&nbsp;</p>
            <p className='myaccount-order-text'>{order.trackingNumber}</p>
        </div>
      </div>
      <div className='order-detail-promocode'>
        {order.codeValue ? (
          <p className='order-detail-promocode-text'>You received a {discountRate}% discount by using promocode "{order.codeValue}".</p>
        ) : (<></>
        )}
      </div>

      <div className="order-detail-address">

        <div className="order-detail-address-bottom">
          <div className="order-detail-address-left">
            <div className="order-detail-address-up">
              <p className='order-detail-name'>Delivery Information</p>
            </div>
            <OrderAddress receiver = {order.shipTo.receiver}
                          tel = {order.shipTo.tel}
                          additionalAddress = {order.shipTo.additionalAddress}
                          street = {order.shipTo.street}
                          postCode = {order.shipTo.postCode}
                          city = {order.shipTo.city}/>
          </div>
          
          <div className="order-detail-address-right">
            <div className="order-detail-address-up">
              <p className='order-detail-name'>Packaging and Shipping Services</p>
            </div>
            <OrderServices orderID={order.orderID}></OrderServices>
          </div>
        </div>

      </div>

      <div>
        {order.orderProducts.map(orderDetailProduct => ((
          <div key={orderDetailProduct.product.productID}>
            <OrderDetailProduct orderDetailProduct = {orderDetailProduct}/>
          </div>
        )
        ))}
      </div>

    </div>
  )
}

export default Index