import "./index.css";
import { getAllBrands } from "../../../../services/productService";
import React, {useEffect, useState } from "react";

//ANTD components
import { Collapse } from "antd";
const { Panel } = Collapse;

export function NutriFilter({ nutri = null, setNutri }){
  //const [selectedNutri, setSelectedNutri] = useState(null);
  const [selectedNutri, setSelectedNutri] = useState(nutri);
  /* now used to test*/
  useEffect(() => {console.log(selectedNutri);}, [selectedNutri]);
 
  const handleRadioChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (selectedNutri==value){
        event.target.checked=false;  
        setSelectedNutri(() => null);
        setNutri(() => null);    
      }
      else{
        setSelectedNutri(() => value);
        setNutri(() => value);    
      }
    }
    
  };

  return (
    <div className="filter">
      <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
        <Panel header="Nutri-score" key="1">
          <div className="filter-choice">
            <input type="radio" id="nutri-choice-1" name="nutri" value="A" onClick={handleRadioChange}></input>
            <label for="nutri-choice-1">A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
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

export function DietaryPreferencFilter({ preference = [], setPreference, fatContent = 100, setFatContent, sugarContent = 100, setSugarContent, saltContent = 100, setSaltContent}){
  const [selectedPreference,setSelectedPreference] = useState(preference);
  const [selectedFatContent,setSelectedFatContent] = useState(fatContent);
  const [selectedSugarContent,setSelectedSugarContent] = useState(sugarContent);
  const [selectedSaltContent,setSelectedSaltContent] = useState(saltContent);

  useEffect(() => {console.log(selectedPreference);}, [selectedPreference]);
  useEffect(() => {console.log(selectedFatContent);}, [selectedFatContent]);
  useEffect(() => {console.log(selectedSugarContent);}, [selectedSugarContent]);
  useEffect(() => {console.log(selectedSaltContent);}, [selectedSaltContent]);
  
  const handleCheckboxPreference = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPreference((prevSelectedPreference) => [...prevSelectedPreference,value ]);
      setPreference((prevSelectedPreference) => [...prevSelectedPreference,value]);
    } else {
      setSelectedPreference((prevSelectedPreference) =>
       prevSelectedPreference.filter((preference) => preference !== value)
      );
      setPreference((prevSelectedPreference) =>
      prevSelectedPreference.filter((preference) => preference !== value)
     );
    }
  };
    
  const fatContentHandling = (event) => {
    const { value } = event.target;
    setSelectedFatContent(value);
    setFatContent(value);
  };
    
  const sugarContentHandling = (event) => {
    const { value } = event.target;
    setSelectedSugarContent(value);
    setSugarContent(value);
  };
    
  const saltContentHandling = (event) => {
    const { value } = event.target;
    setSelectedSaltContent(value);
    setSaltContent(value);
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

export function BrandFilter({ brands = [], setBrands }) {
  /* default: no brand is selected */
  //const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState(brands);
  /* now used to test*/
  useEffect(() => {console.log(selectedBrands);}, [selectedBrands]);
  // get all brand names
  const [allBrands, setAllBrands] = useState([]);
  const setAllBrandsName = async () => {
    try {
      const brandNames = await getAllBrands();
      setAllBrands(brandNames);
    } catch (error) {
      console.error("error: get all Brands", error);
    }
  };
  useEffect(() => {
    setAllBrandsName();
  }, []);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBrands((prevSelectedBrands) => [...prevSelectedBrands,value]);
      setBrands((prevSelectedBrands) => [...prevSelectedBrands,value]);
    } 
    else {
      setSelectedBrands((prevSelectedBrands) => prevSelectedBrands.filter((brand) => brand !== value) );
      setBrands((prevSelectedBrands) => prevSelectedBrands.filter((brand) => brand !== value) );
    }
  };

  return (
    <div className="filter">
      <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
        <Panel header="Brands" key="1">
          {
            allBrands.map((brand) => {
              return (
                <div className="filter-choice">
                  <input type="checkbox" id={brand} name="b" value={brand} onChange={handleCheckboxChange}/>
                  <label for={brand}>{brand}</label>
                </div>
              );
            })
          }
          {/*
          <div className="filter-choice">
            <input type="checkbox" id="b1" name="b" value="Davert" onChange={handleCheckboxChange}/>
            <label for="Davert">Davert</label>
          </div>
          <div className="filter-choice">
            <input type="checkbox" id="b2" name="b" value="Seitenbacher" onChange={handleCheckboxChange}/>
            <label for="Seitenbacher">Seitenbacher</label>
          </div>
          */}
        </Panel>
      </Collapse>
    </div>
  );
}