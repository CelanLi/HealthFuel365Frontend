// 引入样式文件
import "./index.css";

function Page() {
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
            <div className="sc_item_nutri">nutri</div>
            <div className="sc_item_count">count</div>
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

export default Page;
