// 引入样式文件
import "./index.css"; 

function OrderAddress({receiver, tel, street, additional, postCode, city}) {
  return (
    <>
      <div className="or_address">
        <div className="or_choice">
          <input type="radio" value={false} name="choice" />
        </div>
        <div className="or_address_content">
          <div className="or_address_content_up">
            <div className="or_address_receiver">{receiver}</div>
            <div className="or_address_tel">{tel}</div>
          </div>
          <div className="or_address_content_middle">
            <div className="or_address_street">{street}</div>
            <div className="or_address_additional">{additional}</div>
          </div>
          <div className="or_address_content_bottom">
            <div className="or_address_postCode">{postCode}</div>
            <div className="or_address_city">{city}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderAddress;
