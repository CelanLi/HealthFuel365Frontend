import React from 'react'
import { message } from 'antd';
import "./index.css"; 
import { useNavigate } from 'react-router-dom';

import { addressDelete } from '../../../../services/userService';

import AddIcon from '../../../../assets/images/myaccount/icon-address.png'
import PhoneIcon from '../../../../assets/images/myaccount/icon-phone.png'
import Receiver from '../../../../assets/images/myaccount/icon-receiver.png'

function MyAddress({ addressList = [] }) {
    // const handleEdit = (e) => {
    //     const addressId = e.target.value;
    //     console.log(addressId)
    //     addressDelete(addressId)
    // }
    const handelDelete = (e) => {
        const addressId = e.target.value;
        console.log(addressId)
        try {
            const successFlag = addressDelete(addressId);
            console.log("successFlag",successFlag)
            
            if (successFlag) {
                // reload the page
                window.location.reload();
            }
        } catch (error) {
            message.error(`Delete Address failed: ${error.response.data.message}`);
        }
        addressDelete(addressId)
    }

    return(
        <div>
            {addressList.map((addressItem) => {
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
                                    <div className="myaccount-address-text-1">Address:&nbsp;{addressItem.additional}&nbsp;{addressItem.street},&nbsp;{addressItem.postCode},&nbsp;{addressItem.city}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='myaccount-delete' onClick={handelDelete} value={addressItem._id}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default MyAddress

