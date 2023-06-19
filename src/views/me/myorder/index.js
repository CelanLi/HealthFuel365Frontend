//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MyOrder from '../components/me_order';
import MyNav from '../components/me_nav';

function App() {
    const orderList = [
    {
        id: "123456",
        date: "2023-05-01",
        totalPrice: 25,
        status: "delivered",
    },
    {
        id: "123457",
        date: "2023-05-02",
        totalPrice: 50,
        status: "not delivered yet",
    },
    {
        id: "123457",
        date: "2023-05-02",
        totalPrice: 50,
        status: "not delivered yet",
    },
    ];
  return (
    <div className='myaccount-address-wrap'>
        <MyNav/>
        <div className='myaccount-address-page'>
            {/* the title of block */}
            <div className='myaccount-title'>
              <p className='myaccount-title-1'>My Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p className='myaccount-title-2'>{">>>"}</p>
            </div>
            {orderList.map(orderItem => {
              return(
                <MyOrder
                  id={orderItem.id}
                  date={orderItem.date}
                  totalPrice={orderItem.totalPrice}
                  status={orderItem.status}></MyOrder>
              )})}
        </div>
    </div>
  )
}

export default App