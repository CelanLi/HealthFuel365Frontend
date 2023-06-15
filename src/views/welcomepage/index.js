// import
import './index.css';
// Dependency
import {Link} from 'react-router-dom'

function Page() {

  const featurelist = [
    "100% Safe Packaged Products",
    "500+ Products with Excellent Nutri-Score",
    "Eat for Your Lifestyle: Personalized Food Recommendations",
    "Over 99% Products Marked with Essential Nutritions",
  ]

  return (
    // Left & Right devided
    <div className="welcomepage_wrap"> 
      <div className="whiteboard"></div>
      <div className="wel_left">
        <div className="wel_titel"> HealthFuel365 </div>
        <div className="wel_slogan"> ——Online gas station for your health </div>

        <div className="wel_btn_wrap">
          <div className="login"><Link to={'/login'}>Login</Link></div>
          <div className="register"><Link to={'/register'}>Register</Link></div>
        </div>

        <div className="guest"><Link to="/homepage">Visit as a guest</Link></div>
      </div>

      <div className="wel_right">
        {/* Loop */}
        {featurelist.map(item => ((
          <>
            <div className="wel_feature"><div>{item}</div></div>
          </>
        )))}
      </div>

    </div>
  );
}


export default Page;