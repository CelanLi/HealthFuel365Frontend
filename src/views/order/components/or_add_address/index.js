//ANTD components
import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";

// 引入样式文件
import "./index.css";

function OrderAddAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="or_add_address">
      <Button
        className="or_contact_information_add"
        type="primary"
        onClick={showModal}
      >
        Add Address
      </Button>
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
            <div className="or_add_address_receiver_attribute">Receiver:</div>
            <div className="or_add_address_receiver_input">
              <Input
                className="or_add_address_first_name"
                placeholder="First Name"
              />
              <Input
                className="or_add_address_last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="or_add_address_tel">
            <div className="or_add_address_tel_attribute">Tel.:</div>
            <div className="or_add_address_tel_input">
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Input style={{ width: "20%" }} defaultValue="0571" />
                  <Input style={{ width: "80%" }} defaultValue="26888888" />
                </Space.Compact>
              </Space>
            </div>
          </div>
        </div>
        <div className="or_add_address_content_middle">
          <div className="or_add_address_street">
            <div className="or_add_address_street_attribute">Street:</div>
            <div className="or_add_address_street_input">
              <Input className="or_add_address_street" placeholder="Street" />
              <Input className="or_add_address_street_no" placeholder="No." />
            </div>
          </div>
          <div className="or_add_address_additional">
            <div className="or_add_address_additional_attribute">
              Additional Address:
            </div>
            <Input
                className="or_add_address_additional_input" 
              />
          </div>
        </div>
        <div className="or_add_address_content_bottom">
          <div className="or_add_address_postCode">
            <div className="or_add_address_postCode_attribute">PostCode:</div>
            <Input
                className="or_add_address_postCode_input" 
              />
          </div>
          <div className="or_add_address_city">
            <div className="or_add_address_city_attribute">City:</div>
            <Input
                className="or_add_address_city_input" 
              />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default OrderAddAddress;
