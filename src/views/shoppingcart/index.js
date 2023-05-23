// 引入样式文件
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import TopNav from "../allproducts/components/topnav";

// 依赖
import { Link } from "react-router-dom";
import { useState } from "react";

function Page() {
  // 定义input的value
  const [promoCode, setPromoCode] = useState("");

  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      {/* 导航条 */}
      <div>
        <TopNav />
      </div>

      {/* 面包屑 */}
      {/* &lt;代表< */}
      <div className="sc_bread_crumb">
        {" "}
        <Link to="/product">&lt;Continue Shopping</Link>{" "}
      </div>

      {/* 主内容 */}
      <div className="sc_content">
        {/* item详情 */}
        <div className="sc_content_left">
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
        </div>

        {/* summary+note */}
        <div className="sc_content_right">
          {/* summary */}
          <div className="sc_summary">
            <div className="sc_content_right_up">Summary</div>
            <div className="sc_content_right_middle">
              <div className="sc_items_count_price">
                <div className="sc_items_count">4 Items</div>
                <div className="sc_items_price">11,96€</div>
              </div>
              <div className="sc_promo_code">
                <div className="sc_give_code">Give Code</div>
                <div className="sc_give_code_wrap">
                  {/* 打折码input */}
                  <div className="sc_given_code_input_wrap">
                    <input
                      className="sc_given_code_input"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo Code"
                    />
                  </div>
                  <div className="sc_given_code_buttom_wrap">
                    <img
                      className="sc_given_code_buttom"
                      src={require("../../assets/images/give_code_buttom.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sc_content_right_bottom">
              <div className="sc_content_right_bottom_attribute">
                <div className="sc_total_saving">Total Savings</div>
                <div className="sc_subtotal">Subtotal</div>
              </div>
              <div className="sc_content_right_bottom_value">
                <div className="sc_total_saving_value">-2€</div>
                <div className="sc_subtotal_value">9,96€</div>
              </div>
            </div>
            <div className="sc_checkout">Go to Checkout</div>
          </div>

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
