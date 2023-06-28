import React, { useEffect, useState } from 'react'
import './index.css'

import GiftIcon from '../../../../../assets/images/gift-icon.png'
import DeliveryIcon from '../../../../../assets/images/delivery-icon.png'
import FastDeliveryIcon from '../../../../../assets/images/box-icon.png'
import { getServiceByOrderId } from '../../../../../services/orderService';

function OrderServices({orderID}) {
  const [services, setServices] = useState(null);

  useEffect(() => {
    // get services when first load the page
    fetchOrderServices(orderID);
  }, []);

  const fetchOrderServices = async (orderID) => {
    try {
      // async request to get order by id from backend
      const response = await getServiceByOrderId(orderID);
      console.log(response);
      setServices(response);
    } catch (error) {
        console.error('Error fetching order detail:', error);
    }
  };

  // if no services, return nothing
  if (!services) {
    return <div></div>;
  }

  return (
    <div className='order-service-wrap'>
      <div>
        {services.isDHL ? (
          <div className='order-service-block'>
            <img src = {DeliveryIcon} className="myaccount-address-icon"/>
            <div className='order-service-row'>
              <div className='myaccount-order-text'>Standard shipping via DHL</div>
              <div className='myaccount-order-text'>4.95€</div>
            </div>
          </div>
          
        ) : services.rapidShipping ? (
          <div className='order-service-block'>
            <img src = {FastDeliveryIcon} className="myaccount-address-icon"/>
            <div className='order-service-row'>
              
              <div className='myaccount-order-text'>Rapid packaging and shipping (1-2 Working days)</div>
              <div className='myaccount-order-text'>7.95€</div>
            </div>
          </div>
        ) : (
          <div className='order-service-block'>
            <img src = {DeliveryIcon} className="myaccount-address-icon"/>
            <div className='order-service-row'>
              
              <div className='myaccount-order-text'>Standard shipping via HERMES</div>
              <div className='myaccount-order-text'>7.95€</div>
            </div>
          </div>
        )}
      </div>
      <div>
        {services.sendAsAGift && (
          <div className='order-service-block'>
            <img src = {GiftIcon} className="myaccount-address-icon"/>
            <div className='order-service-row'>
              <div className='myaccount-order-text'>I want to send as a gift</div>
              <div className='myaccount-order-text'>1.95€</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderServices