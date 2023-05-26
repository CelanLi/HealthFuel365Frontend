// 引入样式文件
import './index.css';
import Nutri from "../nutri"
import AddToScButton from "../add_to_sc_button"

function ProductComponent({productName, productUnitPrice, productNutri, productPrice, productImage}) {
  return (
    // HTML结构
    <div className="product">
      {/* should link to the corresponding product detail page*/}
        <a href="/product/detail">
          <div className="product-test-img"></div>
          <div className="product-name">
            Hafer Porridge Cup Schokolade - Davert - 65 g
          </div>
        </a>
        <div className="product-other-content">
            <Nutri nutri={productNutri}/>
            <div className="product-right-buttom">
              <div className="product-unitprice">2,99€</div>
              <AddToScButton/>
            </div>
        </div>
    </div>
  );
}
export default ProductComponent;