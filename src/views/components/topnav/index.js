// 引入样式文件
import './index.css';

function Page() {
  return (
    // HTML结构
    <div className="topnav">
      <div className="topnav_slogan"> HealthFule365——Online gas station for your health </div>
      <div className="topnav_logo"/>
      <div className="product_topnav_wrap">
        <div className="left">
          <a href="/homepage">HomePage</a>
          <a className="active" href="/product">All Products</a>
          <a href="/faqs">FAQs</a>
        </div>
        <div className="right">
          <div className="search-container">
            <form>
              <input type="text" placeholder=""/>
              <button type="submit"></button>
            </form>
          </div>  
          <div className="right-icon-container">
            <a href="/shoppingcart" className="shopping_cart"></a>
            <a href="/shoppingcart" className="user"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;