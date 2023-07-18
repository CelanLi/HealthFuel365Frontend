//dependencies
import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//import style
import "./index.css"
import MyInfo from '../me_info'
import { Upload, message } from 'antd';
import defaultAvatar from '../../../../assets/images/myaccount/default-user.png'

//import functions
import { logoutUser } from '../../../../services/userService';
import { getUser, AvatarEdit } from '../../../../services/userService';
import { getCookie } from '../../../../util/cookie';
import { decodeBase64ToFile, compressImage } from '../../../../util/avatar';


function MyNav() {
    //get user information
    const [userAccount,setUserAccount] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const avatarRef = useRef(null);


    //initial user account
    useEffect(() => {
      setAccount();
    },[])

    useEffect(() => {
      if (userAccount && userAccount.avatar) {
        if (userAccount.avatar === "default") {
          avatarRef.current.src = defaultAvatar;
        } else {
          const blob = decodeBase64ToFile(userAccount.avatar, 'image/png');
          const blobUrl = URL.createObjectURL(blob);
          avatarRef.current.src = blobUrl;
        }
      }
    }, [userAccount]);
  
    //get account from backend
    const setAccount = async () => {
      try{
        const cookie = getCookie("userLogin")
        if (cookie) {
          console.log("getaccount")
          const userAccount = await (getUser());
          if (userAccount) {
            setUserAccount(userAccount)
          }
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


    // navigation
    const navigate = useNavigate();

    // upload avatar handle
    const handleAvatarChange = async (info) => {

      console.log(info.file.size)
      const compressionOptions = {
        maxWidthOrHeight: 800, // Specify the maximum width or height of the compressed image
        maxSizeMB: 0.5, // Specify the maximum size in megabytes of the compressed image
      };
      if (info.file) {
        if (info.file.type.startsWith("image/")){
          const compressedFile = await compressImage(info.file, compressionOptions);
          console.log('Upload completed');
          const successFlag = await AvatarEdit( {avatar: compressedFile} )
          if (successFlag) {
            message.success("Avatar upload completed!")
            await setAccount();
            const blob = compressedFile;
            const blobUrl = URL.createObjectURL(blob);
            avatarRef.current.src = blobUrl;
          }
          else{
            message.error("Avatar upload failed!")
          }
        }
        else{
          message.error("Please upload images!");
        }
      }
    };

    // log out handle
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/homepage');
        logoutUser();
    };

  return (
    <div className='myaccount-nav-wrap'>

        {userAccount && userAccount.avatar && (
          <div className="nav-avatar-container">
            {userAccount && userAccount.avatar && (
              <div>
                <img ref={avatarRef} className="avatar-image" alt="Avatar"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}/>
                {isHovered && (
                  <div className="nav-upload-container"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}>
                    <Upload
                      name="avatar"
                      listType="picture"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={() => false} // Prevent immediate upload
                      onChange={handleAvatarChange}
                    >
                      <div className="circular-upload">
                        <div className="upload-content">
                          <span className="upload-icon">+</span>
                          <span className="upload-text">Upload Avatar</span>
                        </div>
                      </div>
                    </Upload>
                  </div>
                )}
              </div>
              
            )}
          </div>
        )}

        {userAccount && (
            // <MyInfo username={userAccount.username}/>
            <div className='myaccount-nav-text'>
              {userAccount.username}
            </div>
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