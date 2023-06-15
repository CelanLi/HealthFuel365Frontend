import "./index.css";
import Category from "../../components/category";
import SortProducts from "./components/sort";
import { BrandFilter } from "./components/filter";
import { NutriFilter } from "./components/filter";
import { DietaryPreferencFilter } from "./components/filter";
import ProductList from "./components/product_list";
import {
  getAllProducts,
  getProductsByName,
} from "../../services/productService";
import { getDetail } from "../../services/productDetailService";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Pagination } from "antd";
function Page() {
  // used to store all products
  /*
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
  */
  const [productList, setProductList] = useState([]);
  // the filter needs the product detail information
  const [productDetailList, setProductDetailList] = useState([]);
  // used to get the keywords in the search part
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [keyWords,setKeywords] = useState(searchParams.get("search"));
  useEffect(() => {
    const newKeyWords=searchParams.get("search");
    if(searchParams.get("search")!==null){
      setKeywords(newKeyWords);
    }
  }, [searchParams]);
  // used to get the selected sort value in all product page
  const [sort, setSort] = useState("1");
  function getSelectedSort(value) {
    setSort(value);
  }

  const setProducts = async () => {
    try {
      const list = await (keyWords === null
        ? getAllProducts(sort)
        : getProductsByName(keyWords, sort));
      console.log(JSON.stringify(list) + "product to test");
      setProductList(list);
      const detailList = async () => {
        const dList = [];
        for (const product of list) {
          const detail = await (getDetail(product.productID));
          dList.push(detail[1]);
        }
        return dList;
      }
      const productDetails = await detailList();
      setProductDetailList(productDetails);
      console.log(JSON.stringify(productDetails) + "detail to test")
    } catch (error) {
      console.error("error set products:", error);
    }
  };
  // inintialize the product list
  useEffect(() => {
    setProducts();
  }, []);
  // change the product list when keywords/ sort method changed
  useEffect(() => {
    setProducts();
  }, [keyWords, sort]);

  // used to get the selected category in all product page
  const [category, setCategory] = useState(
    window.location.href.split("/")[3].split("#")[1]
  );
  function getSelectedCategory(value) {
    setCategory(value);
  }
  // used to get the selected Nutri Filter
  const [nutri, setNutri] = useState(null);
  function getSelectedNutri(value){
    setNutri(value);
  }
  // used to get the selected preference
  const [preference, setPreference] = useState([]);
  function getSelectedPreference(value){
    setPreference(value);
  }
  // used to get the selected fat content
  const [fatContent, setFatContent] = useState(100);
  function getSelectedFatContent(value){
    setFatContent(value);
  }
  // used to get the selected sugar content
  const [sugarContent, setSugarContent] = useState(100);
  function getSelectedSugarContent(value){
    setSugarContent(value);
  }
  // used to get the selected salt content
  const [saltContent, setSaltContent] = useState(100);
  function getSelectedSaltContent(value){
    setSaltContent(value);
  }
  // used to get the selected Brands
  const [brands, setBrands] = useState([]);
  function getSelectedBrands(value){
    setBrands(value);
  }
  // displayed product list
  const [filteredProductList, setfilteredProductList] = useState([]);
  // displayed product list on page one
  const [pageProductList, setPageProductList] = useState([]);
  // reset filteredProductList if the selected category/ nutri-score/ dietray preference/ brands
  const resetfilteredProductList= () => {
    var fatIDs, sugarIDs, saltIDs, veganIDs, vegetarianIDs = [];
    setfilteredProductList(
      productList.filter((product) => {
        const conditions = [];
        if (category !== undefined) {
          conditions.push(product?.category === category);
        }
        if (nutri !== null) {
          conditions.push(product?.nutriScore <= nutri);
        }
        if (fatContent != 100) {
          const fat=productDetailList.filter((productDetail) => productDetail?.fat<=fatContent);
          fatIDs= fat.map((productDetail) => productDetail.productID);
          console.log(fatContent+"fat..."+fat.map((productDetail) => productDetail?.fat));
          conditions.push(fatIDs.includes(product.productID));
        }
        if (sugarContent != 100) {
          const sugar=productDetailList.filter((productDetail) => productDetail?.sugar<=sugarContent);
          sugarIDs= sugar.map((productDetail) => productDetail.productID);
          conditions.push(sugarIDs.includes(product.productID));
        }
        if (saltContent !=100){
          const salt=productDetailList.filter((productDetail) => productDetail?.salt<=saltContent);
          saltIDs= salt.map((productDetail) => productDetail.productID);
          conditions.push(saltIDs.includes(product.productID));
        }
        if (preference.includes("vegan")){
          const vegan=productDetailList.filter((productDetail) => productDetail?.vegan);
          veganIDs= vegan.map((productDetail) => productDetail.productID);
          conditions.push(veganIDs.includes(product.productID));
        }
        if (preference.includes("vegetarian")){
          const vegetarian=productDetailList.filter((productDetail) => productDetail?.vegetarian);
          vegetarianIDs= vegetarian.map((productDetail) => productDetail.productID);
          conditions.push(vegetarianIDs.includes(product.productID));
        }
        if (brands.length !== 0) {
          conditions.push(brands.includes(product?.productBrand));
        }
        // use every method to check if each conditional function returns true
        return conditions.every((condition) => condition);
      }
      )
    );  
  }
  useEffect(() => {
    resetfilteredProductList();
    console.log("all-product-page category: " + category);
    console.log("all-product-page nutri: " + nutri);
    console.log("all-product-page preference: " + preference);
    console.log("all-product-page fat content: " + fatContent);
    console.log("all-product-page brands: " + brands);
  }, [category, nutri, preference, fatContent, sugarContent, saltContent, brands, productList]);
  useEffect(() => {
    setPageProductList(filteredProductList.slice(0, 10));
  }, [filteredProductList]);

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
      const list = arrSplit(filteredProductList, pagination, 10);
      setPageProductList(list);
    },
    [filteredProductList, pageNumber]
  );

  return (
    <div className="allproductspage-wrap">
      <div className="content-container">
        {/* sort and filter */}
        <div className="content-left">
          <SortProducts setSort={getSelectedSort} />
          {/* three filters: 1. Nutri-score 2. Dietary Preference 3. Brand*/}
          <NutriFilter setNutri={getSelectedNutri} />
          <DietaryPreferencFilter setPreference={getSelectedPreference} setFatContent={getSelectedFatContent} setSugarContent={getSelectedSugarContent} setSaltContent={getSelectedSaltContent}/>
          <BrandFilter setBrands={getSelectedBrands} />
        </div>
        {/* categories and products*/}
        <div className="content-right">
          <Category setCategory={getSelectedCategory} />
          <ProductList productlist={pageProductList} />
          <div className="pagination-bar">
            <Pagination
              defaultCurrent={pageNumber}
              total={filteredProductList.length}
              pageSize={10}
              onChange={handlePaginationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
