import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";
// dependency
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import ShoppingCartSummary from "./components/sc_summary";
import { addressGet,getUser } from "../../services/userService";
import { getCookie } from "../../util/cookie";
import { Modal } from "antd";

import {
  deleteProductItem,
  changeProductCount,
  getShoppingCartDetail,
  validatePromoCode,
  deletePromoCode,
} from "../../services/shoppingCartService";

function Page() {
  // definite value input
  const [productItemList, setProductItemList] = useState([]);
  const [shoppingCartID, setShoppingCartID] = useState("");
  const [scSummary, setscSummary] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  function getShoppingCartInfo() {
    // then:sucess;catch:error
    getShoppingCartDetail({ shoppingCartID: shoppingCartID })
      .then((data) => {
        // setProductItemList(data.productItemList);
        setProductItemList(
          data.productItems
            .map((i) => ({ ...i.product, quantity: i.quantity }))
            .map((i) => {
              return {
                productID: i.productID,
                productName: i.productName,
                productPrice: i.productPrice,
                productNutri: i.nutriScore,
                productImage: i.imageUrl,
                productBrand: i.productBrand,
                capacity: i.capacity,
                quantity: i.quantity,
              };
            })
        );

        setscSummary({
          itemQuantity: data.shoppingCartItems.itemQuantity,
          itemsPrice: data.shoppingCartItems.itemPrice,
          totalSaving: data.shoppingCartItems.totalSaving,
          subtotal: data.shoppingCartItems.subTotal,
          codeValue: data.shoppingCartItems.codeValue,
        });
      })
      .catch((error) => {
        messageApi.open({
          type: "error",
          content: "System Error",
        });
      });
  }

  async function deleteProductID(value) {
    // console.log(value, shoppingCartID);
    // give shoppingCartID，and productId to backend
    await deleteProductItem({
      shoppingCartID: shoppingCartID,
      productID: value,
    });
    await getShoppingCartInfo();
  }

  async function changeProductQuantity({ productID, value: count }) {
    if (Number(count) === 0) {
      return;
    }
    await changeProductCount({
      shoppingCartID: shoppingCartID,
      productID: productID,
      quantity: Number(count),
    });
    await getShoppingCartInfo();
  }

  async function validatePromoCodeInput(givenCode) {
    const res = await validatePromoCode({
      shoppingCartID: shoppingCartID,
      code: givenCode,
    });
    console.log(res);
    if (res.code === 0) {
      await getShoppingCartInfo();
    } else {
      messageApi.open({
        type: "error",
        content: res.message,
      });
    }
  }

  async function removePromoCode() {
    await deletePromoCode({ shoppingCartID: shoppingCartID });
    await getShoppingCartInfo();
  }

  // first visit the page
  useEffect(() => {
    (async () => {
      const cookie = getCookie("userLogin")
      if (cookie) {
        const userAccount = await getUser();
        const userID = userAccount.id;
        setShoppingCartID(userID);
        // store current path
        localStorage.setItem("navigationHistory", JSON.stringify(window.location.pathname));
      }
      else {
        Modal.error({
          title: "please log in",
          content: "Sorry, log in is reuired",
          onOk: () => {
            window.location.href = "http://localhost:3000";
          },
        });
      }
    })()
  }, []);

  useEffect(() => {
    if (shoppingCartID) {
      getShoppingCartInfo();
    }
  }, [shoppingCartID]);

  return (
    // HTML structer
    <div className="shoppingcart_wrap">
      {contextHolder}
      {/* &lt;represent< */}
      <div className="sc_bread_crumb">
        <Link to="/product">&lt;Continue Shopping</Link>
      </div>

      {/* main content */}
      <div className="sc_content">
        {/* item content */}
        <div className="sc_content_left">
          {productItemList.length > 0 ? (
            productItemList.map((productItem) => {
              return (
                <ShoppingCartItem
                  key={productItem.productID}
                  deleteProductID={deleteProductID}
                  changeProductCount={changeProductQuantity}
                  productID={productItem.productID}
                  productName={productItem.productName}
                  productUnitPrice={productItem.productPrice}
                  productImage={productItem.productImage}
                  productNutri={productItem.productNutri}
                  capacity={productItem.capacity}
                  quantity={productItem.quantity}
                ></ShoppingCartItem>
              );
            })
          ) : (
            <div className="sc_no_items_wrap">
              Sorry, your shopping cart is empty. <br />
              Please continue shopping.
            </div>
          )}
        </div>

        {/* summary+note */}
        <div className="sc_content_right">
          {/* summary */}
          <ShoppingCartSummary
            itemQuantity={scSummary.itemQuantity}
            itemsPrice={scSummary.itemsPrice}
            totalSaving={scSummary.totalSaving}
            subtotal={scSummary.subtotal}
            codeValue={scSummary.codeValue}
            validatePromoCodeInput={validatePromoCodeInput}
            removePromoCode={removePromoCode}
          ></ShoppingCartSummary>

          {/* note */}
          <div className="sc_note">
            <div className="sc_note_payment">
              <div className="sc_note_paypal">We accept</div>
              <div className="sc_note_paypal_logo"></div>
            </div>

            <div className="sc_note_delivery">
              <div className="sc_note_delivery_co">We cooperate</div>
              <div className="sc_note_delivery_logo"></div>
            </div>

            <div className="sc_note_service">
              <div className="sc_note_service_pro">We provide</div>
              <div className="sc_note_service_image"></div>
              <div className="sc_note_as_a_gift">Send as A Gift</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
