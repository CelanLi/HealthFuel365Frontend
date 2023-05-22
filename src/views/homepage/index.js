// 引入样式文件
import './index.css';
import Topnav from "../components/topnav"
import Footer from "../components/footer"

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