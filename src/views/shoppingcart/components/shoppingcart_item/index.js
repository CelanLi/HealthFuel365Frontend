// 引入样式文件
import "./index.css";
import ShoppingCartNutri from "../shoppingcart_nutri";
import ScItemCounter from "../sc_item_counter";

function ShoppingCartItem() {
  return (
    <div className="sc_item">
      <div className="sc_item_image">
        <img
          className="sc_item_testimage"
          src="https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg"
        ></img>
      </div>
      <div className="sc_item_content">
        <div className="sc_item_content_left">
          <div className="sc_item_name">
            Hafer Porridge Cup Schokolade - Davert - 65 g
          </div>
          <div className="sc_item_unitprice">Unit Price: 2,99€</div>
          <div className="sc_item_content_leftbottom">
            <div className="sc_item_nutri">
              <ShoppingCartNutri nutri='C'></ShoppingCartNutri>
            </div>
            <div className="sc_item_count"><ScItemCounter></ScItemCounter></div>
          </div>
        </div>
        <div className="sc_item_content_right">
          <div className="sc_item_remove">Remove</div>
          <div className="sc_item_price">2,99€</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
