import "./index.css";
import Category from "../../components/category";
import SortProducts from "./components/sort";
import { BrandFilter } from "./components/filter";
import { NutriFilter } from "./components/filter";
import { DietaryPreferencFilter } from "./components/filter";
import ProductList from "./components/product_list";
import { getAllProducts, getProductsByName } from "../../services/productService";

import React from "react";
import { useState, useCallback, useEffect} from "react";
import { useLocation } from 'react-router-dom';
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
  // used to get the keywords in the search part
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyWords = searchParams.get('search');
  
  const setProducts = async () => {
    try {
      const list = await (keyWords===null? getAllProducts() : getProductsByName(keyWords));
      console.log(JSON.stringify(list) + "to test");
      setProductList(list);
    } catch (error) {
      console.error("error set products:", error);
    }
  }
  // inintialize the product list
  useEffect(() => {
    setProducts();
  }, []); 

  useEffect(() => {
    if (keyWords!==null){
      setProducts();
    }
  }, [keyWords]);
  

  // used to get the selected sort value in all product page
  const [sort, setSort] = useState("1");
  function getSelectedSort(value) {
    setSort(value);
  }
  useEffect(() => {
    console.log("all-product-page sort: " + sort);
  }, [sort]);

  // used to get the selected category in all product page
  const [category, setCategory] = useState(
    window.location.href.split("/")[3].split("#")[1]
  );
  function getSelectedCategory(value) {
    setCategory(value);
  }

  // displayed product list
  const [filteredProductList, setfilteredProductList] = useState(
    productList.filter((product) => {
      if (category !== undefined) {
        return product.category === category;
      } else {
        return true;
      }
    })
  );
  // displayed product list on page one
  const [pageProductList, setPageProductList] = useState(
    filteredProductList.slice(0, 10)
  );

  // reset filteredProductList if the selected category changed
  const resetfilteredProductListbyCategory = () => {
    setfilteredProductList(
      productList.filter((product) => {
        if (category !== undefined) {
          return product.category === category;
        } else {
          return true;
        }
      })
    );
  };
  useEffect(() => {
    resetfilteredProductListbyCategory();
    console.log("all-product-page category: " +category);
  }, [category, productList]);
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
          <NutriFilter />
          <DietaryPreferencFilter />
          <BrandFilter />
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
