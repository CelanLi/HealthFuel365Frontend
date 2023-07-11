import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import './index.css'
import ShoppingCartNutri from '../../../../../components/nutri';
import DefaultImage from "../../../../../assets/images/logo.png";

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
            {enable ? (
                <Link to={`/product/detail/${orderDetailProduct.product.productID}`}>
                    <img className="detail-product-image" 
                        src={image}
                        onError={handleImageNotFound}
                    ></img>
                </Link>): (
                    <img className="detail-product-image" 
                        src={image}
                        onError={handleImageNotFound}
                    ></img>
                )
            }    
        </div>
        <div className='detail-product-middle'>
            <div className='detail-product-name'>
                {orderDetailProduct.product.productName}
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