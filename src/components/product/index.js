import "./index.css";
import Nutri from "../nutri";
import AddToScButton from "../add_to_sc_button";
import { addShoppingCart } from "../../services/productService";
import { changeProductCount, getShoppingCartDetail } from "../../services/shoppingCartService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import { getUser } from "../../services/userService";
import { getCookie } from "../../util/cookie";
import ScItemCounter from  "../../views/shoppingcart/components/sc_item_counter";
import DefaultImage from "../../assets/images/logo.png";

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

  /* If no image is retrieved from the stored URL, the logo is displayed as a product image */
  const [image, setImage] = useState(imageUrl);
  const [imageNotFound, setImageNotFound] = useState(false);
  const handleImageNotFound = () => {
    setImage(DefaultImage);
    setImageNotFound(true);
  };

  useEffect(() => {
    setImage(imageUrl)
  }, [imageUrl]);

  const showLoginReminder = () => {
    Modal.error({
      title: "please log in",
      content: "Before adding items to your shopping cart, log in is reuired",
      onOk: () => {
        window.location.href = "http://localhost:3000";
      },
    });
  };
  /* if there is no this product in the shopping cart  */
  const handleClick = async() => {
    const cookie = getCookie("userLogin");
    if (!cookie) {
      showLoginReminder();
    } 
    else if (capacity === 0) {
      message.error("Sorry, this item is not available.");
    } 
    else{
      await clickShoppingCart(productID);
      setQuantity(1);
    }
  };
  const clickShoppingCart = async (productID) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, productID);
  };

  useEffect(() => {
    (async () => {
      // only get user when document.cookie is not empty
      const cookie = getCookie("userLogin");
      if (cookie) {
        const userAccount = await getUser();
        const userID = userAccount.id;
        setShoppingCartID(userID);
      }
    })();
  }, []);

  /* store the quantity of this product in the shopping cart*/
  const [quantity, setQuantity] = useState(0);
  /* update the product count*/
  async function changeProductQuantity({ productID, value: count }) {
    if (Number(count) === 0) {
      message.success("Removed this item from shopping cart.");
      return;
    }
    await changeProductCount({
      shoppingCartID: shoppingCartID,
      productID: productID,
      quantity: Number(count),
    });
    message.success(`Updated this item's quantity to ${count} in shopping cart.`);
  }
  /* get the quantity of this product in the shopping cart*/
  const showQuantity = async (productID)=>{
    const data = await getShoppingCartDetail({ shoppingCartID: shoppingCartID });
    const q = data.productItems
      .map((i) => ({ ...i.product, quantity: i.quantity }))
      .filter((i) => i.productID === productID)
      .map((i)=>i.quantity);
    if (q.length === 0){
      setQuantity(0);
    }
    else{
      setQuantity(q[0]);
    }
  }
  /*
  useEffect(()=>{
    if (shoppingCartID) {
    showQuantity(productID);
    }
  },[shoppingCartID])
  */
  useEffect(() => {
    if (shoppingCartID && productID) {
      showQuantity(productID);
    }
  }, [shoppingCartID, productID]);
  function getItemCount(value) {
    setQuantity(value);
    changeProductQuantity({ productID, value });
  }
  
  return (
    <div className="product">
      {/* should link to the corresponding product detail page*/}
      <Link to={router_path}>
        <div className="product-img">
          <img src={image} onError={handleImageNotFound} />
        </div>
        <div className="product-name">{productName}</div>
      </Link>
      <div className="product-other-content">
        <Nutri nutri={nutriScore} />
        <div className="product-right-buttom">
          <div className="product-unitprice">{productPrice}€</div>
          { quantity === 0 ?
            <AddToScButton 
              onClick={handleClick} 
              disabled={notAvailable}
            /> :
            ( <ScItemCounter
                count={quantity}
                setCount={getItemCount}
                maxCapacity={capacity}
            />)
          }
        </div>
      </div>
    </div>
  );
}
export default ProductComponent;
