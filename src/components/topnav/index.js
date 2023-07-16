import './index.css';
import { Link, useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';

function Page() {
  const location= useLocation();
  const [keyWords,setKeyWords]=useState("");
  // used to navigate to the desired URL 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyWords.trim()) {
     navigate("/product?search="+keyWords);
    }
    else{
      alert("Please")
    }
  };
  
  useEffect(() => {
    // redirecting from all product pages to other pages keywords are cleared
    if(location.pathname!=="/product"){
      setKeyWords("");
    }
  }, [location.pathname]);

  return (
    <div className="topnav">
      <div className="topnav_slogan"> HealthFuel365—— Online gas station for your health </div>
      <div className="topnav_logo">
        <Link to="/homepage"/>
      </div>
      <div className="topnav_wrap">
        <div className="left">
          <Link to="/homepage" className={(location.pathname==="/homepage")? "active" : ""}>HomePage</Link>
          <Link to="/product"className={(location.pathname==="/product")? "active" : ""} onClick={() => window.location.href="/product"}>All Products</Link>
          <Link to="/faqs" className={(location.pathname==="/faqs")? "active" : ""}>FAQs</Link>
        </div>
        <div className="right">
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input type="text"  value={keyWords} onChange={(e) => setKeyWords(e.target.value)} placeholder="Search" required/>
              <button type="submit"/>
            </form>
          </div>  
          <div className="right-icon-container">
            <Link to="/shoppingcart" className="shopping_cart"></Link>
            <Link to="/myaccount/addressmanagement" className="user"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;