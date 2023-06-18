
// import css file
import './index.css';
// dependencies
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import LoginForm from "./components"


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Login () {
  const featurelist = [
    "100% Safe Packaged Products",
    "500+ Products with Excellent Nutri-Score",
    "Eat for Your Lifestyle: Personalized Food Recommendations",
    "Over 99% Products Marked with Essential Nutritions",
  ]

  return(
    <div className="welcomepage_wrap"> 
    <div className="whiteboard"></div>
    <div className="wel_left">
      <div className="wel_titel"> HealthFuel365 </div>
      <div className="wel_slogan"> ——Online gas station for your health </div>

      <div className="wel_btn_wrap">
        <LoginForm></LoginForm>
      </div>

      <div className="guest"><Link to="/homepage">Visit as a guest</Link></div>
    </div>

    <div className="wel_right">
      {/* 遍历 */}
      {featurelist.map(item => ((
        <>
          <div className="wel_feature"><div>{item}</div></div>
        </>
      )))}
    </div>

  </div>

  );
}
export default Login;