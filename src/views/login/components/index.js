import { Button, Checkbox, Form, Input, List, message } from 'antd';
import React, { useState } from 'react';
import {loginUser} from '../../../services/userService'
import { useNavigate } from 'react-router-dom';

import "./index.css"

function LoginForm(){
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
      const successFlag = await loginUser({
        username:username,
        password:password,});

      if (successFlag) {
        navigate('/homepage');
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
          <Input className='login-form-input' placeholder="Username" type="text" value={username} onChange={handleUsernameChange} />
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