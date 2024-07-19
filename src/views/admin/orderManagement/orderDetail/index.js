import React, { useEffect, useState } from "react";
import "../../../me/orderdetail/index.css";
import { Modal } from "antd";
import { useLocation, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import OrderAddress from "../../../me/orderdetail/component/order_detail_address";
import OrderDetailProduct from "../../../me/orderdetail/component/order_detail_product";
import { getOrderById } from "../../../../services/adminService";
import { getCookie } from "../../../../util/cookie";


function OrderDetail() { 
  // use useParams hook to get userid from url
  const { orderID } = useParams(); 
  const [order, setOrder] = useState();
  const [isLoading,setIsLoading] = useState(true);
  // get shipping and packing services 
  const location = useLocation();
  const servicesParam = new URLSearchParams(location.search).get("services");
  const services = JSON.parse(decodeURIComponent(servicesParam)).replace("\n","\n\n");
  // check if the admin is logged in before fetching the order detail
  const showLoginReminder = () => {
    Modal.error({
      title: "please log in",
      content: "To access admin panel, log in is reuired",
      onOk: () => {
        window.location.href = `${window.location.origin}/admin`;
      },
    });
  };
  useEffect(() => {
    const cookie = getCookie("adminLogin");
    if (!cookie) {
      showLoginReminder();
    } 
    else{
    fetchOrderDetail(orderID);
    }
  }, [orderID]);

  const fetchOrderDetail = async (orderID) => {
    setIsLoading(true);
    try {
      const order = await getOrderById(orderID);
      setOrder(order);
    } catch (error) {
      console.error('Error fetching order detail:', error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
    ) : (
      <div className='order-detail-wrap'>
        <div className='order-detail-back'>
          <Link to="/admin/orderManagement" className='order-detail-back'>
            <p className='order-detail-back-text1'>{"<<<"}</p>
            <p className='order-detail-back-text2'>&nbsp;&nbsp;&nbsp;Back</p>
          </Link>
        </div>
        {/* bacis information */}
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
              <p className='myaccount-order-text'>Orderer ID:&nbsp;</p>
              <p className='myaccount-order-text'>{order.userID}</p>
          </div>
          <div className='myaccount-order-title'>
              <p className='myaccount-order-text'>Total Price:&nbsp;</p>
              <p className='myaccount-order-text'>{order.totalPrice}€</p>
          </div>
        </div>
        <div className='order-detail-row'>
          <div className='myaccount-order-title'>
              <p className='myaccount-order-text'>Order Status:&nbsp;</p>
              <p className='myaccount-order-text'>{order.orderStatus}</p>
          </div>
          <div className='myaccount-order-title'>
              <p className='myaccount-order-text'>TrackingNumber:&nbsp;</p>
              <p className='myaccount-order-text'>{order.trackingNumber}</p>
          </div>
        </div>
        {/* address and services */}
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
                <p className='myaccount-order-text'>{services}</p>
            </div>
          </div>
        </div>
        {/* products */}
        <div>
          {order.orderProducts.map(orderDetailProduct => ((
            <div key={orderDetailProduct.product.productID}>
              <OrderDetailProduct orderDetailProduct = {orderDetailProduct} 
                                  enable = {false}/>
            </div>
          )
          ))}
        </div>
      </div>
    )}
    </div>
  )
}

export default OrderDetail;