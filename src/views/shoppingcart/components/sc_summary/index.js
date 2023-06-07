// 引入样式文件
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ShoppingCartSummary({
  itemQuantity,
  itemsPrice,
  totalSaving,
  subtotal,
  validatePromoCodeInput,
}) {
  const [promoCode, setPromoCode] = useState("");

  function validateCode() {
    if (!promoCode) {
      console.log("code不能为空");
    } else {
      validatePromoCodeInput(promoCode);
    }
  }

  return (
    <>
      {/* summary */}
      <div className="sc_summary">
        <div className="sc_content_right_up">Summary</div>
        <div className="sc_content_right_middle">
          <div className="sc_items_count_price">
            <div className="sc_items_count">{itemQuantity} Items</div>
            <div className="sc_items_price">{itemsPrice}€</div>
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
              <div className="sc_given_code_buttom_wrap" onClick={validateCode}>
                <img
                  className="sc_given_code_buttom"
                  src={require("../../../../assets/images/give_code_buttom.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sc_content_right_bottom">
          <div className="sc_content_right_bottom_total_saving">
            <div className="sc_total_saving">Total Savings</div>
            <div className="sc_total_saving_value">{totalSaving}€</div>
          </div>
          <div className="sc_content_right_bottom_subtotal">
            <div className="sc_subtotal">Subtotal</div>
            <div className="sc_subtotal_value">{subtotal}€</div>
          </div>
        </div>
        <div className="sc_checkout_wrap">
          <Link className="sc_checkout" to="/order">
            Go to Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartSummary;
