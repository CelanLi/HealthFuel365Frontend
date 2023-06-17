import "./index.css";
import Nutri from "../nutri";
import AddToScButton from "../add_to_sc_button";
import { addShoppingCart } from "../../services/productService";
import { useState } from "react";

function ProductComponent({
  productID,
  productName = "name",
  productPrice,
  nutriScore,
  imageUrl,
}) {
  const [shoppingCartID, setShoppingCartID] = useState("134134");
  const clickShoppingCart = async (productID) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, productID);
  }; 
  const handleClick = () => {
    clickShoppingCart(productID);
  };
  const router_path = "/product/detail/" + productID;
  return (
    <div className="product">
      {/* should link to the corresponding product detail page*/}
      <a href={router_path}>
        <div className="product-img">
          <img src={imageUrl} />
        </div>
        <div className="product-name">{productName}</div>
      </a>
      <div className="product-other-content">
        <Nutri nutri={nutriScore} />
        <div className="product-right-buttom">
          <div className="product-unitprice">{productPrice}€</div>
          <AddToScButton onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}
export default ProductComponent;
