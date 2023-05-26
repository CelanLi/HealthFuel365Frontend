// 依赖
import { Link } from "react-router-dom";
import { useState } from "react";

// 引入样式文件
import "./index.css";
import OrderAddress from "./components/or_address";
import OrderAddAddress from "./components/or_add_address";
import OrderSummary from "./components/or_summary";
import OrderDelivery from "./components/or_delivery";
import OrderAdditionService from "./components/or_additional_service";

//ANTD components
import { Popover, Collapse } from "antd";
const { Panel } = Collapse;

function Page() {
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

  const [orSummary, setorSummary] = useState({
    itemsCount: 4,
    itemsPrice: "11,96€",
    totalSavings: "-2€",
    subtotal: "9,96€",
    shipping: "4,95€",
    additionalService: "1,95€",
    totalPrice: "16,86€",
  });

  return (
    // HTML结构
    <div className="shoppingcart_wrap"> 
      {/* 面包屑 */}
      {/* &lt;代表< */}
      <div className="or_bread_crumb">
        {" "}
        <Link to="/shoppingCart">&lt;Back to Shopping Cart</Link>{" "}
      </div>

      {/* 主内容 */}
      <div className="or_content">
        {/* item详情 */}
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
              <OrderDelivery></OrderDelivery>
              <OrderAdditionService></OrderAdditionService>
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
            shipping={orSummary.shipping}
            additionalService={orSummary.additionalService}
            totalPrice={orSummary.totalPrice}
          ></OrderSummary>
        </div>
      </div>
    </div>
  );
}

export default Page;
