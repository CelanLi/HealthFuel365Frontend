// 引入样式文件
import './index.css';
import Logo from "../../assets/images/logo.png"

function index() {
  return (
    <div className='footer-container'>
        <div className='footer-background'>
            <span className='footer-text'>
                <p>© 2023 HealthFuel365 GmbH + Co. KG Arcisstraße 21, 80333 München</p>
                <p>Telefon: +49 (0)89-289-01 Telefax: +49 (0)89-289-22000</p>
            </span>
            <div className='footer-logo'>
                <img className='logo-img' src={Logo} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default index