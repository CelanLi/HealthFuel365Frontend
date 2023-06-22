import { useState } from "react";
import "./index.css";

import Product from "../../../../components/product";

import Chips from "../../../../assets/images/homepage/junkfood/chips.png";
import Friedchicken from "../../../../assets/images/homepage/junkfood/friedchicken.png";
import Pommes from "../../../../assets/images/homepage/junkfood/pommes.png";
import WhiteChocolate from "../../../../assets/images/homepage/junkfood/whiteChocolate.png";
import GummiBears from "../../../../assets/images/homepage/junkfood/gummyBears.png";
import Cola from "../../../../assets/images/homepage/junkfood/cola.png";
import Cookies from "../../../../assets/images/homepage/junkfood/cookies.png";
import Salami from "../../../../assets/images/homepage/junkfood/salami.png";

import { getAlternative } from "../../../../services/alternativeService";
// const alternative0 = (
//     <div className='alternative-product'>
//         <Product/>
//         <Product/>
//         <Product/>
//         <Product/>
//     </div>)
// const alternative1 = (
//     <div className='alternative-product'>
//         <Product/>
//         <Product/>
//         <Product/>
//     </div>)
// const alternative2 = (
//     <div className='alternative-product'>
//         <Product/>
//         <Product/>
//     </div>)
// const alternative3 = (
//     <div className='alternative-product'>
//         <Product/>
//         <Product/>
//         <Product/>
//     </div>)
// const alternative4 = (
//     <div className='alternative-product'>
//         <Product/>
//         <Product/>
//     </div>)
// const alternative5 = (
//     <div className='alternative-product'>
//         <Product/>
//         <Product/>
//         <Product/>
//     </div>)

const Tab101 = () => {
  const [value, setValue] = useState(0);
  const [alternative0, setAlternative0] = useState([]);
  const [alternative1, setAlternative1] = useState([]);
  const [alternative2, setAlternative2] = useState([]);
  const [alternative3, setAlternative3] = useState([]);
  const [alternative4, setAlternative4] = useState([]);
  const [alternative5, setAlternative5] = useState([]);
  const [showText, setShowText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const junkFoodNames = ["chips", "white chocolate", "unhealthy carbonated beverages", "gummi bears", "unhealthy sugary and fatty cookies", "highly processed salami"];
  const junkFoodName = junkFoodNames[value];

  const className = (baseName, isSelected) =>
    (isSelected ? [baseName].concat("selected") : [baseName]).join(" ");

  const handleAlternativeClick = async (value) => {
    setIsLoading(true);
    setShowText(false);
    setValue(value);
    console.log("alternativeitem: " + value);
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
    console.log("alternativemap");
    if (alternativeList.length != 0) {
      return alternativeList.map((productItem) => {
        return (
          <Product
            productID={productItem.productID}
            productName={productItem.productName}
            productPrice={productItem.productPrice}
            imageUrl={productItem.imageUrl}
            nutriScore={productItem.nutriScore}
          />
        );
      });
    } else return;
  };
  return (
    <div className="alternative-wrap">
      <div className="alternative-nav">
        <div className="alternative-nav-tabs">
          <div className="alternative-nav-row">
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
          </div>
          <div className="alternative-nav-row">
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
        </div>

        <div className="alternative-panels">
          {showText && (
            <div className="alternative-panel-text">
              Please click the icon on the left to get corresponding healthier alternatives
            </div>
          )}
          {isLoading && (
            <div className="alternative-panel-text">
              Loading alternatives for {junkFoodNames[value]}...
            </div>
          )}
          {(!isLoading) && value === 0 && (
            <div className="alternative-panel-item">
              <div className="alternative-product">
                {alternativeMap(alternative0)}
              </div>
            </div>
          )}
          {(!isLoading) && value === 1 && (
            <div className="alternative-panel-item">
              <div className="alternative-product">
                {alternativeMap(alternative1)}
              </div>
            </div>
          )}
          {(!isLoading) && value === 2 && (
            <div className="alternative-panel-item">
              <div className="alternative-product">
                {alternativeMap(alternative2)}
              </div>
            </div>
          )}
          {(!isLoading) && value === 3 && (
            <div className="alternative-panel-item">
              <div className="alternative-product">
                {alternativeMap(alternative3)}
              </div>
            </div>
          )}
          {(!isLoading) && value === 4 && (
            <div className="alternative-panel-item">
              <div className="alternative-product">
                {alternativeMap(alternative4)}
              </div>
            </div>
          )}
          {(!isLoading) && value === 5 && (
            <div className="alternative-panel-item">
              <div className="alternative-product">
                {alternativeMap(alternative5)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab101;
