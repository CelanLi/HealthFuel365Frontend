//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';

import { addressGet } from '../../../services/userService';

//import style
import "./index.css"
import MyNav from "../components/me_nav"
import MyAddress from '../components/me_address';
import OrderAddAddress from '../../order/components/or_add_address';

function App() {
    //set address list value
    const [addressList,setAddressList] = useState([]);
    //initial address list
    useEffect(() => {
      setAddress();
    },[])
    //get address list value if address list changes
    useEffect(() => {
      setAddressList(addressList);
    },[addressList])
  
    //get address list from backend
    const setAddress = async () => {
      try{
        const list = await (addressGet());
        console.log(JSON.stringify(list) + "address to test");
        setAddressList(list);
      } catch (error) {
        console.error("address get error:", error);
      }
    }
  return (
    <div className='myaccount-address-wrap'>
      <MyNav/>
      <div className='myaccount-address-page'>
        <div className='myaccount-address'>
              {/* the title of block */}
              <div className='myaccount-title'>
                <p className='myaccount-title-1'>Address Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className='myaccount-title-2'>{">>>"}</p>
              </div>

              <div className='myaccount-current-address'>
                <MyAddress addressList={addressList} />
              </div>
              
              <div className='myaccount-add-address'>
                <OrderAddAddress></OrderAddAddress>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App