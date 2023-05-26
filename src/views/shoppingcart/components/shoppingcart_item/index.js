// 引入样式文件
import "./index.css";
import ShoppingCartNutri from "../../../../components/nutri";
import ScItemCounter from "../sc_item_counter";

import { Link } from "react-router-dom";

function ShoppingCartItem({ productName, productUnitPrice, productNutri, productPrice, productImage }) {
  return (
    <div className="sc_item">
      <div className="sc_item_image">
        <Link to="/product/detail">
          <img
            className="sc_item_testimage"
            src={productImage} 
          ></img>
        </Link>
      </div>
      <div className="sc_item_content">
        <div className="sc_item_content_left">
          <div className="sc_item_name">
            <Link to="/product/detail"> 
              {productName}
            </Link>
          </div>
          <div className="sc_item_unitprice"> 
            {productUnitPrice}
          </div>
          <div className="sc_item_content_leftbottom">
            <div className="sc_item_nutri">
              <ShoppingCartNutri nutri={productNutri}></ShoppingCartNutri>
            </div>
            <div className="sc_item_count">
              <ScItemCounter></ScItemCounter>
            </div>
          </div>
        </div>
        <div className="sc_item_content_right">
          <div className="sc_item_remove">Remove</div>
          <div className="sc_item_price">{productPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
