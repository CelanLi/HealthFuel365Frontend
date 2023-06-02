// 依赖
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// 引入样式文件
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import ShoppingCartSummary from "./components/sc_summary";

function Page() {
  // 定义input的value
  const [productList, setProductList] = useState([]);
  const [shoppingCartID, setShoppingCartID] = useState("");

  const [scSummary, setscSummary] = useState({
    itemsCount: 4,
    itemsPrice: "11,96€",
    totalSavings: "-2€",
    subtotal: "9,96€",
  });

  function getProductID(value) {
    console.log(value, shoppingCartID);
     // 向后端发送请求传 shoppingCartID，和productId
  }

  useEffect(() => {
    console.log("ymjj");

    //假设是后端请求来的数据
    const res = {
      shoppingCartID: "1234",
      productList: [
        {
          productID: "p1",
          productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
          productPrice: 2.99,
          productNutri: "C",
          productImage:
            "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
          productBrand: "Davert",
          capacity: 3,
        },
        {
          productID: "p2",
          productName: "Couscous Vollkorn - Davert - 500g",
          productPrice: 12.99,
          productNutri: "A",
          productImage:
            "https://images.openfoodfacts.org/images/products/401/933/930/6109/front_de.6.full.jpg",
          productBrand: "Davert",
          capacity: 5,
        },
      ],
    };
    setProductList(res.productList);
    setShoppingCartID(res.shoppingCartID);
  }, []);

  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      {/* 面包屑 */}
      {/* &lt;代表< */}
      <div className="sc_bread_crumb">
        <Link to="/product">&lt;Continue Shopping</Link>
      </div>

      {/* 主内容 */}
      <div className="sc_content">
        {/* item详情 */}
        <div className="sc_content_left">
          {productList.map((productItem) => {
            return (
              <ShoppingCartItem
                getProductID={getProductID}
                productID={productItem.productID}
                productName={productItem.productName}
                productUnitPrice={productItem.productPrice}
                productImage={productItem.productImage}
                productNutri={productItem.productNutri}
                capacity={productItem.capacity}
              ></ShoppingCartItem>
            );
          })}
        </div>

        {/* summary+note */}
        <div className="sc_content_right">
          {/* summary */}
          <ShoppingCartSummary
            itemsCount={scSummary.itemsCount}
            itemsPrice={scSummary.itemsPrice}
            totalSavings={scSummary.totalSavings}
            subtotal={scSummary.subtotal}
          ></ShoppingCartSummary>

          {/* note */}
          <div className="sc_note">
            <div className="sc_note_payment">
              <div className="sc_note_paypal">We accept</div>
              <div className="sc_note_paypal_logo"></div>
            </div>

            <div className="sc_note_delivery">
              <div className="sc_note_delivery_co">We cooperate</div>
              <div className="sc_note_delivery_logo"></div>
            </div>

            <div className="sc_note_service">
              <div className="sc_note_service_pro">We provide</div>
              <div className="sc_note_service_image"></div>
              <div className="sc_note_as_a_gift">Send as A Gift</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
