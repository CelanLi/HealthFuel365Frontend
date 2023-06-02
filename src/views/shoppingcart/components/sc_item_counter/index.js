// 引入样式文件
import { useState } from "react";
import "./index.css";

function ScItemCounter({ count = 1, setCount }) {
  const [countValue, setCountValue] = useState(count);

  // input只接受库存量内的数字
  function numberInput(inputValue) {
    // 所有非数字替换成空字符
    const availableValue = inputValue.replace(/[^\d]/g, "");
    setCountValue(availableValue);
    setCount(availableValue);
  }

  // 加减数量
  function changeNumber(type) {
    const realCount = Number(countValue);
    if (type === "+") {
      setCountValue(realCount + 1);
      setCount(realCount + 1);
    } else if (type === "-") {
      if (realCount > 1) {
        setCountValue(realCount - 1);
        setCount(realCount - 1);
      }
    }
  }

  return (
    <div className="sc_item_count_wrap">
      <div className="sc_item_count_minus" onClick={() => changeNumber("-")}>
        -
      </div>
      <div className="sc_item_count_wrap">
        <input
          className="sc_item_count"
          value={countValue}
          onChange={(e) => numberInput(e.target.value)}
          onBlur={(e) => !Number(countValue) && setCountValue(1)}
        />
      </div>
      <div className="sc_item_count_plus" onClick={() => changeNumber("+")}>
        +
      </div>
    </div>
  );
}

export default ScItemCounter;
