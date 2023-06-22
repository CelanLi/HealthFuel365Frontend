import "./index.css";
import Nutri from "../nutri";
import AddToScButton from "../add_to_sc_button";
import { addShoppingCart } from "../../services/productService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { getUser } from "../../services/userService";

function ProductComponent({
  productID,
  productName = "name",
  productPrice,
  nutriScore,
  imageUrl,
  capacity,
}) {
  const [shoppingCartID, setShoppingCartID] = useState("");
  const router_path = "/product/detail/" + productID;
  const notAvailable = capacity === 0;
  const clickShoppingCart = async (productID) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, productID);
  };
  const handleClick = () => {
    if (notAvailable) {
      message.error("Sorry, there are no items available.");
    } else {
      clickShoppingCart(productID);
    }
  };
  useEffect(() => {
    (async () => {
      const userAccount = await getUser();
      const userID = userAccount.id;
      setShoppingCartID(userID);
    })();
  }, []);
  return (
    <div className="product">
      {/* should link to the corresponding product detail page*/}
      <Link to={router_path}>
        <div className="product-img">
          <img src={imageUrl} />
        </div>
        <div className="product-name">{productName}</div>
      </Link>
      <div className="product-other-content">
        <Nutri nutri={nutriScore} />
        <div className="product-right-buttom">
          <div className="product-unitprice">{productPrice}€</div>
          <AddToScButton onClick={handleClick} disabled={notAvailable} />
        </div>
      </div>
    </div>
  );
}
export default ProductComponent;
