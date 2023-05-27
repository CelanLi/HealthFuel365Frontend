// 引入样式文件
import './index.css';
import Category from "../../components/category"
import Product from "../../components/product"
import SortProducts from './components/sort';

import React from 'react';
import { useState } from "react";

//ANTD components
import { Collapse } from "antd";
const { Panel } = Collapse;

function Page() {
  const [productList, setProductList] = useState([
    {
      productID: "p1",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: "2,99€",
      productNutri: "C",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
    },
    {
      productID: "p2",
      productName: "Couscous Vollkorn - Davert - 500g",
      productPrice: "12,99€",
      productNutri: "A",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/930/6109/front_de.6.full.jpg",
    }
  ]);

  return (
    <div className="allproductspage-wrap">  
      <div className="content-container">
        {/* sort and filter */}
        <div className="content-left">
          <SortProducts/>
          {/* filter 1: Nutri-score */}
          <div className="filter">
            <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
              <Panel header="Nutri-score" key="1">
                <div className="filter-choice">
                  <input type="radio" id="nutri-choice-1" name="nutri" value="A"></input>
                  <label for="nutri-choice-1">A</label>
                </div>
                <div className="filter-choice">
                  <input type="radio" id="nutri-choice-2" name="nutri" value="B"></input>
                  <label for="nutri-choice-2">B and above</label>
                </div>
                <div className="filter-choice">
                  <input type="radio" id="nutri-choice-3" name="nutri" value="C"></input>
                  <label for="nutri-choice-3">C and above</label>
                </div>
                <div className="filter-choice">
                  <input type="radio" id="nutri-choice-4" name="nutri" value="D"></input>
                  <label for="nutri-choice-4">D and above</label>
                </div>
                <div className="filter-choice">
                  <input type="radio" id="nutri-choice-5" name="nutri" value="E"></input>
                  <label for="nutri-choice-5">E and above</label>
                </div>
              </Panel>
            </Collapse>
            {/* 取消选中应该要用function实现 */}
          </div>
          {/* filter 2: Dietary Preference */}
          <div className="filter">
            <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Dietary Preference" key="1">
                  <div className="filter-choice">
                    Fat Content Range
                    <div class="range-slider">
                      0 <input type="range" min="0" max="100" name="fat" defaultValue="100" id="fat"/> 100
                    </div>
                  </div>
                  <div className="filter-choice">
                    Sugar Content Range
                    <div class="range-slider">
                      0 <input type="range" min="0" max="100" name="sugar" defaultValue="100" id="sugar"/> 100
                    </div>
                  </div>
                  <div className="filter-choice">
                    Salz Content Range
                    <div class="range-slider">
                      0 <input type="range" min="0" max="100" name="salz" defaultValue="100" id="salz"/> 100
                    </div>
                  </div>
                  <div className="filter-choice">
                    <input type="checkbox" id="dp1" name="dp" value="vegan"/>
                    <label for="vegan">Vegan</label>
                  </div>
                  <div className="filter-choice">
                    <input type="checkbox" id="dp2" name="dp" value="vegetarian"/>
                    <label for="vegetarian">Vegetarian</label>
                  </div>
                </Panel>
              </Collapse>
          </div>
          {/* filter 3: Brand */}
          <div className="filter">
            <Collapse bordered={false} defaultActiveKey={["1"]} expandIconPosition="end">
              <Panel header="Brands" key="1">
                <div className="filter-choice">
                  <input type="checkbox" id="b1" name="b" value="davert"/>
                  <label for="davert">Davert</label>
                </div>
                <div className="filter-choice">
                  <input type="checkbox" id="b2" name="b" value="Xxx"/>
                  <label for="xxx">Xxx</label>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
        {/* categories and products*/}
        <div className="content-right">  
          <Category/>
          <div className="products-container">
            {productList.map((productItem) => {
              return (
                <Product
                  productID ={productItem.productID}
                  productName={productItem.productName}
                  productPrice={productItem.productPrice}
                  productImage={productItem.productImage}
                  productNutri={productItem.productNutri}
                ></Product>
              );
            })}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default Page;