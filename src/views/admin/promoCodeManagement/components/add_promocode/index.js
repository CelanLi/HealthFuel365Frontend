//ANTD components
import React, { useState } from "react";
import { Modal, Input, message, InputNumber, Space, DatePicker } from "antd";

// import css file
import "./index.css";

//import service
import { addPromoCode } from "../../../../../services/adminService";
import { configConsumerProps } from "antd/es/config-provider";

function AddPromoCode({ getlist }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [codeValue, setCodeValue] = useState("");
  const [expirationDateValue, setExpirationDateValue] = useState("");
  const [discountRateValue, setDiscountRateValue] = useState("80");
  const [minThresholdValue, setMinThresholdValue] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if ((discountRateValue === 0) | (discountRateValue === 100)) {
      messageApi.open({
        type: "error",
        content: "Discount Rate must between 1-99%",
      });
      return;
    } else if (
      !codeValue ||
      !expirationDateValue ||
      !discountRateValue ||
      !minThresholdValue
    ) {
      messageApi.open({
        type: "error",
        content: "Please fill in all necessary fields",
      });
      return;
    } else if (isNaN(minThresholdValue)) {
      messageApi.open({
        type: "error",
        content: "Min Threshold must be number",
      });
      return;
    }
    const res = await addPromoCode({
      code: codeValue,
      expirationDate: expirationDateValue,
      discountRate: discountRateValue,
      minThreshold: minThresholdValue,
    });

    if (res.code !== 0) {
      messageApi.open({
        type: "error",
        content: res.message,
        duration: 3,
      });
    }

    setTimeout(() => {
      setIsModalOpen(false);
      getlist();
    }, 800);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeNumber = (e) => {
    setDiscountRateValue(e);
  };

  const onChangeDate = (date, dateString) => {
    setExpirationDateValue(date);
  };

  return (
    <div className="pc_add">
      {contextHolder}
      <div
        className="pc_promocode_add_buttom"
        type="primary"
        onClick={showModal}
      >
        + Create
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        width="600px"
        wrapClassName="pc_add_promocode_model"
      >
        <div className="pc_add_promocode_titel">New PromoCode</div>
        <div className="pc_add_promocode_name">
          <div className="pc_add_promocode_name_attribute">
            <sup>*</sup>PromoCode Name:
          </div>
          <Input
            className="pc_add_promocode_name_input"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
          />
        </div>
        <div className="pc_add_promocode_expiration_date">
          <div className="pc_add_promocode_expiration_date_attribute">
            <sup>*</sup>Expiration Date:
          </div>
          <Space
            className="pc_add_promocode_expiration_date_input"
            direction="vertical"
          >
            <DatePicker value={expirationDateValue} onChange={onChangeDate} />
          </Space>
        </div>
        <div className="pc_add_promocode_discount_rate">
          <div className="pc_add_promocode_discount_rate_attribute">
            <sup>*</sup>Discount Rate:
          </div>
          <Space className="pc_add_promocode_discount_rate_input">
            <InputNumber
              defaultValue={80}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace("%", "")}
              onChange={onChangeNumber}
              value={discountRateValue}
            />
          </Space>
        </div>
        <div className="pc_add_promocode_min_threshold">
          <div className="pc_add_promocode_min_threshold_attribute">
            <sup>*</sup>Min Threshold:
          </div>
          <Input
            className="pc_add_promocode_min_threshold_input"
            value={minThresholdValue}
            onChange={(e) => setMinThresholdValue(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default AddPromoCode;
