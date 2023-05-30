// 引入样式文件
import './index.css';
import Category from "../../components/category"
import Product from "../../components/product"
import SortProducts from './components/sort';
import {BrandFilter} from './components/filter';
import {NutriFilter} from './components/filter';
import {DietaryPreferencFilter} from './components/filter';
import ProductList from './components/product_list';

import React from 'react';
import { useState } from "react";

//ANTD components
import { Pagination } from 'antd';

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
    },
  ]);

  // default pagination states
  const [number, setNumber] = useState(1);
  const handlePage = (pageNumber) => setNumber(pageNumber);

  return (
    <div className="allproductspage-wrap">  
      <div className="content-container">
        {/* sort and filter */}
        <div className="content-left">
          <SortProducts/>
          {/* three filters: 1. Nutri-score 2. Dietary Preference 3. Brand*/}
          <NutriFilter/>
          <DietaryPreferencFilter/>
          <BrandFilter/>
        </div>
        {/* categories and products*/}
        <div className="content-right">  
          <Category/>
          <ProductList productlist={productList}/>
          <div className="pagination-bar">
            <Pagination defaultCurrent={number} total={productList.length} pageSize={10} onChange={handlePage}/>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default Page;