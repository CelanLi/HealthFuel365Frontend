//ANTD components
import React, { useState } from "react";
import { Modal, Input, Space, message } from "antd";

// import css file
import "./index.css";

//import service
import { addressAdd } from "../../../../services/userService";

function OrderAddAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [telStateValue, setTelStateValue] = useState("");
  const [telValue, seTelValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const [streetNoValue, setStreetNoValue] = useState("");
  const [additionalAddressValue, setAdditionalAddressValue] = useState("");
  const [postCodeValue, setPostCodeValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (
      !firstNameValue ||
      !lastNameValue ||
      !telStateValue ||
      !telValue ||
      !streetValue ||
      !streetNoValue ||
      !postCodeValue ||
      !cityValue
    ) {
      messageApi.open({
        type: "error",
        content: "Please fill in all necessary fields",
      });
      return;
    } 
    addressAdd({
        street: streetValue + streetNoValue,
        postCode: postCodeValue,
        city: cityValue,
        additionalAddress: additionalAddressValue,
        tel: telValue,
        receiver: firstNameValue + lastNameValue,
    })
    // console.log(firstNameValue);
    // console.log(lastNameValue);
    // console.log(telStateValue);
    // console.log(telValue);
    // console.log(streetValue);
    // console.log(streetNoValue);
    // console.log(additionalAddressValue);
    // console.log(postCodeValue);
    // console.log(cityValue);

    setIsModalOpen(false);

    //refresh page after add address
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="or_add_address">
      {contextHolder}
      <div
        className="or_contact_information_add"
        type="primary"
        onClick={showModal}
      >
        Add Address
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        width="800px"
      >
        <div className="or_add_address_titel">New Address</div>
        <div className="or_add_address_content_up">
          <div className="or_add_address_receiver">
            <div className="or_add_address_receiver_attribute"><sup>*</sup>Receiver:</div>
            <div className="or_add_address_receiver_input">
              <Input
                className="or_add_address_first_name"
                placeholder="First Name"
                value={firstNameValue}
                onChange={(e) => setFirstNameValue(e.target.value)}
              />
              <Input
                className="or_add_address_last_name"
                placeholder="Last Name"
                value={lastNameValue}
                onChange={(e) => setLastNameValue(e.target.value)}
              />
            </div>
          </div>
          <div className="or_add_address_tel">
            <div className="or_add_address_tel_attribute"><sup>*</sup>Tel.:</div>
            <div className="or_add_address_tel_input">
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Input
                    style={{ width: "20%" }}
                    defaultValue="0571"
                    value={telStateValue}
                    onChange={(e) => setTelStateValue(e.target.value)}
                  />
                  <Input
                    style={{ width: "80%" }}
                    defaultValue="26888888"
                    value={telValue}
                    onChange={(e) => seTelValue(e.target.value)}
                  />
                </Space.Compact>
              </Space>
            </div>
          </div>
        </div>
        <div className="or_add_address_content_middle">
          <div className="or_add_address_street">
            <div className="or_add_address_street_attribute"><sup>*</sup>Street:</div>
            <div className="or_add_address_street_input">
              <Input
                className="or_add_address_street"
                placeholder="Street"
                value={streetValue}
                onChange={(e) => setStreetValue(e.target.value)}
              />
              <Input
                className="or_add_address_street_no"
                placeholder="No."
                value={streetNoValue}
                onChange={(e) => setStreetNoValue(e.target.value)}
              />
            </div>
          </div>
          <div className="or_add_address_additional">
            <div className="or_add_address_additional_attribute">
              Additional Address:
            </div>
            <Input
              className="or_add_address_additional_input"
              value={additionalAddressValue}
              onChange={(e) => setAdditionalAddressValue(e.target.value)}
            />
          </div>
        </div>
        <div className="or_add_address_content_bottom">
          <div className="or_add_address_postCode">
            <div className="or_add_address_postCode_attribute"><sup>*</sup>PostCode:</div>
            <Input
              className="or_add_address_postCode_input"
              value={postCodeValue}
              onChange={(e) => setPostCodeValue(e.target.value)}
            />
          </div>
          <div className="or_add_address_city">
            <div className="or_add_address_city_attribute"><sup>*</sup>City:</div>
            <Input
              className="or_add_address_city_input"
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default OrderAddAddress;
