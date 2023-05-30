// 引入样式文件
import "./index.css";

import React, {useEffect, useState } from "react";

//ANTD components
import { Collapse } from "antd";
const { Panel } = Collapse;

export function NutriFilter(){
  const [selectedNutri, setSelectedNutri] = useState(null);
  /* now used to test*/
  useEffect(() => {console.log(selectedNutri);}, [selectedNutri]);
 
  const handleRadioChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (selectedNutri==value){
        event.target.checked=false;  
        setSelectedNutri(() => null);    
      }
      else{
        setSelectedNutri(() => value);
      }
    }
    
  };

  return (
    <div className="filter">
      <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
        <Panel header="Nutri-score" key="1">
          <div className="filter-choice">
            <input type="radio" id="nutri-choice-1" name="nutri" value="A" onClick={handleRadioChange}></input>
            <label for="nutri-choice-1">A</label>
          </div>
          <div className="filter-choice">
            <input type="radio" id="nutri-choice-2" name="nutri" value="B" onClick={handleRadioChange}></input>
            <label for="nutri-choice-2">B and above</label>
          </div>
          <div className="filter-choice">
            <input type="radio" id="nutri-choice-3" name="nutri" value="C" onClick={handleRadioChange}></input>
            <label for="nutri-choice-3">C and above</label>
          </div>
          <div className="filter-choice">
            <input type="radio" id="nutri-choice-4" name="nutri" value="D" onClick={handleRadioChange}></input>
            <label for="nutri-choice-4">D and above</label>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export function DietaryPreferencFilter(){
  const [selectedPreference,setSelectedPreference] = useState([]);
  const [selectedFatContent,setSelectedFatContent] = useState(100);
  const [selectedSugarContent,setSelectedSugarContent] = useState(100);
  const [selectedSaltContent,setSelectedSaltContent] = useState(100);

  useEffect(() => {console.log(selectedPreference);}, [selectedPreference]);
  useEffect(() => {console.log(selectedFatContent);}, [selectedFatContent]);
  useEffect(() => {console.log(selectedSugarContent);}, [selectedSugarContent]);
  useEffect(() => {console.log(selectedSaltContent);}, [selectedSaltContent]);
  
  const handleCheckboxPreference = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPreference((prevSelectedPreference) => [...prevSelectedPreference,value ]);
    } else {
      setSelectedPreference((prevSelectedPreference) =>
       prevSelectedPreference.filter((preference) => preference !== value)
      );
    }
  };
    
  const fatContentHandling = (event) => {
    const { value } = event.target;
    setSelectedFatContent(value);
  };
    
  const sugarContentHandling = (event) => {
    const { value } = event.target;
    setSelectedSugarContent(value);
  };
    
  const saltContentHandling = (event) => {
    const { value } = event.target;
    setSelectedSaltContent(value);
  };
  
  return(
    <div className="filter">
      <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
        <Panel header="Dietary Preference" key="1">
          <div className="filter-choice">
            Fat Content Range
            <div className="range-slider">
              0 <input type="range" min="0" max="100" name="fat" defaultValue="100" id="fat" onChange={fatContentHandling}/> 100
            </div>
          </div>
          <div className="filter-choice">
            Sugar Content Range
            <div class="range-slider">
              0 <input type="range" min="0" max="100" name="sugar" defaultValue="100" id="sugar" onChange={sugarContentHandling}/> 100
            </div>
          </div>
          <div className="filter-choice">
            Salt Content Range
            <div class="range-slider">
              0 <input type="range" min="0" max="100" name="salt" defaultValue="100" id="salt" onChange={saltContentHandling}/> 100
            </div>
          </div>
          <div className="filter-choice">
            <input type="checkbox" id="dp1" name="dp" value="vegan" onChange={handleCheckboxPreference}/>
            <label for="vegan">Vegan</label>
          </div>
          <div className="filter-choice">
            <input type="checkbox" id="dp2" name="dp" value="vegetarian" onChange={handleCheckboxPreference}/>
            <label for="vegetarian">Vegetarian</label>
          </div>
        </Panel>
      </Collapse>
    </div>
    );
}

export function BrandFilter() {
  /* default: no brand is selected */
  const [selectedBrands, setSelectedBrands] = useState([]);
  /* now used to test*/
  useEffect(() => {console.log(selectedBrands);}, [selectedBrands]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedBrands((prevSelectedBrands) => [...prevSelectedBrands,value]);
    } 
    else {
      setSelectedBrands((prevSelectedBrands) => prevSelectedBrands.filter((brand) => brand !== value) );
    }
  };

  return (
    <div className="filter">
      <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
        <Panel header="Brands" key="1">
          <div className="filter-choice">
            <input type="checkbox" id="b1" name="b" value="davert" onChange={handleCheckboxChange}/>
            <label for="davert">Davert</label>
          </div>
          <div className="filter-choice">
            <input type="checkbox" id="b2" name="b" value="Xxx" onChange={handleCheckboxChange}/>
            <label for="xxx">Xxx</label>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}