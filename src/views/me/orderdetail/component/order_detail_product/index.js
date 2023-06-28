import React from 'react'
import { Link } from "react-router-dom";
import './index.css'

import ShoppingCartNutri from '../../../../../components/nutri';

function OrderDetailProduct( {orderDetailProduct} ) {
  return (
    <div className='detail-product-wrap'>
        <div className="sc_item_image">
            <Link to={`/product/detail/${orderDetailProduct.product.productID}`}>
                <img className="detail-product-image" src={orderDetailProduct.product.imageUrl}></img>
            </Link>
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