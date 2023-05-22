// 引入样式文件
import "./index.css";
import ShoppingCartItem from "./components/shoppingcart_item";
import TopNav from "../components/topnav";

// 依赖
import {Link} from 'react-router-dom'

function Page() {
  return (
    // HTML结构
    <div className="shoppingcart_wrap">
      <TopNav/>
      {/* &lt;代表< */}
      <div className="sc_bread_crumb"> <Link to="/product">&lt;Continue Shopping</Link> </div>
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
