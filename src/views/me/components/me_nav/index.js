//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//import style
import "./index.css"
import MyInfo from '../me_info'

//import functions
import { logoutUser } from '../../../../services/userService';
import { getUser } from '../../../../services/userService';
import { getCookie } from '../../../../util/cookie';


function MyNav() {
    //get user information
    const [userAccount,setUserAccount] = useState(null)
    //initial user account
    useEffect(() => {
      setAccount();
    },[])
    //get account if account changes
    useEffect(() => {
      setUserAccount(userAccount);
    },[userAccount])
  
    //get account from backend
    const setAccount = async () => {
      try{
        const cookie = getCookie("userLogin")
        if (cookie) {
          console.log("getaccount")
          const userAccount = await (getUser());
          console.log(userAccount + "userAccount to test1");
          setUserAccount(userAccount);
        }
        else{
          const userAccount = {
            username: "guest",
            email:"guest@gmail.com"
          }
          setUserAccount(userAccount);
        }
        
      } catch (error) {
        console.error("userAccount get error:", error);
      }
    }


    //navigation
    const navigate = useNavigate();

    //log out handle
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/homepage');
        logoutUser();
    };

  return (
    <div className='myaccount-nav-wrap'>
        {userAccount && (
            <MyInfo userAccount={userAccount}/>
        )}

        <div style={{ height: '100px' }}></div>

        <div className='myaccount-nav-tab'>
            <Link to="/myaccount/addressmanagement" className='myaccount-nav-title'>My Address</Link>
        </div>

        <div className="myaccount-nav-tab">
            <Link to="/myaccount/myprofile" className="myaccount-nav-title">My Profile</Link>
        </div>

        <div className="myaccount-nav-tab">
            <Link to="/myaccount/myorder" className="myaccount-nav-title">My Orders</Link>
        </div>

        <div className="myaccount-nav-tab" onClick={handleLogout}>
            <p className="myaccount-nav-title">Log Out</p>
        </div>
    </div>
  )
}

export default MyNav