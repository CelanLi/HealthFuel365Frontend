import React from 'react'
import "./index.css";
import DefaultImage from "../../../../assets/images/logo.png";

function OrderProduct({orderProducts}) {
  const displayProductItems = orderProducts.slice(0, 5);

  return (
    <div className='order-product-wrap' style={{ display: 'flex', flexWrap: 'wrap' }}>
      {displayProductItems.map((productItem) => (
        <div className='order-product-img' key={productItem.product.productID}>
            <img key={productItem.product.productID} 
                 src={productItem.product.imageUrl}
                 onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DefaultImage;
                }} />
        </div>
        
      ))}
      {orderProducts.length > 5 && <span className='order-product-more'>{orderProducts.length - 5} more items ...</span>}
    </div>
  )
}

export default OrderProduct