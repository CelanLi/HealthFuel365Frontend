// 引入样式文件
import { useState } from "react";
import "./index.css";

function ScItemCounter({ count = 1 }) {
  const [countValue, setCountValue] = useState(count);

  // input只接受库存量内的数字
  function numberInput(inputValue) {
    // 所有非数字替换成空字符
    const availableValue = inputValue.replace(/[^\d]/g, "");
    setCountValue(availableValue);
  }

  // 加减数量
  function changeNumber(type) {
    if (type === "+") {
      setCountValue(countValue + 1);
    } else if (type === "-") {
      if (countValue > 1) {
        setCountValue(countValue - 1);
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
        {/* test需删除 */}
        {countValue}
      </div>
      <div className="sc_item_count_plus" onClick={() => changeNumber("+")}>
        +
      </div>
    </div>
  );
}

export default ScItemCounter;
