// 引入样式文件
import './index.css';
import Topnav from "../allproducts/components/topnav"
import Footer from "../allproducts/components/footer"

function Page() {
  return (
    // HTML结构
    <div className="homepage-wrap">
      <Topnav/>
      <div> homepage </div>
      <Footer/>
    </div>
  );
}

export default Page;