import './index.css';
import TopNav from "../components/topnav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Nutri from "../shoppingcart/components/shoppingcart_nutri";
import ContentLevel from "./components/content_level";

function Page() {
  return (
    <div className="productdetail-wrap"> 
      <TopNav/>

      {/* <back */}
      <div className="pd_bread_crumb">
        <Link to="/product">&lt;Back</Link>
      </div>

      <div className="pd_content">
        <div className="pd_content_top">
          {/* product-img */}
          <div className="pd_top_left">
            <img src="https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg"></img>
          </div>
          <div className="pd_top_right">
            {/* product-name */}
            <h2>Hafer Porridge Cup Schokolade - Davert - 65 g</h2>
            {/* brand */}
            <p>Brand: Davert</p>
            {/* nutri-score */}
            <Nutri nutri='C'/>
            <div className="pd_top_right_bottom">
              <div className="left">
                <div className="price">2,99€</div>
                <div className="available">Available</div>
              </div>
              <div className="right">
                  {/* add to shopping cart button */}
                <button/>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_content_bottom">
          <h3>Nutritional Information</h3>
          <div class="nutri_info">
            <ContentLevel degree='high'/>
            High amount of fat (28%)
          </div>
          <div class="nutri_info">
            <ContentLevel degree='moderate'/>
            Sugar in moderate amounts (12%)
          </div>
          <div class="nutri_info">
            <ContentLevel degree='small'/>
            Salt in small amounts (0.06%)
          </div>

          <h3>Other Product Description</h3>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;