import React from 'react'
import "./index.css"; 
import AddIcon from '../../../../../assets/images/myaccount/icon-address.png'
import PhoneIcon from '../../../../../assets/images/myaccount/icon-phone.png'
import Receiver from '../../../../../assets/images/myaccount/icon-receiver.png'

function MyAddress({receiver, tel, street, additional, postCode, city}) {
  return (
    <div>
        <div className="myaccount-content">
            <div className="myaccount-content-left">
                <div className="myaccount-content-up">
                        <div className="myaccount-content-up-block">
                            <img src={Receiver} className="myaccount-address-icon"/>
                        <div className="myaccount-address-text-1">Receiver:&nbsp;{receiver}</div>
                    </div>
                    <div className="myaccount-content-up-block">
                        <img src={PhoneIcon} className="myaccount-address-icon"/>
                    <div className="myaccount-address-text-1">Tel:&nbsp;{tel}</div>
                </div>
                </div>
                <div className="myaccount-content-bottom">
                    <img src={AddIcon} className="myaccount-address-icon" />
                    <div className="myaccount-content-bottom-text">
                        <div className="myaccount-address-text-1">Address:&nbsp;{additional},&nbsp;{street},&nbsp;{postCode},&nbsp;{city}</div>
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
    </div>
  )
}

export default MyAddress

