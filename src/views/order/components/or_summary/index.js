import { useEffect, useState } from "react";
import "./index.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  cancelPayment,
  successPayment,
} from "../../../../services/orderService";
import { message } from "antd";

function OrderSummary({
  itemsCount,
  itemsPrice,
  totalSavings,
  subtotal,
  shipping,
  additionalService,
  totalPrice,
  orAddressID,
  submitOrder,
}) {
  const initialOptions = {
    clientId:
      "AUDXh8CWBh5qtOCfwNmHTxWekJ5_4-5YGMh-cD1FSt-2470iz6pEROjQtcGPs5meIMqjQvCmFa2b3O2Q",
    currency: "EUR",
    intent: "capture",
  };

  const [isPending, setIsPending] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function () {
      successPayment({
        paymentID: data.orderID,
      }).then((res) => {
        if (res.code !== 0) {
          messageApi.open({
            type: "error",
            content: res.message,
          });
        }
        window.location.href = "http://localhost:3000/myaccount/myorder";
      });
      console.log("IS PAID");
    });
  };
  

  const onCancel = (data, actions) => {
    console.log(data);
    cancelPayment({
      paymentID: data.orderID,
    }).then((res) => {
      if (res.code !== 0) {
        messageApi.open({
          type: "error",
          content: res.message,
        });
      }
      window.location.href = "http://localhost:3000/myaccount/myorder";
    });
    console.log("IS CANCELLED");
  };

  const onCreateOrder = (data, actions) => {
    try {
      // Check if the required field is filled in
      if (!orAddressID.current) {
        messageApi.open({
          type: "error",
          content: "Recieving Address can not be empty",
          duration: 1,
        });
        return Promise.reject('Recieving Address can not be empty');
      }
  
      // Otherwise, proceed with creating the order
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                currency_code: initialOptions.currency,
                value: totalPrice.current,
              },
            },
          ],
        })
        .then((paymentId) => {
          // Your code here after create the order
          submitOrder(paymentId);
          return paymentId;
        });
    } catch(e) {
      console.log(e);
      return null;
    }
  }

  useEffect(() => {
    console.log(totalPrice);
    if (Number(totalPrice.current) > 0) {
      setIsPending(false);
    }
  }, [totalPrice.current]);

  return (
    <>
      {contextHolder}
      <div className="or_summary">Summary</div>
      <div className="or_content_right_up">
        <div className="or_content_right_up_item_price">
          <div className="or_items_count">{itemsCount} Items</div>
          <div className="or_items_price">{itemsPrice}€</div>
        </div>
        <div className="or_content_right_up_totalsaving">
          <div className="or_total_saving">Total Savings</div>
          <div className="or_total_saving_value">- {totalSavings}€</div>
        </div>
      </div>
      <div className="or_content_right_middle">
        <div className="or_content_right_middle_subtotal">
          <div className="or_subtotal">Subtotal</div>
          <div className="or_subtotal_value">{subtotal}€</div>
        </div>
        <div className="or_content_right_middle_shipping">
          <div className="or_shipping">Shipping</div>
          <div className="or_shippingl_value">{shipping}€</div>
        </div>
        <div className="or_content_right_middle__additional_service">
          <div className="or_summary_additional_service">
            Additional Service
          </div>
          <div className="or_summary_additional_servicel_value">
            {additionalService}€
          </div>
        </div>
      </div>
      <div className="or_content_right_bottom">
        <div className="or_totalprice">
          <div className="or_totalprice_up">Total Price</div>
          <div className="or_totalprice_bottom">
            (incl. VAT, plus shipping costs)
          </div>
        </div>
        <div className="or_content_right_bottom_value">
          <div className="or_totalprice_value">{totalPrice.current}€</div>
        </div>
      </div>
      {isPending ? null : (
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onCancel={onCancel}
            onApprove={onApprove}
            onError={(err) => {
              console.log(err);
            }}
          />
        </PayPalScriptProvider>
      )}
    </>
  );
}

export default OrderSummary;
