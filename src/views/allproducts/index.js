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
  const [productList, setProductList] = useState([]);
  // the filter needs the product detail information
  const [productDetailList, setProductDetailList] = useState([]);
  // used to get the keywords in the search part
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [keyWords, setKeywords] = useState(searchParams.get("search"));
  useEffect(() => {
    const newKeyWords = searchParams.get("search");
    if (searchParams.get("search") !== null) {
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
      setProductsLoading(true);
      setDetailsLoading(true);
      const list = await (keyWords === null
        ? getAllProducts(sort)
        : getProductsByName(keyWords, sort));
      setProductList(list);
      setProductsLoading(false);
      const detailList = async () => {
        const dList = [];
        for (const product of list) {
          const detail = await getDetail(product.productID);
          dList.push(detail[1]);
        }
        return dList;
      };
      const productDetails = await detailList();
      setProductDetailList(productDetails);
      setDetailsLoading(false);
      setDetailsLoaded(false);
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
  function getSelectedNutri(value) {
    setNutri(value);
  }
  // used to get the selected preference
  const [preference, setPreference] = useState([]);

  function getSelectedPreference(value) {
    setPreference(value);
  }
  // used to get the selected fat content
  const [fatContent, setFatContent] = useState(100);
  function getSelectedFatContent(value) {
    setFatContent(value);
  }
  // used to get the selected sugar content
  const [sugarContent, setSugarContent] = useState(100);
  function getSelectedSugarContent(value) {
    setSugarContent(value);
  }
  // used to get the selected salt content
  const [saltContent, setSaltContent] = useState(100);
  function getSelectedSaltContent(value) {
    setSaltContent(value);
  }
  // used to get the selected Brands
  const [brands, setBrands] = useState([]);
  function getSelectedBrands(value) {
    setBrands(value);
  }
  // displayed product list
  const [filteredProductList, setfilteredProductList] = useState([]);
  // displayed product list on page one
  const [pageProductList, setPageProductList] = useState([]);
  // reset filteredProductList if the selected category/ nutri-score/ dietray preference/ brands
  const resetfilteredProductList = () => {
    var fatIDs,
      sugarIDs,
      saltIDs,
      veganIDs,
      vegetarianIDs = [];
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
          const fat = productDetailList.filter(
            (productDetail) => productDetail?.fat <= fatContent
          );
          fatIDs = fat.map((productDetail) => productDetail.productID);
          conditions.push(fatIDs.includes(product.productID));
        }
        if (sugarContent != 100) {
          const sugar = productDetailList.filter(
            (productDetail) => productDetail?.sugar <= sugarContent
          );
          sugarIDs = sugar.map((productDetail) => productDetail.productID);
          conditions.push(sugarIDs.includes(product.productID));
        }
        if (saltContent != 100) {
          const salt = productDetailList.filter(
            (productDetail) => productDetail?.salt <= saltContent
          );
          saltIDs = salt.map((productDetail) => productDetail.productID);
          conditions.push(saltIDs.includes(product.productID));
        }
        if (preference.includes("vegan")) {
          const vegan = productDetailList.filter(
            (productDetail) => productDetail?.vegan
          );
          veganIDs = vegan.map((productDetail) => productDetail.productID);
          conditions.push(veganIDs.includes(product.productID));
        }
        if (preference.includes("vegetarian")) {
          const vegetarian = productDetailList.filter(
            (productDetail) => productDetail?.vegetarian
          );
          vegetarianIDs = vegetarian.map(
            (productDetail) => productDetail.productID
          );
          conditions.push(vegetarianIDs.includes(product.productID));
        }
        if (brands.length !== 0) {
          conditions.push(brands.includes(product?.productBrand));
        }
        // use every method to check if each conditional function returns true
        return conditions.every((condition) => condition);
      })
    );
  };
  const [productsLoading, setProductsLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsLoaded, setDetailsLoaded] = useState(false);
  useEffect(() => {
    if (detailsLoading) {
      //used to pass the status of details to product list
      setDetailsLoaded(true);
    } else {
      setDetailsLoaded(false);
    }
  }, [sugarContent, saltContent, fatContent, preference]);
  useEffect(() => {
    resetfilteredProductList();
  }, [
    category,
    nutri,
    preference,
    fatContent,
    sugarContent,
    saltContent,
    brands,
    productList,
    productsLoading,
    detailsLoading,
    //isLoading,
  ]);
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
      const list = arrSplit(filteredProductList, pagination, 10);
      setPageProductList(list);
    },
    [filteredProductList, pageNumber]
  );
  const showPagination = (filteredProductList.length > 0) & !productsLoading;

  return (
    <div className="allproductspage-wrap">
      <div className="content-container">
        {/* sort and filter */}
        <div className="content-left">
          <SortProducts setSort={getSelectedSort} />
          {/* three filters: 1. Nutri-score 2. Dietary Preference 3. Brand*/}
          <NutriFilter setNutri={getSelectedNutri} />
          <DietaryPreferencFilter
            setPreference={getSelectedPreference}
            setFatContent={getSelectedFatContent}
            setSugarContent={getSelectedSugarContent}
            setSaltContent={getSelectedSaltContent}
          />
          <BrandFilter setBrands={getSelectedBrands} />
        </div>
        {/* categories and products*/}
        <div className="content-right">
          <Category setCategory={getSelectedCategory} />
          <ProductList
            productlist={pageProductList}
            isLoading_p={productsLoading}
            isLoading_d={detailsLoaded}
          />
          {showPagination ? (
            <div className="pagination-bar">
              <Pagination
                defaultCurrent={pageNumber}
                total={filteredProductList.length}
                pageSize={10}
                onChange={handlePaginationChange}
                showSizeChanger={false}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Page;
