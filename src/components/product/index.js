import "./index.css";
import Nutri from "../nutri";
import AddToScButton from "../add_to_sc_button";
import { addShoppingCart } from "../../services/productService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import { getUser } from "../../services/userService";
import { getCookie } from "../../util/cookie";

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
  const showLoginReminder = () => {
    Modal.error({
      title: "please log in",
      content: "Before adding items to your shopping cart, log in is reuired",
      onOk: () => {
        window.location.href = "http://localhost:3000";
      },
    });
  };
  const clickShoppingCart = async (productID) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, productID);
  };
  const handleClick = () => {
    const cookie = getCookie("login");
    if (!cookie) {
      showLoginReminder();
    } 
    else if (capacity === 0) {
      message.error("Sorry, this item is not available.");
    } 
    else{
      clickShoppingCart(productID);
    }
  };
  useEffect(() => {
    (async () => {
      // only get user when document.cookie is not empty
      const cookie = getCookie("login");
      if (cookie) {
        const userAccount = await getUser();
        const userID = userAccount.id;
        setShoppingCartID(userID);
      }
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
