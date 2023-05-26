// 引入样式文件
import './index.css';
import Topnav from "../components/topnav";
import Category from "../components/category"
import Footer from "../components/footer"
import Product from "../components/product"

import React from 'react';

function Page() {
  return (
    <div className="allproductspage-wrap">  
      <div className="content-container">
        {/* sort and filter */}
        <div className="content-left">
          <div className="sort">
            Sort By:
            <div class="select-box">
              <select>
                <option>Nutri-score</option>
                <option>Sort 2</option>
                <option>Sort 3</option>
              </select>
            </div>
          </div>
          {/* filter 1: Nutri-score */}
          <div className="filter">
            Nutri-score
            {/* 取消选中应该要用function实现 */}
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
          </div>
          {/* filter 2: Dietary Preference */}
          <div className="filter">
            Dietary Preference
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
          </div>
          {/* filter 3: Brand */}
          <div className="filter">
            Brand
             <div className="filter-choice">
              <input type="checkbox" id="b1" name="b" value="davert"/>
              <label for="davert">Davert</label>
            </div>
            <div className="filter-choice">
              <input type="checkbox" id="b2" name="b" value="Xxx"/>
              <label for="xxx">Xxx</label>
            </div>
          </div>
        </div>
        {/* categories and products*/}
        <div className="content-right">  
          <Category/>
          <div className="products-container">
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