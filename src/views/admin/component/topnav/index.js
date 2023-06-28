import "../../../../components/topnav/index.css"
import { Link, useLocation } from "react-router-dom";

function Topnav() {
  const location= useLocation();
  return (
    <div className="topnav">
      <div className="topnav_slogan"> HealthFuel365——Online gas station for your health </div>
      <div className="topnav_logo">
        <Link to="/userManagement"/>
      </div>
      <div className="topnav_wrap">
        <div className="left">
          <Link to="/admin/userManagement" className={(location.pathname==="/admin/userManagement" | location.pathname==="/admin")? "active" : ""}>User Management</Link>
          <Link to="/admin/productManagement" className={(location.pathname==="/admin/productManagement")? "active" : ""}>Product Management</Link>
          <Link to="/admin/promoCodeManagement" className={(location.pathname==="/admin/promoCodeManagement")? "active" : ""}>Promo Code Management</Link>
          <Link to="/admin/orderManagement" className={(location.pathname==="/admin/orderManagement")? "active" : ""}>Order Management</Link>
        </div>
        <div className="right">
          <div className="right-icon-container">
            <Link to="" className="user"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topnav;