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

//ANTD components
import { Popover, Collapse } from "antd";
const { Panel } = Collapse;

function Page() {
  const [shoppingCartID, setShoppingCartID] = useState("134134");

  const [addressList, setaddressList] = useState([
    {
      receiver: "Camille Li",
      street: "street 53",
      postCode: 12345,
      city: "munich",
      additional: "app. 254",
      tel: "134678",
    },
    {
      receiver: "Lily Y",
      street: "street 443",
      postCode: 73743,
      city: "munich",
      additional: "app. 297",
      tel: "107464292073",
    },
    {
      receiver: "Lucy Y",
      street: "street 44y29",
      postCode: 43980,
      city: "jackkey",
      additional: "app. 346",
      tel: "894386401741",
    },
  ]);

  const [orSummary, setorSummary] = useState({});

  const [orTotalPrice, setTotalPrice] = useState("0");

  const [orDelivery, setorDelivery] = useState("HERMES");

  const [orService, setorService] = useState(false);

  const [orDeliveryPrice, setorDeliveryPrice] = useState(4.95);

  const [orServicePrice, setorServicePrice] = useState(0);

  const [messageApi, contextHolder] = message.useMessage();
 
  function calculateTotalPrice() {
    console.log(orDeliveryPrice, orServicePrice);
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
    console.log(111, orDeliveryPrice, orServicePrice);
  }

  function getAdditionServiceChoice(value) {
    setorService(value);

    setorServicePrice(value ? 1.95 : 0);
    console.log(222, orDeliveryPrice, orServicePrice);
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

  // first visit the page
  useEffect(() => {
    getOrderSummaryInfo();
  }, []);

  useEffect(() => {
    calculateTotalPrice(); 
  }, [orSummary,orDelivery, orService]);

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
                {addressList.map((addressItem) => {
                  return (
                    <OrderAddress
                      receiver={addressItem.receiver}
                      street={addressItem.street}
                      postCode={addressItem.postCode}
                      city={addressItem.city}
                      additional={addressItem.additional}
                      tel={addressItem.tel}
                    ></OrderAddress>
                  );
                })}
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
          ></OrderSummary>
        </div>
      </div>
    </div>
  );
}

export default Page;
