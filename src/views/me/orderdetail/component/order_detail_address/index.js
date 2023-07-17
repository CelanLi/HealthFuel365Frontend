import React from 'react'
import Receiver from '../../../../../assets/images/myaccount/icon-receiver.png'
import PhoneIcon from '../../../../../assets/images/myaccount/icon-phone.png'
import AddIcon from '../../../../../assets/images/myaccount/icon-address.png'

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 1512) + 'px';
        };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);

function OrderAddress({receiver, tel, additionalAddress, street, postCode, city}) {
  return (
    <div>
        <div className="order-detail-address-up">
            <div className="order-detail-address-up-block">
                <img src={Receiver} className="myaccount-address-icon"/>
                <div className="myaccount-order-text">&nbsp;&nbsp;Receiver: {receiver}</div>
            </div>
            <div className="order-detail-address-up-block">
                <img src={PhoneIcon} className="myaccount-address-icon"/>
                <div className="myaccount-order-text">&nbsp;&nbsp;Tel: {tel}</div>
            </div>
        </div>
        <div className="order-detail-address-up">
            <img src={AddIcon} className="myaccount-address-icon" />
            <div className="myaccount-content-bottom-text">
                <div className="myaccount-order-text">&nbsp;&nbsp;Address: {additionalAddress}, {street}, {postCode}, {city}</div>
            </div>
        </div>
    </div>
  )
}

export default OrderAddress