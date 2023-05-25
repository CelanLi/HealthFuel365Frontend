// 依赖
import { Link } from "react-router-dom";
import { useState } from "react";

// 引入样式文件
import "./index.css";
import TopNav from "../components/topnav";
import Footer from "../components/footer";
import OrderAddress from "./components/or_address";
import OrderSummary from "./components/or_summary";

//ANTD components
import { Popover, Collapse, theme } from "antd";
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

  const deliveryList = [
    { desc: "Standard shipping via HERMES", choice: false, price: "4.95€" },
    { desc: "Standard shipping via DHL", choice: false, price: "4.95€" },
  ];

  const [orSummary, setorSummary] = useState({
    itemsCount: 4,
    itemsPrice: "11,96€",
    totalSavings: "-2€",
    subtotal: "9,96€",
    shipping: "4,95€",
    additionalService: "1,95€",
    totalPrice: "16,86€",
  });

  //note componets from ANTD
  const additionalServiceNote = (
    <div
      style={{
        fontFamily: "Kaisei Opti",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "29px",
        color: "#033d1f",
      }}
    >
      <div style={{ fontWeight: 900 }}>Send As a Gift</div>
      <div>
        We will cooperate with DHL to provide you with exquisite packaging.
      </div>
    </div>
  );

  const rapidShippingeNote = (
    <div
      style={{
        fontFamily: "Kaisei Opti",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "29px",
        color: "#033d1f",
      }}
    >
      <div style={{ fontWeight: 900 }}>Rapid Shipping</div>
      <div>Supported by DHL Express</div>
    </div>
  );

  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      {/* 导航条 */}
      <div>
        <TopNav />
      </div>
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
              <div className="or_contact_information_add">Add Address</div>
            </Panel>
          </Collapse>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition="end"
          >
            <Panel header="Shipping Services" key="1">
              <div className="or_delivery_content">
                {deliveryList.map((deliveryItem) => {
                  return (
                    <div className="or_delivery_desc">
                      <div className="or_standard_shipping_desc_left">
                        <div className="or_choice">
                          <input
                            type="radio"
                            value={deliveryItem.choice}
                            name="choice"
                          />
                        </div>
                        <div className="or_standard_shipping_name">
                          {deliveryItem.desc}
                        </div>
                      </div>
                      <div className="or_shipping_service_price">
                        {deliveryItem.price}
                      </div>
                    </div>
                  );
                })}

                <div className="or_delivery_desc">
                  <div className="or_standard_shipping_desc_left">
                    <div className="or_choice">
                      <input type="radio" value="false" name="choice" />
                    </div>
                    <div className="or_standard_rapid_shipping_wrap">
                      <div className="or_standard_shipping_name">
                        Rapid packaging and shipping (1-2 Working days)
                      </div>
                      <span className="or_standard_shipping_rapid_icon">
                        <img
                          src={require("../../assets/images/rapid_service_icon.png")}
                        />
                      </span>
                      <Popover
                        overlayClassName="popover_rapid_shipping"
                        content={rapidShippingeNote}
                        trigger="hover"
                        placement="right"
                      >
                        <span className="or_standard_shipping_rapid_note">
                          <img
                            src={require("../../assets/images/information_note.png")}
                          />
                        </span>
                      </Popover>
                    </div>
                  </div>
                  <div className="or_shipping_service_price">7.95€</div>
                </div>
              </div>

              <div className="or_additional_service">
                <div className="or_additional_service_title">
                  Additional Service
                </div>
                <div className="or_additional_service_content">
                  <div className="or_additional_service_desc">
                    <div className="or_additional_service_choice">
                      <input type="checkbox" />
                    </div>
                    <div className="or_additional_shipping_wrap">
                      <div className="or_additional_shipping_name">
                        I want to send as a gift
                      </div>
                      <span className="or_additional_shipping_icon">
                        <img
                          src={require("../../assets/images/gift_service.png")}
                        />
                      </span>
                      <Popover
                        overlayClassName="popover_additional_shipping"
                        overlayInnerStyle={{ color: "red" }}
                        content={additionalServiceNote}
                        trigger="hover"
                        placement="right"
                      >
                        <span className="or_additional_shipping_note">
                          <img
                            src={require("../../assets/images/information_note.png")}
                          />
                        </span>
                      </Popover>
                    </div>
                  </div>
                  <div className="or_additional_service_price">1.95€</div>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>

        {/* summary*/}
        <div className="or_content_right">
          {/* summary */}
          <OrderSummary
          itemsCount = {orSummary.itemsCount}
          itemsPrice = {orSummary.itemsPrice}
          totalSavings = {orSummary.totalSavings}
          subtotal = {orSummary.subtotal}
          shipping = {orSummary.shipping}
          additionalService = {orSummary.additionalService}
          totalPrice = {orSummary.totalPrice}
          ></OrderSummary>
        </div>
      </div>

      {/* Footer*/}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
