import React from 'react'
import "./index.css";

function OrderProduct({orderProducts}) {
    const displayProductItems = orderProducts.slice(0, 5);

  return (
    <div className='order-product-wrap'>
      {displayProductItems.map((productItem) => (
        <div className='order-product-img'>
            <img key={productItem.product.productID} src={productItem.product.imageUrl} />
        </div>
        
      ))}
      {orderProducts.length > 5 && <span className='order-product-more'>{orderProducts.length - 5} more items ...</span>}
    </div>
  )
}

export default OrderProduct