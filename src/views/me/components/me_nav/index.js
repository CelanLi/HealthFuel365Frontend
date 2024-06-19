//dependencies
import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//import style
import "./index.css"
import { Upload, message } from 'antd';
import defaultAvatar from '../../../../assets/images/myaccount/default-user.png'

//import functions
import { logoutUser } from '../../../../services/userService';
import { getUser, AvatarEdit } from '../../../../services/userService';
import { getCookie } from '../../../../util/cookie';
import { decodeBase64ToFile, compressImage } from '../../../../util/avatar';
import { clearCookie, editAvatar } from '../../../../store/modules/user';


function MyNav() {
    //get user information
    const [userAccount,setUserAccount] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const avatarRef = useRef(null);
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);


    //initial user account
    // useEffect(() => {
    //   setAccount();
    // },[])

    useEffect(() => {
      if (userInfo && userInfo.avatar) {
        if (userInfo.avatar === "default") {
          avatarRef.current.src = defaultAvatar;
        } else {
          const blob = decodeBase64ToFile(userInfo.avatar, 'image/png');
          const blobUrl = URL.createObjectURL(blob);
          avatarRef.current.src = blobUrl;
        }
      }
    }, []);

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
          const blob = compressedFile;
          const blobUrl = URL.createObjectURL(blob);
          avatarRef.current.src = blobUrl;
          message.success("Avatar upload completed!")

          dispatch(editAvatar(compressedFile));
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
        dispatch(clearCookie())
    };

  return (
    <div className='myaccount-nav-wrap'>

        {userInfo && userInfo.avatar && (
          <div className="nav-avatar-container">
            {userInfo && userInfo.avatar && (
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

        {userInfo && (
            <div className='myaccount-nav-text'>
              {userInfo.username}
            </div>
        )}

        <div style={{ height: '100px' }}></div>

        <div className='myaccount-nav-tab'>
            <Link to="/myaccount/addressmanagement" className='myaccount-nav-title'>My Address</Link>
        </div>

        <div className="myaccount-nav-tab">
            <Link to="/myaccount" className="myaccount-nav-title">My Profile</Link>
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