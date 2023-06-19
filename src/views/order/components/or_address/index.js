import "./index.css";
import React from "react";
import "./index.css";
import { useEffect, useState } from "react";

import AddIcon from "../../../../assets/images/myaccount/icon-address.png";
import PhoneIcon from "../../../../assets/images/myaccount/icon-phone.png";
import Receiver from "../../../../assets/images/myaccount/icon-receiver.png";

function OrderAddress({ addressList = [], addressChoice }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    addressChoice(event.target.value);
  };

  useEffect(() => {
    if (addressList.length > 0) {
      setSelectedOption(addressList[0].id);
    }
  }, []);

  return (
    <div>
      {addressList.map((addressItem) => {
        return (
          <div className="or_address_info">
            <div className="or_choice">
              <input
                type="radio"
                value={addressItem.id}
                checked={selectedOption === addressItem.id}
                onChange={handleRadioChange}
                name="choice"
              />
            </div>
            <div className="myaccount-content">
              <div className="myaccount-content-left">
                <div className="myaccount-content-up">
                  <div className="myaccount-content-up-block">
                    <img src={Receiver} className="myaccount-address-icon" />
                    <div className="myaccount-address-text-1">
                      Receiver:&nbsp;{addressItem.receiver}
                    </div>
                  </div>
                  <div className="myaccount-content-up-block">
                    <img src={PhoneIcon} className="myaccount-address-icon" />
                    <div className="myaccount-address-text-1">
                      Tel:&nbsp;{addressItem.tel}
                    </div>
                  </div>
                </div>
                <div className="myaccount-content-bottom">
                  <img src={AddIcon} className="myaccount-address-icon" />
                  <div className="myaccount-content-bottom-text">
                    <div className="myaccount-address-text-1">
                      Address:&nbsp;{addressItem.additional},&nbsp;
                      {addressItem.street},&nbsp;{addressItem.postCode},&nbsp;
                      {addressItem.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderAddress;
