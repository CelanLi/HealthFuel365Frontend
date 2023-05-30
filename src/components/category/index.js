// 引入样式文件
import './index.css';
import { Link } from "react-router-dom";

function Page() {
  return (
    // HTML结构
   <div className="category-container">
    <div className="category-icons">
      <Link to="#"  className="category-icon staple"/>
      <Link to="#" className="category-icon snacks"/>
      <Link to="#" className="category-icon drinks"/>
      <Link to="#" className="category-icon snacks"/>
      <Link to="#" className="category-icon snacks"/>
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