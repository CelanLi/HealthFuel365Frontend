// import css file
import "./index.css"
// dependencies
import React, { useEffect } from 'react';
import LoginForm from "../../login/components"
import { getCookie } from "../../../../src/util/cookie";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

function AdminLogin () {
  const navigate = useNavigate();
  // if a logged in user get to this page, log in automatically
  useEffect(() => {
    const cookie = getCookie("adminLogin");
    if (cookie) {
      message.success("Welcome!");
      navigate("/admin/userManagement");
    }
  }, []);


  return(
    <div className="admin_login_wrap"> 
        <div className="wel_container">
            <div className="wel">  
                <div className="wel_titel"> HealthFuel365 </div>
                <div className="wel_slogan"> ——Online gas station for your health </div> 
            </div>
            <div className="wel">  
                <LoginForm isUser={false}></LoginForm>
            </div>
        </div>
  </div>
  );
}
export default AdminLogin;