// 依赖
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";

// 引入样式文件
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import ShoppingCartSummary from "./components/sc_summary";
import {
  deleteProductItem,
  changeProductCount,
  getShoppingCartDetail,
  validatePromoCode,
} from "../../services/shoppingCartService";

function Page() {
  // 定义input的value
  const [productItemList, setProductItemList] = useState([]);
  const [shoppingCartID, setShoppingCartID] = useState("134134");
  const [scSummary, setscSummary] = useState({});

  function getShoppingCartInfo() {
    // then:sucess;catch:error
    getShoppingCartDetail({ shoppingCartID: shoppingCartID })
      .then((data) => {
        console.log(data);
        // setProductItemList(data.productItemList);
        setProductItemList(
          data.productItems
            .map((i) => ({ ...i.product[0], quantity: i.quantity }))
            .map((i) => {
              console.log(i);
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
        });
      })
      .catch((error) => {
        // 临时
        const [messageApi] = message.useMessage();

        messageApi.open({
          type: "error",
          content: "System Error",
        });
      });
  }

  async function deleteProductID(value) {
    // console.log(value, shoppingCartID);
    // 向后端发送请求传 shoppingCartID，和productId
    await deleteProductItem({
      shoppingCartID: shoppingCartID,
      productID: value,
    });
    await getShoppingCartInfo();
  }

  async function changeProductQuantity({ productID, value: count }) {
    await changeProductCount({
      shoppingCartID: shoppingCartID,
      productID: productID,
      quantity: count,
    });
    await getShoppingCartInfo();
  }

  async function validatePromoCodeInput(givenCode) {
    const res = await validatePromoCode({ code: givenCode });
    // res = {isCanUse: truel, false; msg: "券已失效}
    if (res.isCanUse) {
      await getShoppingCartInfo();
    } else {
      console.log(res.message);
    }
  }

  // first visit the page
  useEffect(() => {
    // Todo: 需要获取购物车id
    getShoppingCartInfo();
  }, []);

  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      {/* 面包屑 */}
      {/* &lt;代表< */}
      <div className="sc_bread_crumb">
        <Link to="/product">&lt;Continue Shopping</Link>
      </div>

      {/* 主内容 */}
      <div className="sc_content">
        {/* item详情 */}
        <div className="sc_content_left">
          {productItemList.map((productItem) => {
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
          })}
        </div>

        {/* summary+note */}
        <div className="sc_content_right">
          {/* summary */}
          <ShoppingCartSummary
            itemQuantity={scSummary.itemQuantity}
            itemsPrice={scSummary.itemsPrice}
            totalSaving={scSummary.totalSaving}
            subtotal={scSummary.subtotal}
            validatePromoCodeInput={validatePromoCodeInput}
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
