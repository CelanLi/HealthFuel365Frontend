import { Popover } from "antd";

// 引入样式文件
import "./index.css";

function OrderDelivery() {
  const deliveryList = [
    { desc: "Standard shipping via HERMES", choice: false, price: "4.95€" },
    { desc: "Standard shipping via DHL", choice: false, price: "4.95€" },
  ];

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
    <>
      <div className="or_delivery_content">
        {deliveryList.map((deliveryItem) => {
          return (
            <div className="or_delivery_desc">
              <div className="or_standard_shipping_desc_left">
                <div className="or_choice">
                  <input
                    type="radio"
                    value={deliveryItem.choice}
                    name="deliveryChoice"
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
              <input type="radio" value="false" name="deliveryChoice" />
            </div>
            <div className="or_standard_rapid_shipping_wrap">
              <div className="or_standard_shipping_name">
                Rapid packaging and shipping (1-2 Working days)
              </div>
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
            </div>
          </div>
          <div className="or_shipping_service_price">7.95€</div>
        </div>
      </div>
    </>
  );
}

export default OrderDelivery;
