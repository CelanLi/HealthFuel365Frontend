import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Category({ setCategory = () => undefined }) {
  // retrieve the selected category from the URL
  const [selectedCategory, setSelectedCategory] = useState(
    window.location.href.split("/")[3].split("#")[1]
  );

  // handle the category change: get the selected category
  const handleCategoryChange = (event) => {
    const { className } = event.target;
    const category = className.split(" ")[1].split("-")[0]; // className contains the category name
    if (selectedCategory === category) {
      // if the same category is clicked again, reset the category to undefined (namely all products)
      setCategory(() => undefined);
      setSelectedCategory(() => undefined);
    } else {
      // update the selected category
      setSelectedCategory(() => category);
      setCategory(() => category);
    }
  };

  return (
    <div className="category-container">
      {/* category 1: staples */}
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
        <p>Staples</p>
      </div>
      {/* category 2: snacks */}
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
      {/* category 3: drinks */}
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
      {/* category 4: flavorings */}
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
      {/* category 5: supplements */}
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

export default Category;