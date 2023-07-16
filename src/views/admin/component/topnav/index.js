import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../../../services/adminService";
import { message } from 'antd';

function Topnav() {
  const location= useLocation();
  //log out handle
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    logoutAdmin();
    navigate("/admin");
    window.location.reload();
  };
  return (
    <div className="topnav">
      <div className="topnav_slogan"> HealthFuel365—— Online gas station for your health </div>
      <div className="topnav_logo_admin">
        <Link to="/admin/userManagement"/>
      </div>
      <div className="topnav_container">
        <div className="left">
          <Link to="/admin/userManagement" className={(location.pathname==="/admin/userManagement")? "active" : ""}>User Management</Link>
          <Link to="/admin/productManagement" className={(location.pathname==="/admin/productManagement")? "active" : ""}>Product Management</Link>
          <Link to="/admin/promoCodeManagement" className={(location.pathname==="/admin/promoCodeManagement")? "active" : ""}>Promo Code Management</Link>
          <Link to="/admin/orderManagement" className={(location.pathname==="/admin/orderManagement")? "active" : ""}>Order Management</Link>
        </div>
        <div className="right">
          <div className="right-icon-container">
            <Link to="/admin" className="user" onClick={handleLogout}></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topnav;