import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { message, Modal } from "antd";
import Nutri from "../../components/nutri";
import ContentLevel from "./components/content_level";
import AddToScButton from "../../components/add_to_sc_button";
import { getDetail } from "../../services/productDetailService";
import { addShoppingCart } from "../../services/productService";
import { getCookie } from "../../util/cookie";
import { getUser } from "../../services/userService";

function Page() {
  // get corresponding product data by comparing the product id
  var pathname = window.location.pathname;
  var id = pathname.split("/")[3];
  console.log(id);
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [shoppingCartID, setShoppingCartID] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    const setData = async (id: string) => {
      try {
        const [product, productDetail] = await getDetail(id);
        setProduct(product);
        setProductDetail(productDetail);
      } catch (error) {
        console.error("error set products:", error);
      }
    };
    setData(id);
    (async () => {
      const cookie = getCookie("login");
      if (cookie) {
        const userAccount = await getUser();
        const userID = userAccount.id;
        setShoppingCartID(userID);
      } else {
        messageApi.open({
          type: "error",
          content: "Please log in!",
        });
      }
    })();
  }, []);

  var isAvailable = (capacity) => {
    if (capacity > 0) return "Available";
    else return "Not Available";
  };
  const showLoginReminder = () => {
    Modal.error({
      title: "please log in",
      content: "Before adding items to your shopping cart, log in is reuired",
      onOk: () => {
        window.location.href = "http://localhost:3000";
      },
    });
  };

  const clickShoppingCart = async (id) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, id);
  };
  // if the item is not avialable, it cannot be added to the cart.
  const handleClick = () => {
    if (product?.capacity === 0) {
      message.error("Sorry, this item is not available.");
    }
    const cookie = getCookie("login");
    if (!cookie) {
      showLoginReminder();
    } else {
      clickShoppingCart(id);
    }
  };

  return (
    <div className="productdetail-wrap">
      {/* <back */}
      <div className="pd_bread_crumb">
        <Link to="/product">&lt;Back</Link>
      </div>

      <div className="pd_content">
        <div className="pd_content_top">
          {/* product-img */}
          <div className="pd_top_left">
            <img src={product?.imageUrl}></img>
          </div>
          <div className="pd_top_right">
            {/* product-name */}
            <h2>{product?.productName}</h2>
            {/* brand */}
            <p>Brand: {product?.productBrand}</p>
            {/* nutri-score */}
            <Nutri nutri={product?.nutriScore} />
            <div className="pd_top_right_bottom">
              <div className="left">
                <div className="price">{product?.productPrice}€</div>
                <div className="available">
                  {isAvailable(product?.capacity)}
                </div>
              </div>
              <div className="right">
                {/* add to shopping cart button */}
                <AddToScButton
                  onClick={handleClick}
                  disabled={product?.capacity === 0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pd_content_bottom">
          <h3>Nutritional Information</h3>
          <div class="nutri_info">
            <ContentLevel degree={productDetail?.fatLevel} />
            Fat in {productDetail?.fatLevel} amounts ({productDetail?.fat}%)
          </div>
          <div class="nutri_info">
            <ContentLevel degree={productDetail?.sugarLevel} />
            Sugar in {productDetail?.sugarLevel} amounts ({productDetail?.sugar}
            %)
          </div>
          <div class="nutri_info">
            <ContentLevel degree={productDetail?.saltLevel} />
            Salt in {productDetail?.saltLevel} amounts ({productDetail?.salt}%)
          </div>

          <h3>Other Product Description</h3>
          {productDetail?.productDescription?.map((descriptionItem) => {
            return (
              <div>
                <p>{descriptionItem}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
