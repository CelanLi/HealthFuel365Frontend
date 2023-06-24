//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from "antd";

import { addressGet } from '../../../services/userService';
import { getCookie } from '../../../util/cookie';

//import style
import "./index.css"
import MyNav from "../components/me_nav"
import MyAddress from '../components/me_address';
import OrderAddAddress from '../../order/components/or_add_address';

function App() {
    // set address list value
    const [addressList,setAddressList] = useState([]);
    //navigation
    const navigate = useNavigate();
    // initial address list
    useEffect(() => {
      setAddress();
    },[])
    // get address list value if address list changes
    useEffect(() => {
      setAddressList(addressList);
    },[addressList])
  
    // get address list from backend
    const setAddress = async () => {
      try{
        const cookie = getCookie("login")
        if (cookie) {
          // delay get address list
          setTimeout(async () => {
            const list = await (addressGet());
            console.log(list + "address to test");
            setAddressList(list);
          }, 300);
        } 
        // else {
        //   const list = {};
        //   setTimeout(async () => {
        //     navigate('/');
        //   }, 3000);
        // }
      } catch (error) {
        console.error("address get error:", error);
      }
    }

    const handleOk = () => {
      navigate('/');
    };

    if (!document.cookie) {
      return(
        <div className='myaccount-error-message'>
          <Modal
            open={true}
            title="Please Log In"
            closable={false}
            footer={[
              <Button key="ok" type="primary" onClick={() => handleOk()} style={{ backgroundColor: '#033D1F', color: 'white' }}>
                OK
              </Button>,
            ]}
          >
            <p>When you visit my account page, you should log in first!</p>
          </Modal>
        </div>
      )
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