import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";
import BigNumber from "bignumber.js";

import "./index.css";
import OrderAddress from "./components/or_address";
import OrderAddAddress from "./components/or_add_address";
import OrderSummary from "./components/or_summary";
import OrderDelivery from "./components/or_delivery";
import OrderAdditionService from "./components/or_additional_service";
import { getShoppingCartDetail } from "../../services/shoppingCartService";
import { addressGet,getUser } from "../../services/userService";
import { createOrder } from "../../services/orderService";

//ANTD components
import { Popover, Collapse } from "antd";
const { Panel } = Collapse;

function Page() {
  const [shoppingCartID, setShoppingCartID] = useState("134134");
  const [addressList, setAddressList] = useState([]);
  const [orSummary, setorSummary] = useState({});
  const [orTotalPrice, setTotalPrice] = useState("0");
  const [orDelivery, setorDelivery] = useState("HERMES");
  const [orService, setorService] = useState(false);
  const [orAddressID, setorAddressID] = useState("");
  const [orDeliveryPrice, setorDeliveryPrice] = useState(4.95);
  const [orServicePrice, setorServicePrice] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  function calculateTotalPrice() {
    const value = new BigNumber(orSummary.subtotal)
      .plus(new BigNumber(orDeliveryPrice))
      .plus(new BigNumber(orServicePrice))
      .toFixed();
    if (isNaN(value)) {
      return 0;
    }
    setTotalPrice(value);
  }

  function getDeliveryChoice(value) {
    setorDelivery(value);
    setorDeliveryPrice(value === "Rapid" ? 7.95 : 4.95);
  }

  function getAddressChoice(value) {
    setorAddressID(value);
  }

  function getAdditionServiceChoice(value) {
    setorService(value);
    setorServicePrice(value ? 1.95 : 0);
  }

  // get: itemquantity,itemprice,total savings, subtotal
  function getOrderSummaryInfo() {
    // then:sucess;catch:error
    getShoppingCartDetail({ shoppingCartID: shoppingCartID })
      .then((data) => {
        // setProductItemList(data.productItemList);
        setorSummary({
          itemsCount: data.shoppingCartItems.itemQuantity,
          itemsPrice: data.shoppingCartItems.itemPrice,
          totalSavings: data.shoppingCartItems.totalSaving,
          subtotal: data.shoppingCartItems.subTotal,
        });
      })
      .catch((error) => {
        messageApi.open({
          type: "error",
          content: "System Error",
        });
      });
  }

  //get user from backend
  const setShoppingCart = async () => {
    try {
      if (document.cookie) {
        const userAccount = await (getUser());
        console.log(userAccount,"userAccount to test");

        const userID = userAccount.id
        console.log(userID)
        setShoppingCartID(userID)
      }
      else{
        console.error("please log in!")
      }
    } catch (error) {
      console.error("shoppingcart set error:", error);
    }
  };

  //get address list from backend
  const setAddress = async () => {
    try {
      const list = await addressGet();
      console.log(JSON.stringify(list) + "address to test");
      setAddressList(list);
    } catch (error) {
      console.error("address get error:", error);
    }
  };

  //create order
  function addOrder() {
    createOrder({ shoppingCartID, orDelivery, orService, orAddressID }).then(
      (res) => {
        if (res.code === 0) {
          window.location.href = "http://localhost:3000/myaccount/myorder";
        } else {
          messageApi.open({
            type: "error",
            content: res.message,
          });
        }
      }
    );
  }

  // first visit the page
  useEffect(() => {
    getOrderSummaryInfo();
    setAddress();
    setShoppingCart();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [orSummary, orDelivery, orService]);

  //get address list value if address list changes
  useEffect(() => {
    setAddressList(addressList);
  }, [addressList]);

  return (
    <div className="shoppingcart_wrap">
      {contextHolder}
      {/* &lt; represent< */}
      <div className="or_bread_crumb">
        {" "}
        <Link to="/shoppingCart">&lt;Back to Shopping Cart</Link>{" "}
      </div>

      {/* main content */}
      <div className="or_content">
        {/* item content */}
        <div className="or_content_left">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition="end"
          >
            <Panel header="Contact Information" key="1">
              <div className="or_contact_information_content">
                <OrderAddress
                  addressList={addressList}
                  addressChoice={getAddressChoice}
                ></OrderAddress>
              </div>
              <div>
                <OrderAddAddress></OrderAddAddress>
              </div>
            </Panel>
          </Collapse>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition="end"
          >
            <Panel header="Shipping Services" key="1">
              <OrderDelivery deliveryChoice={getDeliveryChoice}></OrderDelivery>
              <OrderAdditionService
                additionServiceChoice={getAdditionServiceChoice}
              ></OrderAdditionService>
            </Panel>
          </Collapse>
        </div>
        {/* summary*/}
        <div className="or_content_right">
          {/* summary */}
          <OrderSummary
            itemsCount={orSummary.itemsCount}
            itemsPrice={orSummary.itemsPrice}
            totalSavings={orSummary.totalSavings}
            subtotal={orSummary.subtotal}
            shipping={orDeliveryPrice}
            additionalService={orServicePrice}
            totalPrice={orTotalPrice}
            createOrder={addOrder}
          ></OrderSummary>
        </div>
      </div>
    </div>
  );
}

export default Page;
