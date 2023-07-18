//dependencies
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getOrder, getOrderTimestamp } from "../../../services/orderService";

//import style
import "./index.css";
import MyOrder from "../components/me_order";
import MyNav from "../components/me_nav";
import { message } from "antd";

function App() {
  // set order list value
  const [orderList, setOrderList] = useState([]);
  //navigation
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  // initial order list
  useEffect(() => {
    setOrder();

    const { search, origin, pathname } = window.location;
   
    const { tips: paymentTips } = Object.fromEntries(
      new URLSearchParams(search)
    );
    if (paymentTips === "success") {
      messageApi.open({
        type: "success",
        content: "Payment successful!",
      });
    } else if (paymentTips === "cancel"){
      messageApi.open({
        type: "error",
        content: "Payment failed, Order cancelled",
      });
    }

    window.history.replaceState(null, null, origin + pathname);
  }, []);
  // get order list value if order list changes
  useEffect(() => {
    setOrderList(orderList);
  }, [orderList]);

  // get order list from backend
  const setOrder = async () => {
    try {
      if (document.cookie) {
        // delay get order list
        setTimeout(async () => {
          const list = await getOrder();

          const sortedOrders = list.sort((a, b) => {
            const timestampA = getOrderTimestamp(a);
            const timestampB = getOrderTimestamp(b);
            return timestampB - timestampA;
          });

          // list.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
          console.log(sortedOrders + "order to test");
          setOrderList(sortedOrders);
        }, 300);
      }
      // else {
      //   const list = {};
      //   setTimeout(async () => {
      //     navigate('/');
      //   }, 3000);
      // }
    } catch (error) {
      console.error("order get error:", error);
    }
  };

  return (
    <div className="myaccount-order-wrap">
      {contextHolder}
      <MyNav />
      <div className="myaccount-order-page">
        {/* the title of block */}
        <div className="myaccount-title">
          <p className="myaccount-title-1">
            My Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p className="myaccount-title-2">{">>>"}</p>
        </div>
        <div style={{ width: "100%" }}>
          {orderList.map((orderItem) => {
            return (
              <MyOrder
                key={orderItem.orderID}
                id={orderItem.orderID}
                date={orderItem.orderDate}
                totalPrice={orderItem.totalPrice}
                status={orderItem.orderStatus}
                orderProducts={orderItem.orderProducts}
              ></MyOrder>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
