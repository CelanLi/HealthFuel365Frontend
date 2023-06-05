// 引入样式文件
import './index.css';
import Category from "../../components/category";
import SortProducts from './components/sort';
import {BrandFilter}from './components/filter';
import {NutriFilter} from './components/filter';
import {DietaryPreferencFilter} from './components/filter';
import ProductList from './components/product_list';

import React from 'react';
import { useState, useCallback, useEffect } from "react";

//ANTD components
import { Pagination } from 'antd';

function Page(props) {
  const [productList, setProductList] = useState([
    {
      productID: "p1",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: 2.99,
      productNutri: "C",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productCategory: "drinks"
    },
    {
      productID: "p2",
      productName: "Couscous Vollkorn - Davert - 500g",
      productPrice: 12.99,
      productNutri: "A",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/930/6109/front_de.6.full.jpg",
      productCategory: "staple"
    },
    {
      productID: "p3",
      productName: "Saltoos - Seitenbacher - 200 g",
      productPrice: 4.84,
      productNutri: "A",
      productImage: "https://images.openfoodfacts.org/images/products/200/000/009/8459/front_de.3.400.jpg",
      productCategory: "staple"
    },
    {
      productID: "p4",
      productName: "Seitenbacher all natural cereal musli strawberry delight",
      productPrice: 5.99,
      productNutri: "A",
      productImage: "https://images.openfoodfacts.org/images/products/003/954/509/9095/front_en.3.400.jpg",
      productCategory: "staple"
    },
    {
      productID: "p5",
      productName: "Milk & Cereal Biscuits - Belvita",
      productPrice: 7.99,
      productNutri: "B",
      productImage: "https://images.openfoodfacts.org/images/products/762/221/074/0519/front_en.21.400.jpg",
      productCategory: "snacks"
    },
    {
      productID: "p6",
      productName: "Biscuits Belvita Choco - 300g",
      productPrice: 3.99,
      productNutri: "D",
      productImage: "https://images.openfoodfacts.org/images/products/762/230/044/3269/front_en.19.400.jpg",
      productCategory: "snacks"
    },
    {
      productID: "p7",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: 2.99,
      productNutri: "A",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productCategory: "drinks"
    },
    {
      productID: "p8",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: 2.99,
      productNutri: "B",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productCategory: "drinks"
    },
    {
      productID: "p9",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: 2.99,
      productNutri: "C",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productCategory: "drinks"
    },
    {
      productID: "p10",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: 2.99,
      productNutri: "D",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productCategory: "drinks"
    },
    {
      productID: "p11",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: 2.99,
      productNutri: "E",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productCategory: "drinks"
    },
  ]);

  const [pageProductList, setPageProductList] = useState(productList.slice(0,10));

  // default pagination states
  const [pageNumber, setPageNumber] = useState(1);

  // products displayed per page
  const arrSplit = (arr, pageIndex, size) => {
    const offset = (pageIndex - 1) * size;
    setPageNumber(pageIndex + 1);
    return offset + size >= arr.length
      ? arr.slice(offset, arr.length)
      : arr.slice(offset, offset + size);
  };
  
  const handlePaginationChange = useCallback(
    (pagination) => {
      setPageNumber(pagination);
      console.log(pagination);
      const list = arrSplit(productList, pagination, 10);
      setPageProductList(list);
    },
      [productList, pageNumber]
  );

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
          <ProductList productlist={pageProductList}/>
          <div className="pagination-bar">
            <Pagination defaultCurrent={pageNumber} total={productList.length} pageSize={10} onChange={handlePaginationChange}/>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default Page;