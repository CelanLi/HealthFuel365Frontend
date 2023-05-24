// 引入样式文件
import './index.css';
import Topnav from "../components/topnav";
import Category from "../components/category"
import Footer from "../components/footer"
import Product from "../components/product"

function Page() {
  return (
    // HTML结构
    <div className="allproductspage-wrap"> 
      <Topnav/>

      <div className="content-container">
        <div className="content-left">
        sort and filter
        </div>

        <div className="content-right">  
          <Category/>
          <div className="products-container">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

           
          </div>

        </div>
      </div>
    <Footer/>
    </div>
  );
}
export default Page;