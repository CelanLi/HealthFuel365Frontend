// 引入样式文件
import './index.css';
import Nutri from "../nutri"
import AddToScButton from "../add_to_sc_button"

function ProductComponent({productID, productName="name", productPrice, productNutri, productImage}) {
  const router_path = "/product/detail/"+productID
  return (
    // HTML结构
    <div className="product">
      {/* should link to the corresponding product detail page*/}
        <a href={router_path}>
          <div className="product-img">
            <img src={productImage}/>
          </div>
          <div className="product-name">
            {productName}
          </div>
        </a>
        <div className="product-other-content">
            <Nutri nutri={productNutri}/>
            <div className="product-right-buttom">
              <div className="product-unitprice">{productPrice}€</div>
              <AddToScButton/>
            </div>
        </div>
    </div>
  );
}
export default ProductComponent;