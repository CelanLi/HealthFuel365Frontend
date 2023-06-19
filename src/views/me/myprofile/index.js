//dependencies
import React, { useEffect } from 'react'
import { useState } from 'react';

import { profileGet } from '../../../services/userService';

//import style
import "./index.css"
import MyNav from "../components/me_nav"
import MyProfile from "../components/me_profile"

function App() {

    const [userProfile,setUserProfile] = useState(null)
    //initial user profile
    useEffect(() => {
      setProfile();
    },[])
    //get profile if profile changes
    useEffect(() => {
      setUserProfile(userProfile);
    },[userProfile])
  
    //get profile from backend
    const setProfile = async () => {
      try{
        console.log("ddd")
        const profile = await (profileGet());
        console.log(JSON.stringify(profile) + "profile to test");
        setUserProfile(profile);
      } catch (error) {
        console.error("profile get error:", error);
      }
    }
  return (
    <div className='myaccount-profile-wrap'>
        <MyNav/>
        <div className='myaccount-profile-page'>

            <div className='myaccount-title'>
                <p className='myaccount-title-1'>My Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className='myaccount-title-2'>{">>>"}</p>
            </div>

            {userProfile && (
                <MyProfile userProfile={userProfile} />
            )}

            <a href="/myaccount/profileEdit" className="shopping_cart">
                <button className='myaccount-edit'>Edit</button>
            </a>
      </div>
    
    </div>
  )
}

export default App