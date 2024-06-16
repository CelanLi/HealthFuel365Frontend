import { useState } from "react";
import "./index.css";
import { message } from "antd";

function ScItemCounter({ count = 1, setCount, maxCapacity }) {
  const [countValue, setCountValue] = useState(count);
  const [capacity, setCapacity] = useState(maxCapacity);
  const [messageApi, contextHolder] = message.useMessage();

  // input only accept the count below capacity
  function numberInput(inputValue) {
    const availableValue = inputValue.replace(/[^\d]/g, "");
    setCountValue(Math.min(availableValue, capacity));
    setCount(Math.min(availableValue, capacity));
    if (availableValue > capacity) {
      capacityTipp(capacity);
    } 
  }

  // manage count
  function changeNumber(type) {
    const realCount = Number(countValue);
    if (type === "+") { 
      if (realCount + 1 > capacity) {
        capacityTipp(capacity);
        return;
      }
      setCountValue(realCount + 1);
      setCount(realCount + 1);
    } else if (type === "-") {
      if (realCount > 1) {
        setCountValue(realCount - 1);
        setCount(realCount - 1);
      }
    }
  }

  function capacityTipp(capacity) {
    messageApi.open({
      type: "error",
      content: "Sorry, there are only " + capacity + " Items available.",
      duration: 1,
    });
  }

  return (
    <div className="sc_item_count_wrap">
      {contextHolder}
      <div className="sc_item_count_minus" onClick={() => changeNumber("-")}>
        -
      </div>
      <div className="sc_item_count_wrap">
        <input
          className="sc_item_count"
          value={countValue}
          onChange={(e) => numberInput(e.target.value)}
          onBlur={(e) => !Number(countValue) && numberInput("1")}
        />
      </div>
      <div className="sc_item_count_plus" onClick={() => changeNumber("+")}>
        +
      </div>
    </div>
  );
}

export default ScItemCounter;
