import { Popover } from "antd";

// 引入样式文件
import "./index.css";

function OrderAdditionService() {
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

  return (
    <>
      <div className="or_additional_service">
        <div className="or_additional_service_title">Additional Service</div>
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
                <img src={require("../../../../assets/images/gift_service.png")} />
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
                    src={require("../../../../assets/images/information_note.png")}
                  />
                </span>
              </Popover>
            </div>
          </div>
          <div className="or_additional_service_price">1.95€</div>
        </div>
      </div>
    </>
  );
}

export default OrderAdditionService;
