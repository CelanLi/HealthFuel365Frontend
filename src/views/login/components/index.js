import { Button, Checkbox, Form, Input, List, message } from 'antd';
import React, { useState } from 'react';
import {loginUser} from '../../../services/userService';
import {loginAdmin} from '../../../services/adminService';
import { useNavigate } from 'react-router-dom';

import "./index.css"

function LoginForm({isUser=true}){
  console.log(isUser? "true":"false")
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const successFlag = isUser? 
        await loginUser({
          username:username,
          password:password,})
        :
        await loginAdmin({
          adminID:username,
          password:password,});

      if (successFlag) { isUser? 
        navigate('/homepage')
        :
        navigate("/admin/userManagement");
      }
      // empty the form
      setUsername('');
      setPassword('');
    } catch (error) {
      message.error(`Login failed: ${error.response.data.message}`);
    }

    
    //empty the form
    setUsername('');
    setPassword('');
  };

  return(
    <div className='login-form'>
      <List 
      itemLayout="vertical"
      size="large"
      bordered={false}
      split={false}>
        <List.Item className='login-form-item'>
          <Input className='login-form-input' placeholder={isUser? "Username":"AdminID"} type="text" value={username} onChange={handleUsernameChange} />
        </List.Item>
        <List.Item className='login-form-item'>
          <Input.Password className='login-form-input' placeholder="Password" value={password} onChange={handlePasswordChange} />
        </List.Item>
        <List.Item className='login-form-item'>
          <Button className='login-form-button' onClick={handleSubmit}>Login</Button>
        </List.Item>
      </List>
    </div>
  );
}

export default LoginForm;