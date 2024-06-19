import { Input, List, message } from 'antd';
import React, { useState, useEffect } from 'react';
import {loginUser} from '../../../services/userService';
import {loginAdmin} from '../../../services/adminService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserInfo, fetchUserLogin } from '../../../store/modules/user';

import "./index.css"

function LoginForm({isUser=true}){
  console.log(isUser? "true":"false")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let successFlag=false;
    if (isUser) {
      successFlag = dispatch(fetchUserLogin({
        username: username,
        password: password,
      }));
    } else {
      successFlag = await loginAdmin({
        adminID: username,
        password: password,
      });
    }

    if (successFlag) { 
      if(isUser){
        navigate('/homepage');
      }
      else{
        navigate("/admin/userManagement");
      }
      
    }
    //empty the form
    setUsername('');
    setPassword('');
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

  return(
    <div className='login-form'>
      <List 
      itemLayout="vertical"
      size="large"
      bordered={false}
      split={false}>
        <List.Item className='login-form-item'>
          <Input className='login-form-input' placeholder={isUser? "Username":"AdminID"} type="text" value={username} onChange={handleUsernameChange} 
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
            Login
          </div>
        </List.Item>
      </List>
    </div>
  );
}

export default LoginForm;