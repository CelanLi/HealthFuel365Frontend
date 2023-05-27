// 引入样式文件
import "./index.css";

function SortProducts(option) {
  
  return (
    <div className="sort">
      Sort By:
      <div class="select-box">
        <select>
          <option>Nutri-score</option>
          <option>Sort 2</option>
          <option>Sort 3</option>
        </select>
      </div>
    </div>
  );
}

export default SortProducts;
