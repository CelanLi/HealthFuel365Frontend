import "./index.css";
import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Input, List } from 'antd';

import Topnav from "../../components/topnav";
import Footer from "../../components/footer";

import User from '../../../assets/images/myaccount/tax-inspector.png'
import AddIcon from '../../../assets/images/myaccount/icon-address.png'
import PhoneIcon from '../../../assets/images/myaccount/icon-phone.png'
import Receiver from '../../../assets/images/myaccount/icon-receiver.png'
import Plus from '../../../assets/images/myaccount/icon-plus.png'
import HealthGoal from '../../../assets/images/myaccount/icon-health-goal.png'
import DietType from '../../../assets/images/myaccount/icon-diet-type.png'
import Preference from '../../../assets/images/myaccount/icon-preference.png'


function App() {
  const userAccount = [
    {
      username: "Heinz",
      email: "Heinz1973@gmail.com",
    },
  ];

  const addressList = [
    {
      choice: false,
      receiver: "Camille Li",
      street: "street 53",
      postCode: 12345,
      city: "Munich",
      additional: "app. 254",
      tel: "134678",
    },
    {
      choice: false,
      receiver: "Lily Y",
      street: "street 443",
      postCode: 73743,
      city: "Munich",
      additional: "app. 297",
      tel: "107464292073",
    },
  ];

  const userProfile = [
    {
      goal: "I want to keep a healthy diet.",
      typeOfEater: "Vegan",
      dietaryPreference: [
        "low in fat",
        "I prefer foods with Nutri-Score no less than C",
      ],
    },
  ];

  const orderList = [
    {
      id: "123456",
      date: "2023-05-01",
      totalPrice: 25,
      status: "delivered",
    },
    {
      id: "123457",
      date: "2023-05-02",
      totalPrice: 50,
      status: "not delivered yet",
    },
  ];

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
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [value, setValue] = useState(0);
  const className = (baseName, isSelected) =>
    (isSelected ? [baseName].concat("selected") : [baseName]).join(" ");

  return (
    <div className="myaccount-page">
      <div className="myaccount-wrap">
        <div className="myaccount-nav">
          <div className="myaccount-information">
            {userAccount.map((user) => {
              return (
                <div className="myaccount-information">
                  <img src={User} className="myaccount-avatar" />
                  <div className="myaccount-information-column">
                    <p className="myaccount-userinfo">{user.username}</p>
                    {/* <p className='myaccount-userinfo'>{user.email}</p> */}
                  </div>
                </div>
              );
            })}
          </div>


      <div className="myaccount-tablist">
        <div className={className('tab-list-item', value === 0)} onClick={() => setValue(0)}>
          <div className='myaccount-nav-tab'>
            <p className='myaccount-nav-title'>Address Management</p>
          </div>
        </div>

            <hr className="line" />

            <div
              className={className("tab-list-item", value === 1)}
              onClick={() => setValue(1)}
            >
              <div className="myaccount-nav-tab">
                <p className="myaccount-nav-title">My Profile</p>
              </div>
            </div>

            <hr className="line" />

            <div
              className={className("tab-list-item", value === 2)}
              onClick={() => setValue(2)}
            >
              <div className="myaccount-nav-tab">
                <p className="myaccount-nav-title">My Orders</p>
              </div>
            </div>

            <hr className="line" />

            <div className="myaccount-nav-tab">
              <p className="myaccount-nav-title">Log Out</p>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div className='myaccount-body'>

      <div className="tabpanels">
      {value === 0 && <div className="tab-panel-item">
        <div className='myaccount-address'>
          {/* the title of block */}
          <div className='myaccount-title'>
            <p className='myaccount-title-1'>Address Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='myaccount-title-2'>{">>>"}</p>
          </div>

          <div className='myaccount-current-address'>
            {addressList.map((addressItem => {
              return(
                <div className="myaccount-content">
                  <div className="myaccount-content-left">
                    <div className="myaccount-content-up">
                      <div className="myaccount-content-up-block">
                        <img src={Receiver} className="myaccount-address-icon"/>
                        <div className="myaccount-address-text-1">Receiver:&nbsp;{addressItem.receiver}</div>
                      </div>
                      <div className="myaccount-content-up-block">
                        <img src={PhoneIcon} className="myaccount-address-icon"/>
                        <div className="myaccount-address-text-1">Tel:&nbsp;{addressItem.tel}</div>
                      </div>
                      
                    </div>
                    <div className="myaccount-content-bottom">
                      <img src={AddIcon} className="myaccount-address-icon" />
                      <div className="myaccount-content-bottom-text">
                        <div className="myaccount-address-text-1">Address:&nbsp;{addressItem.additional},&nbsp;{addressItem.street},&nbsp;{addressItem.postCode},&nbsp;{addressItem.city}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div  className="myaccount-button-block">
                      <button className='myaccount-edit'>Edit</button>
                    </div>
                    <div  className="myaccount-button-block">
                      <button className='myaccount-delete'>Delete</button>
                    </div>
                  </div>
                </div>

              )
            }))}

            
          </div>

          <div className='myaccount-add-address'>
            <button onClick={showModal} className='myaccount-add-address-button'>
              <img src={Plus} className="myaccount-address-icon" />
              &nbsp;&nbsp;Add a new address
            </button>
            <Modal className='myaccount-add-address-panel' title="New Address" 
            open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
              <Form className='myaccount-add-address-form'
                labelCol={{span: 5,}}
                wrapperCol={{span: 16,}}
                style={{maxWidth: 600,marginTop: 50}}
                initialValues={{remember: true,}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Receiver"
                  name="receiver"
                  rules={[
                    {
                      required: true,
                      message: 'Please input receiver name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your city!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Street"
                  name="street"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your street!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Post Code"
                  name="postCode"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your postcode!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Tel"
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your tel number!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="other info"
                  name="additional"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 10,
                    span: 16,
                  }}
                >
                  <Button htmlType="submit" className='myaccount-submit'>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>}

      {value === 1 && <div className="tab-panel-item">
        <div className='myaccount-profile'>
        {/* the title of block */}
        <div className='myaccount-title'>
          <p className='myaccount-title-1'>My Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className='myaccount-title-2'>{">>>"}</p>
        </div>

        <div className='myaccount-profile'>
          {userProfile.map((profileItem => {
            return(
              <div className='myaccount-profile-block'>
                <div className='myaccount-profile-block-1'>
                  <img src={HealthGoal} className="myaccount-address-icon"/>
                  <div className="myaccount-address-text-1">My Health Goal:&nbsp;{profileItem.goal}</div>
                </div>
                <div className='myaccount-profile-block-1'>
                  <img src={DietType} className="myaccount-address-icon"/>
                  <div className="myaccount-address-text-1">My Diet Type:&nbsp;{profileItem.typeOfEater}</div>
                </div>
                <div className='myaccount-profile-block-2'>
                  <div className='myaccount-profile-block-3'>
                    <img src={Preference} className="myaccount-address-icon"/>
                    <div className="myaccount-address-text-1">My Dietary Preference:&nbsp;</div>
                  </div>
                  <div className="myaccount-preference-list">
                    <List size="small"
                      dataSource={profileItem.dietaryPreference}
                      renderItem={(preference) => (
                        <List.Item>
                          <div className="myaccount-address-text-1">{preference}</div>
                        </List.Item>
                      )}
                    />
                  </div>

                </div>
              </div>

            )
          }))}

        </div>
        <button className='myaccount-edit'>Edit</button>
      </div>
      </div>}

      {value === 2 && <div className="tab-panel-item">
        <div className='myaccount-orders'>
          {/* the title of block */}
          <div className='myaccount-title'>
            <p className='myaccount-title-1'>My Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='myaccount-title-2'>{">>>"}</p>
          </div>
          {orderList.map(orderItem => {
            return(
              <div className="myaccount-order">
                  <div className='myaccount-title'>
                    <p className='myaccount-title-3'>Order ID:</p>
                    <p className='myaccount-title-3'>{orderItem.id}</p>
                  </div>
                  <div className='myaccount-title'>
                    <p className='myaccount-title-3'>Order Date:</p>
                    <p className='myaccount-title-3'>{orderItem.date}</p>
                  </div>
                  <div className='myaccount-title'>
                    <p className='myaccount-title-3'>Total Price:</p>
                    <p className='myaccount-title-3'>{orderItem.totalPrice}</p>
                  </div>
                  <div className='myaccount-title'>
                    <p className='myaccount-title-3'>Order Status:</p>
                    <p className='myaccount-title-3'>{orderItem.status}</p>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
