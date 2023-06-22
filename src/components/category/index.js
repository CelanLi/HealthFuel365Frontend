// 引入样式文件
import "./index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Page({ setCategory = () => undefined }) {
  const [selectedCategory, setSelectedCategory] = useState(
    window.location.href.split("/")[3].split("#")[1]
  );
  useEffect(() => {
    console.log("category component: " + selectedCategory);
  }, [selectedCategory]);
  const handleCategoryChange = (event) => {
    const { className } = event.target;
    const category = className.split(" ")[1].split("-")[0];
    if (selectedCategory === category) {
      setCategory(() => undefined);
      setSelectedCategory(() => undefined);
    } else {
      setSelectedCategory(() => category);
      setCategory(() => category);
    }
  };
  /*
  const resetCategory = () => {
    if (window.location.href.split("/")[3]==="product") {
      setCategory(() => undefined);
      setSelectedCategory(() => undefined);
    }
  }
  useEffect(() => {resetCategory()},[window.location.href]);
  */

  return (
    <div className="category-container">
      <div className="category">
        <div className="category-icon">
          <Link
            to={selectedCategory === "staple" ? "/product" : "/product#staple"}
            className={
              selectedCategory === "staple"
                ? "category-icon staple-chosen"
                : "category-icon staple-non-chosen"
            }
            onClick={handleCategoryChange}
          />
        </div>
        <p>Staple</p>
      </div>
      <div className="category">
        <div className="category-icon">
          <Link
            to={selectedCategory === "snacks" ? "/product" : "/product#snacks"}
            className={
              selectedCategory === "snacks"
                ? "category-icon snacks-chosen"
                : "category-icon snacks-non-chosen"
            }
            onClick={handleCategoryChange}
          />
        </div>
        <p>Snacks</p>
      </div>
      <div className="category">
        <div className="category-icon">
          <Link
            to={selectedCategory === "drinks" ? "/product" : "/product#drinks"}
            className={
              selectedCategory === "drinks"
                ? "category-icon drinks-chosen"
                : "category-icon drinks-non-chosen"
            }
            onClick={handleCategoryChange}
          />
        </div>
        <p>Drinks</p>
      </div>
      <div className="category">
        <div className="category-icon">
          <Link to={selectedCategory === "flavorings" ? "/product" : "/product#flavorings"}
            className={
              selectedCategory === "flavorings"
                ? "category-icon flavorings-chosen"
                : "category-icon flavorings-non-chosen"
            }
            onClick={handleCategoryChange}
          />
        </div>
        <p>Flavorings</p>
      </div>
      <div className="category">
        <div className="category-icon">
          <Link to={selectedCategory === "supplements" ? "/product" : "/product#supplements"}
            className={
              selectedCategory === "supplements"
                ? "category-icon supplements-chosen"
                : "category-icon supplements-non-chosen"
            }
            onClick={handleCategoryChange}
          />
        </div>
        <p>Supplements</p>
      </div>
    </div>
  );
}

export default Page;
