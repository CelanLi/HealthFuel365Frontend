import "./index.css";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PromoCodeManagement() {
  const [keyWords, setKeyWords] = useState("");
  // used to navigate to the desired URL
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyWords.trim()) {
      navigate("/product?search=" + keyWords);
    }
  };

  return (
    <div className="promocode_manage_wrap">
      {/* &lt;represent< */}
      <div className="pc_bread_crumb">Product Management ＞</div>
      <div className="pc_top">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={keyWords}
              onChange={(e) => setKeyWords(e.target.value)}
              placeholder=""
            />
            <button type="submit" />
          </form>
        </div>
        <div className="pc_add_code">+ Create</div>
      </div>

      {/* main content */}
      <div className="pc_content"></div>
    </div>
  );
}

export default PromoCodeManagement;
