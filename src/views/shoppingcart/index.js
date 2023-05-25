// 依赖
import { Link } from "react-router-dom";
import { useState } from "react";

// 引入样式文件
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import ShoppingCartSummary from "./components/sc_summary";
import TopNav from "../components/topnav";
import Footer from "../components/footer";

function Page() {
  // 定义input的value
  const [productList, setProductList] = useState([
    {
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productUnitPrice: "Unit Price: 2,99€",
    },
    {
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productUnitPrice: "Unit Price: 2,99€",
    },
    {
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productUnitPrice: "Unit Price: 2,99€",
    },
    {
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productUnitPrice: "Unit Price: 2,99€",
    },
    {
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productUnitPrice: "Unit Price: 2,99€",
    },
    {
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productUnitPrice: "Unit Price: 2,99€",
    },
  ]);

  const [summary, setSummary] = useState({
    itemsCount: 4,
  });

  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      {/* 导航条 */}
      <div>
        <TopNav />
      </div>

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
                productName={productItem.productName}
                productUnitPrice={productItem.productUnitPrice}
              ></ShoppingCartItem>
            );
          })}
        </div>

        {/* summary+note */}
        <div className="sc_content_right">
          {/* summary */}
          <ShoppingCartSummary
            itemsCount={summary.itemsCount}
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

      {/*  */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
