import "./index.css";
import { useState } from "react";
import Product from "../../../../components/product";
import { LoadingScreen } from "../../../../components/loading";
import { getAlternative } from "../../../../services/alternativeService";

import Chips from "../../../../assets/images/homepage/junkfood/chips.png";
import WhiteChocolate from "../../../../assets/images/homepage/junkfood/whiteChocolate.png";
import GummiBears from "../../../../assets/images/homepage/junkfood/gummyBears.png";
import Cola from "../../../../assets/images/homepage/junkfood/cola.png";
import Cookies from "../../../../assets/images/homepage/junkfood/cookies.png";
import Salami from "../../../../assets/images/homepage/junkfood/salami.png";
import Refresh from "../../../../assets/images/homepage/refresh.png";

const Alternative = () => {
  const [value, setValue] = useState(0);
  const [alternative0, setAlternative0] = useState([]);
  const [alternative1, setAlternative1] = useState([]);
  const [alternative2, setAlternative2] = useState([]);
  const [alternative3, setAlternative3] = useState([]);
  const [alternative4, setAlternative4] = useState([]);
  const [alternative5, setAlternative5] = useState([]);
  const [showText, setShowText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const junkFoodNames = [
    "chips",
    "white chocolate",
    "unhealthy carbonated beverages",
    "gummi bears",
    "unhealthy sugary and fatty cookies",
    "highly processed salami"];

  const className = (baseName, isSelected) =>
    (isSelected ? [baseName].concat("selected") : [baseName]).join(" ");

  const handleAlternativeClick = async (value) => {
    setIsLoading(true);
    setShowText(false);
    setValue(value);
    await setAlternative(value);
    setIsLoading(false);
  };

  const setAlternative = async (value) => {
    try {
      const productList = await getAlternative(value);
      if (value === 0) {
        setAlternative0(productList);
      } else if (value === 1) {
        setAlternative1(productList);
      } else if (value === 2) {
        setAlternative2(productList);
      } else if (value === 3) {
        setAlternative3(productList);
      } else if (value === 4) {
        setAlternative4(productList);
      } else if (value === 5) {
        setAlternative5(productList);
      }
    } catch (error) {
      console.error("error set alternative:", error);
    }
  };

  const alternativeMap = (alternativeList) => {
    if (alternativeList.length != 0) {
      return alternativeList.map((productItem) => {
        return (
          <Product
            productID={productItem.productID}
            productName={productItem.productName}
            productPrice={productItem.productPrice}
            imageUrl={productItem.imageUrl}
            nutriScore={productItem.nutriScore}
            capacity={productItem.capacity}
          />
        );
      });
    } else return;
  };
  return (
    <div className="alternative-wrap">
      <div className="alternative-nav">
        {/* icons */}
        <div className="alternative-nav-tabs">
          <div
            className={className("alternative-tab-item", value === 0)}
            onClick={() => handleAlternativeClick(0)}
          >
            <img src={Chips} className="alternative-tab-icon" />
          </div>
          <div
            className={className("alternative-tab-item", value === 1)}
            onClick={() => handleAlternativeClick(1)}
          >
            <img src={WhiteChocolate} className="alternative-tab-icon" />
          </div>
          <div
            className={className("alternative-tab-item", value === 2)}
            onClick={() => handleAlternativeClick(2)}
          >
            <img src={Cola} className="alternative-tab-icon" />
          </div>
          <div
            className={className("alternative-tab-item", value === 3)}
            onClick={() => handleAlternativeClick(3)}
          >
            <img src={GummiBears} className="alternative-tab-icon" />
          </div>
          <div
            className={className("alternative-tab-item", value === 4)}
            onClick={() => handleAlternativeClick(4)}
          >
            <img src={Cookies} className="alternative-tab-icon" />
          </div>
          <div
            className={className("alternative-tab-item", value === 5)}
            onClick={() => handleAlternativeClick(5)}
          >
            <img src={Salami} className="alternative-tab-icon" />
          </div>
        </div>

        {/* product alternatives */}
        <div className="alternative-panels">
          {showText && (
            <div className="alternative-panel-text">
              Please click the icon on the left to get corresponding healthier alternatives
            </div>
          )}
          {isLoading && (
            <div className="alternative-panel-text">
              <LoadingScreen />
            </div>
          )}
          {(!isLoading) && value === 0 && (
            <div className="alternative-product">
              {alternativeMap(alternative0)}
            </div>
          )}
          {(!isLoading) && value === 1 && (
            <div className="alternative-product">
              {alternativeMap(alternative1)}
            </div>
          )}
          {(!isLoading) && value === 2 && (
            <div className="alternative-product">
              {alternativeMap(alternative2)}
            </div>
          )}
          {(!isLoading) && value === 3 && (
            <div className="alternative-product">
              {alternativeMap(alternative3)}
            </div>
          )}
          {(!isLoading) && value === 4 && (
            <div className="alternative-product">
              {alternativeMap(alternative4)}
            </div>
          )}
          {(!isLoading) && value === 5 && (
            <div className="alternative-product">
              {alternativeMap(alternative5)}
            </div>
          )}
        </div>
        {(!showText) && (
          <div className="change-icon" onClick={() => handleAlternativeClick(value)}>
            <p className='homepage-title-3'> Change alternatives for {junkFoodNames[value]}</p>
            <img src={Refresh} className='homepage-refresh-icon'/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alternative;
