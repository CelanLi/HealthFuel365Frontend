// 引入样式文件
import "./index.css";
import TopNav from "../components/topnav";
import Footer from "../components/footer";

// 依赖
import { Link } from "react-router-dom";
// import { useState } from "react";

function Page() {
  const addressList = [
    {
      choice: false,
      receiver: "Camille Li",
      street: "street 53",
      postCode: 12345,
      city: "munich",
      additional: "app. 254",
      tel: "134678",
    },
    {
      choice: false,
      receiver: "Lily Y",
      street: "street 443",
      postCode: 73743,
      city: "munich",
      additional: "app. 297",
      tel: "107464292073",
    },
  ];

  const deliveryList = [
    { desc: "Standard shipping via HERMES", choice: false, price: "4.95€" },
    { desc: "Standard shipping via DHL", choice: false, price: "4.95€" },
  ];

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
          <div className="or_contact_information_wrap">
            <div className="or_contact_information_titel">
              Contact Information
            </div>
            <div className="or_contact_information_content">
              {addressList.map((addressItem) => {
                return (
                  <div className="or_address">
                    <div className="or_address_choice">
                      <input
                        type="radio"
                        value={addressItem.choice}
                        name="choice"
                      />
                    </div>
                    <div className="or_address_content">
                      <div className="or_address_content_up">
                        <div className="or_address_receiver">{addressItem.receiver}</div>
                        <div className="or_address_tel">{addressItem.tel}</div>
                      </div>
                      <div className="or_address_content_middle">
                      <div className="or_address_street">{addressItem.street}</div>
                        <div className="or_address_additional">{addressItem.additional}</div>
                      </div>
                      <div className="or_address_content_bottom">
                      <div className="or_address_postCode">{addressItem.postCode}</div>
                        <div className="or_address_city">{addressItem.city}</div>
                      </div>
                    </div> 
                  </div>
                );
              })}
            </div>
            <div className="or_contact_information_add">Add Address</div>
          </div>
          <div className="or_delivery_wrap">
            <div className="or_delivery_title">Shipping Services</div>
            <div className="or_delivery_content">
              {deliveryList.map((deliveryItem) => {
                return (
                  <div className="or_delivery_desc">
                    <div className="or_standard_shipping_desc_left">
                      <div className="or_shipping_service_choice">
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
                  <div className="or_shipping_service_choice">
                    <input type="radio" value="false" name="choice" />
                  </div>
                  <div className="or_standard_rapid_shipping_wrap">
                    <div className="or_standard_shipping_name">
                      Rapid packaging and shipping (1-2 Working days)
                    </div>
                    <div className="or_standard_shipping_rapid_icon"></div>
                    <div className="or_standard_shipping_rapid_note">
                      <img
                        className="or_information_note"
                        src={require("../../assets/images/information_note.png")}
                      />
                    </div>
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
                    <div className="or_additional_shipping_icon"></div>
                    <div className="or_additional_shipping_note">
                      <img
                        className="or_information_note"
                        src={require("../../assets/images/information_note.png")}
                      />
                    </div>
                  </div>
                </div>
                <div className="or_additional_service_price">1.95€</div>
              </div>
            </div>
          </div>
        </div>

        {/* summary*/}
        <div className="or_content_right">
          {/* summary */}
          <div className="or_summary">Summary</div>
          <div className="or_content_right_up">
            <div className="or_content_right_up_item_price">
              <div className="or_items_count">4 Items</div>
              <div className="or_items_price">11,96€</div>
            </div>
            <div className="or_content_right_up_totalsaving">
              <div className="or_total_saving">Total Savings</div>
              <div className="or_total_saving_value">-2€</div>
            </div>
          </div>
          <div className="or_content_right_middle">
            <div className="or_content_right_middle_subtotal">
              <div className="or_subtotal">Subtotal</div>
              <div className="or_subtotal_value">9,96€</div>
            </div>
            <div className="or_content_right_middle_shipping">
              <div className="or_shipping">Shipping</div>
              <div className="or_shippingl_value">4,95€</div>
            </div>
            <div className="or_content_right_middle__additional_service">
              <div className="or_summary_additional_service">
                Additional Service
              </div>
              <div className="or_summary_additional_servicel_value">1,95€</div>
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
              <div className="or_totalprice_value">16,86€</div>
            </div>
          </div>
          <div className="or_pay">Pay with PayPal</div>
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
