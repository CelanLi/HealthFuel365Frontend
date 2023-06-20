import "./index.css";
import Product from "../../../../components/product";

function ProductList({ productlist = [], isLoading }) {
  if (isLoading) {
    return (
      <div className="products-container">
        <div className="center">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  } else if (productlist.length === 0) { // no corresponding product which may occurs when apply filters or input sth. wrong 
    return (
      <div className="products-container">
        <div className="center">
          <h1>Sorry, there is no product...</h1>
        </div>
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
