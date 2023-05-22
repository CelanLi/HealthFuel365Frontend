// 引入样式文件
import './index.css';
function Page() {
  return (
    // HTML结构
   <div className="category-container">
    <div className="category-icon">
      <a href="#" className="staple"></a>
      <a href="#" className="snacks"></a>
      <a href="#" className="drinks"></a>
      <a href="#" className="snacks"></a>
      <a href="#" className="snacks"></a>
    </div>
    <div className="category-text">
      <p>Staple</p>
      <p>Snacks</p>
      <p>Drinks</p>
      <p>Xxxx</p>
      <p>Xxxx</p>
    </div>
  </div>
  );
}
export default Page;