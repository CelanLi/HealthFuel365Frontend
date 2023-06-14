import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import {registerUser} from '../../../services/userService'
import { useNavigate } from 'react-router-dom';

function RegisterForm(){
  const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("222",username,email,password)
        registerUser({
          username:username,
          email:email,
          password:password,});
        
        navigate('/myaccount/profileedit');
        // empty the form
        setUsername('');
        setEmail('');
        setPassword('');
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
        <form onSubmit={handleSubmit}>
            <label>
                username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>

    );
}

export default RegisterForm;