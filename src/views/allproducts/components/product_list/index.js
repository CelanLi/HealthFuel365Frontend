import "./index.css";
import Product from "../../../../components/product";
import { useState, useEffect } from "react";
function ProductList({ productlist = [] }) {
  /* no corresponding product which may occurs when apply filters or input sth. wrong */
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <div className="products-container">
        <h1>Loading...</h1>
      </div>
    );
  } else if (productlist.length === 0) {
    return (
      <div className="products-container">
        <h1>Sorry, there is no product...</h1>
      </div>
    );
  } else
    return (
      <div className="products-container">
        {productlist.map((product) => {
          return (
            <Product
              productID={product.productID}
              productName={product.productName}
              productPrice={product.productPrice}
              imageUrl={product.imageUrl}
              nutriScore={product.nutriScore}
              capacity={product.capacity}
            />
          );
        })}
      </div>
    );
}

export default ProductList;
