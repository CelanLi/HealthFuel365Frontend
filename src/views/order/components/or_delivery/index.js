import { Popover } from "antd";
import { useState } from "react";
import "./index.css";

function OrderDelivery({setorDelivery}) { 
 
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

  const deliveryList = [
    {
      value: "HERMES",
      desc: "Standard shipping via HERMES",
      choice: true,
      price: "4.95€",
    },
    {
      value: "DHL",
      desc: "Standard shipping via DHL",
      choice: false,
      price: "4.95€",
    },
    {
      value: "Rapid",
      desc: "Rapid packaging and shipping (1-2 Working days)",
      choice: false,
      price: "7.95€",
      icon: (
        <>
          <span className="or_standard_shipping_rapid_icon">
            <img
              src={require("../../../../assets/images/rapid_service_icon.png")}
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
                src={require("../../../../assets/images/information_note.png")}
              />
            </span>
          </Popover>
        </>
      ),
    },
  ];

  const [selectedOption, setSelectedOption] = useState("HERMES");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setorDelivery(event.target.value);
  };

  return (
    <>
      <div className="or_delivery_content">
        {deliveryList.map((deliveryItem) => {
          return (
            <div className="or_delivery_desc">
              <div className="or_standard_shipping_desc_left">
                <div className="or_choice">
                  <input
                    type="radio"
                    value={deliveryItem.value}
                    checked={selectedOption === deliveryItem.value}
                    onChange={handleRadioChange}
                    name="deliveryChoice"
                  />
                </div>
                <div className="or_standard_shipping_name">
                  {deliveryItem.desc}
                </div>
                {deliveryItem.icon ? deliveryItem.icon : null}
              </div>
              <div className="or_shipping_service_price">
                {deliveryItem.price}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderDelivery;
