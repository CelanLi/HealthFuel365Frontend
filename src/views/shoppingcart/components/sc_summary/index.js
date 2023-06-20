import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { message, Tag } from "antd";
function ShoppingCartSummary({
  itemQuantity,
  itemsPrice,
  totalSaving,
  subtotal,
  codeValue,
  validatePromoCodeInput,
  removePromoCode,
}) {
  const [promoCode, setPromoCode] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  function validateCode() {
    if (!promoCode) {
      messageApi.open({
        type: "error",
        content: "code can not be empty",
        duration: 1,
      });
    } else {
      validatePromoCodeInput(promoCode);
      setPromoCode("");
    }
  }

  function deletePromoCode() {
    removePromoCode();
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (!promoCode) {
        messageApi.open({
          type: "error",
          content: "code can not be empty",
          duration: 1,
        });
      } else {
        validatePromoCodeInput(promoCode);
        setPromoCode("");
      }
    }
  };

  function goToOrder() {
    if (itemQuantity === 0) {
      messageApi.open({
        type: "error",
        content: "Sorry, your shopping cart is empty.",
        duration: 1,
      });
      return;
    }
    window.location.href = "/order";
  }

  return (
    <>
      {/* summary */}
      <div className="sc_summary">
        {contextHolder}
        <div className="sc_content_right_up">Summary</div>
        <div className="sc_content_right_middle">
          <div className="sc_items_count_price">
            <div className="sc_items_count">{itemQuantity} Items</div>
            <div className="sc_items_price">{itemsPrice}€</div>
          </div>
          <div className="sc_promo_code">
            <div className="sc_give_code">Give Code</div>
            <div className="sc_give_code_wrap">
              {/* promo code input */}
              <div className="sc_given_code_input_wrap">
                <input
                  className="sc_given_code_input"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code"
                  onKeyDown={handleKeyPress}
                />
              </div>
              <div className="sc_given_code_buttom_wrap" onClick={validateCode}>
                <img
                  className="sc_given_code_buttom"
                  src={require("../../../../assets/images/give_code_buttom.png")}
                />
              </div>
            </div>
            <div className="sc_promo_code_wrap">
              {codeValue ? (
                <Tag closable onClose={deletePromoCode} color="green">
                  {codeValue}
                </Tag>
              ) : null}
            </div>
          </div>
        </div>
        <div className="sc_content_right_bottom">
          <div className="sc_content_right_bottom_total_saving">
            <div className="sc_total_saving">Total Savings</div>
            <div className="sc_total_saving_value">- {totalSaving}€</div>
          </div>
          <div className="sc_content_right_bottom_subtotal">
            <div className="sc_subtotal">Subtotal</div>
            <div className="sc_subtotal_value">{subtotal}€</div>
          </div>
        </div>
        <div className="sc_checkout_wrap">
          <div className="sc_checkout" onClick={goToOrder}>
            Go to Checkout
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartSummary;
