import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import './index.css'
import ShoppingCartNutri from '../../../../../components/nutri';
import DefaultImage from "../../../../../assets/images/logo.png";

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

function OrderDetailProduct( { orderDetailProduct, enable = true }) {
    /* If no image is retrieved from the stored URL, the logo is displayed as a product image */
    const [image, setImage] = useState(orderDetailProduct.product.imageUrl);
    const [imageNotFound, setImageNotFound] = useState(false);
    const handleImageNotFound = () => {
     setImage(DefaultImage);
     setImageNotFound(true);
    };
  return (
    <div className='detail-product-wrap'>
        <div className="sc_item_image">
            <Link to={`/product/detail/${orderDetailProduct.product.productID}`}>
            <img className="sc_item_testimage" src={image} onError={handleImageNotFound}></img>
            </Link>
        </div>
        <div className='detail-product-middle'>
            <div className='detail-product-name'>
            <Link to={`/product/detail/${orderDetailProduct.product.productID}`}>{orderDetailProduct.product.productName}</Link>
            </div>
            <div className='detail-product-text'>
                Brand: {orderDetailProduct.product.productBrand}
            </div>
            <div>
                <ShoppingCartNutri nutri={orderDetailProduct.product.nutriScore}></ShoppingCartNutri>
            </div>
        </div>
        <div className='detail-product-right'>
            <div>
                <div className='detail-product-price'>
                    <div className='detail-product-text'>
                        Unit Price: {orderDetailProduct.product.productPrice}€
                    </div>
                </div>
                <div className='detail-product-price'>
                    <div className='detail-product-text'>
                        Quantity: {orderDetailProduct.quantity}
                    </div>
                </div>
            </div>
            <div className='detail-product-price'>
                <div className='detail-product-total'>
                    Total Price: {orderDetailProduct.quantity * orderDetailProduct.product.productPrice}€
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetailProduct