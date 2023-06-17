import "./index.css";
import Product from "../../../../components/product";

function ProductList({ productlist = [] }) {
  /* no corresponding product which may occurs when apply filters or input sth. wrong */
  if (productlist.length === 0) {
    return (
      <div className="products-container">
        <h1>Sorry, there is no product...</h1>
      </div>
    );
  } else
    return (
      <div className="products-container">
        {productlist.map((productItem) => {
          return (
            <Product
              productID={productItem.productID}
              productName={productItem.productName}
              productPrice={productItem.productPrice}
              imageUrl={productItem.imageUrl}
              nutriScore={productItem.nutriScore}
            />
          );
        })}
      </div>
    );
}

export default ProductList;
