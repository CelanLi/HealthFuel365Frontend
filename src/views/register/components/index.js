import { Button, Input, List, message, Upload } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import {registerUser} from '../../../services/userService'
import { useNavigate } from 'react-router-dom';
import { compressImage } from '../../../util/avatar';
import { getRecommendation } from '../../../services/recommendationService';
import defaultAvatar from '../../../assets/images/myaccount/default-user.png'

import "./index.css"

function RegisterForm(){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState(defaultAvatar);
  const [imageFile, setImageFile] = useState("default");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);


  //handle register
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("imagefile",imageFile);

    try{
      const successFlag = await registerUser({
        username:username,
        email:email,
        password:password,
        avatar:imageFile});

      //only when the registration success, jump to profile edit
      if (successFlag) {
      navigate('/myaccount/profileEdit');
      }

      getRecommendation();

      // empty the form
      setUsername('');
      setEmail('');
      setPassword('');

    }catch(error){
      message.error(`Register failed: ${error.response.data.message}`);
    }
  };

    // listen the change of size of window
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const calculateInputWidth = () => {
        return '50%';
    };

    const calculateAvatarWidth = () => {
      if (windowHeight >= 900) {
        return '80px';
      } else {
          return '40px';
      }
    };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAvatarChange = async (info) => {
    console.log("handleAvatarChange")

    console.log(info.file.type)
    const compressionOptions = {
      maxWidthOrHeight: 800, // Specify the maximum width or height of the compressed image
      maxSizeMB: 0.5, // Specify the maximum size in megabytes of the compressed image
    };
    if (info.file) {
      if (info.file.type.startsWith("image/")) {
        const compressedFile = await compressImage(info.file, compressionOptions);
        console.log('Upload completed');
        const url = URL.createObjectURL(compressedFile);
        setImageUrl(url);
        setImageFile(compressedFile);
        console.log(compressedFile.size)
      }
      else{
        message.error("Please upload images!");
      }
    }
  };

  const handleClearImage = () => {
    setImageUrl(defaultAvatar);
    setImageFile("default");
  };

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
    
  return(
    <div className='login-form'>
      <List 
      itemLayout="vertical"
      size="large"
      bordered={false}
      split={false}>
        <List.Item className='upload-margin'>
          <div className='upload-wrapper'>
            <div className="upload-container">
              <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={() => false} // Prevent immediate upload
                onChange={handleAvatarChange}
                >
                {imageUrl ? (
                  <div className="avatar-wrapper">
                    <img src={imageUrl} alt="Avatar" className="register-avatar-image" />
                  </div>
                ) : (
                  uploadButton
                )}
              </Upload>
              {imageUrl === defaultAvatar ? (
                <></>
              ) : (
                
                <Button
                  className="clear-image-button"
                  shape="circle"
                  onClick={handleClearImage}
                >
                  <CloseOutlined />
                </Button>
              )}
            </div>
          </div>
        </List.Item>
        <List.Item className='login-form-item'>
          <Input className='login-form-input' placeholder="Username" type="text" value={username} onChange={handleUsernameChange} 
                  style={{ width: calculateInputWidth() }}/>
        </List.Item>
        <List.Item className='login-form-item'>
          <Input className='login-form-input' placeholder="Email" type="text" value={email} onChange={handleEmailChange} 
                  style={{ width: calculateInputWidth() }}/>
        </List.Item>
        <List.Item className='login-form-item'>
          <Input.Password className='login-form-input' placeholder="Password" value={password} onChange={handlePasswordChange} 
                  style={{ width: calculateInputWidth() }}/>
        </List.Item>
        <List.Item className='login-form-item'>
          <div
              className="or_contact_information_add"
              type="primary"
              onClick={handleSubmit}
              style={{ width: calculateInputWidth() }}
            >
            Register
          </div>
        </List.Item>
      </List>
    </div>
  );
}

export default RegisterForm;