import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import {loginUser} from '../../../services/userService'

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({
          username:username,
          password:password,});
        
        //empty the form
        setUsername('');
        setPassword('');
      };

    return(
        <form onSubmit={handleSubmit}>
        <label>
            username:
            <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
            password:
            <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;