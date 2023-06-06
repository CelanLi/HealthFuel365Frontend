// 引入样式文件
import "./index.css";
import React, {useEffect, useState } from "react";

function SortProducts({sort="1", setSort }) {
  //const [selectedSort, setSelectedSort] = useState("1");
  const [selectedSort, setSelectedSort] = useState(sort);
  /* now used to test*/
  useEffect(() => {console.log("sort component: "+selectedSort);}, [selectedSort]);

  const handleSortChange = (event)=>{
    const {value} = event.target;
    setSelectedSort(() => value);
    setSort(() => value);
  };

  return (
    <div className="sort">
      Sort By:
      <div class="select-box">
        <select id="sort" onChange={handleSortChange}>
          <option value="1">Nutri-score</option>
          <option value="2">Sort 2</option>
          <option value="3">Sort 3</option>
        </select>
      </div>
    </div>
  );
}

export default SortProducts;
