// 引入样式文件
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import TopNav from "../allproducts/components/topnav";

function Page() {
  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      <TopNav/>
      {/* &lt;代表< */}
      <div className="sc_bread_crumb"> &lt;Continue Shopping </div>
      <div className="sc_content">
        <div className="sc_content_left">
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
          <ShoppingCartItem></ShoppingCartItem>
        </div>
        <div className="sc_content_right">rr</div>
      </div>
    </div>
  );
}

export default Page;
