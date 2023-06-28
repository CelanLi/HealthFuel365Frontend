//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getOrder } from '../../../services/orderService';

//import style
import "./index.css"
import MyOrder from '../components/me_order';
import MyNav from '../components/me_nav';

function App() {
  // set order list value
  const [orderList,setOrderList] = useState([]);
  //navigation
  const navigate = useNavigate();
  // initial order list
  useEffect(() => {
    setOrder();
  },[])
  // get order list value if order list changes
  useEffect(() => {
    setOrderList(orderList);
  },[orderList])

  // get order list from backend
  const setOrder = async () => {
    try{
      if (document.cookie) {
        // delay get order list
        setTimeout(async () => {
          const list = await (getOrder());
          console.log(list + "order to test");
          setOrderList(list);
        }, 300);
      } 
      // else {
      //   const list = {};
      //   setTimeout(async () => {
      //     navigate('/');
      //   }, 3000);
      // }
    } catch (error) {
      console.error("order get error:", error);
    }
  }

  const handleOk = () => {
    navigate('/');
  };
  return (
    <div className='myaccount-order-wrap'>
        <MyNav/>
        <div className='myaccount-order-page'>
            {/* the title of block */}
            <div className='myaccount-title'>
              <p className='myaccount-title-1'>My Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p className='myaccount-title-2'>{">>>"}</p>
            </div>
            {orderList.map(orderItem => {
              return(
                <MyOrder
                  id={orderItem.id}
                  date={orderItem.orderDate}
                  totalPrice={orderItem.totalPrice}
                  status={orderItem.orderStatus}
                  orderProducts={orderItem.orderProducts}></MyOrder>
              )})}
        </div>
    </div>
  )
}

export default App