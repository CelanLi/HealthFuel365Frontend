import { Button, Checkbox, Form, Input, List, Modal, message } from 'antd';
import React, { useState } from 'react';
import {registerUser} from '../../../services/userService'
import { useNavigate } from 'react-router-dom';

import "./index.css"

function RegisterForm(){
  const navigate = useNavigate();

  //handle register
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const successFlag = await registerUser({
        username:username,
        email:email,
        password:password,});

      //only when the registration success, jump to profile edit
      if (successFlag) {
        navigate('/myaccount/profileedit');
      }

      // empty the form
      setUsername('');
      setEmail('');
      setPassword('');

    }catch(error){
      message.error(`Register failed: ${error.response.data.message}`);
    }
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          <Input className='login-form-input' placeholder="Email" type="text" value={email} onChange={handleEmailChange} />
        </List.Item>
        <List.Item className='login-form-item'>
          <Input.Password className='login-form-input' placeholder="Password" value={password} onChange={handlePasswordChange} />
        </List.Item>
        <List.Item className='login-form-item'>
          <Button className='login-form-button' onClick={handleSubmit}>Register</Button>
        </List.Item>
      </List>
    </div>
  );
}

export default RegisterForm;