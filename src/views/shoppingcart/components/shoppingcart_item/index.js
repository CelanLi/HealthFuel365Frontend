import { Link } from "react-router-dom";
import { useState } from "react";
import BigNumber from "bignumber.js";
import "./index.css";
import ShoppingCartNutri from "../../../../components/nutri";
import ScItemCounter from "../sc_item_counter";
import DefaultImage from "../../../../assets/images/logo.png";

function ShoppingCartItem({
  productID,
  productName,
  productUnitPrice,
  productNutri,
  productImage,
  deleteProductID,
  changeProductCount,
  quantity,
  capacity,
}) {
  const [countValue, setCountValue] = useState(quantity);
  function getItemCount(value) {
    setCountValue(value);
    changeProductCount({ productID, value });
    //Todo: getShoppingCartList
  }

  function getTimesValue(num1, num2) {
    const value = new BigNumber(num1).times(new BigNumber(num2)).toFixed();
    if (isNaN(value)) {
      return 0;
    }
    return value;
  }

  /* If no image is retrieved from the stored URL, the logo is displayed as a product image */
  const [image, setImage] = useState( productImage );
  const [imageNotFound, setImageNotFound] = useState(false);
  const handleImageNotFound = () => {
    setImage(DefaultImage);
    setImageNotFound(true);
  };  
  return (
    <div className="sc_item">
      <div className="sc_item_image">
        <Link to={`/product/detail/${productID}`}>
          <img className="sc_item_testimage" src={image} onError={handleImageNotFound}></img>
        </Link>
      </div>
      <div className="sc_item_content">
        <div className="sc_item_content_left">
          <div className="sc_item_name">
            <Link to={`/product/detail/${productID}`}>{productName}</Link>
            <div
              className="sc_item_remove"
              onClick={() => deleteProductID(productID)}
            >
              Remove
            </div>
          </div>
          <div className="sc_item_unitprice">{productUnitPrice}€</div>
          <div className="sc_item_content_leftbottom">
            <div className="sc_item_nutri">
              <ShoppingCartNutri nutri={productNutri}></ShoppingCartNutri>
            </div>
            <div> 
              <ScItemCounter
                count={quantity}
                setCount={getItemCount}
                maxCapacity={capacity}
              ></ScItemCounter>
            </div>
            <div className="sc_item_price">
              {getTimesValue(countValue, productUnitPrice)}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
