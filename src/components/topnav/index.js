import './index.css';
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from 'react';

function Page() {
  const location= useLocation();
  const [keyWords,setKeyWords]=useState();
  useEffect(()=> console.log(keyWords),[keyWords]);
  return (
    <div className="topnav">
      <div className="topnav_slogan"> HealthFule365——Online gas station for your health </div>
      <div className="topnav_logo"/>
      <div className="product_topnav_wrap">
        <div className="left">
          <Link to="/homepage" className={(location.pathname==="/homepage")? "active" : ""}>HomePage</Link>
          <Link to="/product"className={(location.pathname==="/product")? "active" : ""}>All Products</Link>
          <Link to="/faqs" className={(location.pathname==="/faqs")? "active" : ""}>FAQs</Link>
        </div>
        <div className="right">
          <div className="search-container">
            <form>
              <input type="text"  value={keyWords} onChange={(e) => setKeyWords(e.target.value)} placeholder=""/>
              <button type="submit"></button>
            </form>
          </div>  
          <div className="right-icon-container">
            <a href="/shoppingcart" className="shopping_cart"></a>
            <a href="/myaccount" className="user"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;