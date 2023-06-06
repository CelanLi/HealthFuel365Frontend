import { Link } from "react-router-dom";
import { useState } from "react";
import BigNumber from "bignumber.js";

// 引入样式文件
import "./index.css";
import ShoppingCartNutri from "../../../../components/nutri";
import ScItemCounter from "../sc_item_counter";

function ShoppingCartItem({
  productID,
  productName,
  productUnitPrice,
  productNutri,
  productImage,
  deletedProductID,
}) {
  const [countValue, setCountValue] = useState(1);

  function getItemCount(value) {
    setCountValue(value);
  }

  function getTimesValue(num1, num2) {
    return new BigNumber(num1).times(new BigNumber(num2)).toFixed();
  } 

  return (
    <div className="sc_item">
      <div className="sc_item_image">
        <Link to={`/product/${productID}/detail`}>
          <img className="sc_item_testimage" src={productImage}></img>
        </Link>
      </div>
      <div className="sc_item_content">
        <div className="sc_item_content_left">
          <div className="sc_item_name">
            <Link to={`/product/${productID}/detail`}>{productName}</Link>
          </div>
          <div className="sc_item_unitprice">{productUnitPrice}€</div>
          <div className="sc_item_content_leftbottom">
            <div className="sc_item_nutri">
              <ShoppingCartNutri nutri={productNutri}></ShoppingCartNutri>
            </div>
            <div className="sc_item_count">
              <ScItemCounter setCount={getItemCount}></ScItemCounter>
            </div>
          </div>
        </div>
        <div className="sc_item_content_right">
          <div className="sc_item_remove" onClick={()=>deletedProductID(productID)}>
            Remove
          </div>
          <div className="sc_item_price">
            {getTimesValue(countValue, productUnitPrice)}€
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
