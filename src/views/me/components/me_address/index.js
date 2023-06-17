import React from 'react'
import "./index.css"; 

import { addressDelete } from '../../../../../services/userService';

import AddIcon from '../../../../../assets/images/myaccount/icon-address.png'
import PhoneIcon from '../../../../../assets/images/myaccount/icon-phone.png'
import Receiver from '../../../../../assets/images/myaccount/icon-receiver.png'

function MyAddress({ addressList = [] }) {
    // const handleEdit = (e) => {
    //     const addressId = e.target.value;
    //     console.log(addressId)
    //     addressDelete(addressId)
    // }

    const handelDelete = (e) => {
        const addressId = e.target.value;
        console.log(addressId)
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
                                    <div className="myaccount-address-text-1">Address:&nbsp;{addressItem.additional},&nbsp;{addressItem.street},&nbsp;{addressItem.postCode},&nbsp;{addressItem.city}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <div  className="myaccount-button-block">
                                <button className='myaccount-edit' onClick={handleEdit} value={addressItem._id}>Edit</button>
                            </div> */}
                            <div  className="myaccount-button-block">
                                <button className='myaccount-delete' onClick={handelDelete} value={addressItem._id}>Delete</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default MyAddress

