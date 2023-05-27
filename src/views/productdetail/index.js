import './index.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Nutri from "../../components/nutri";
import ContentLevel from "./components/content_level";
import AddToScButton from "../../components/add_to_sc_button"

function Page() {
 /* mock data
  const [product, setProduct] = useState(
    {
      productID: "p1",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: "2,99€",
      productNutri: "C",
      productImage:
        "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productBrand: "Davert",
      capacity: 3
    });
  
  const [productDetail, setProductDetail] = useState(
    {
      productID: "p1",
      fatLevel: "high",
      fat: 28,
      sugarLevel: "moderate",
      sugar: 12,
      saltLevel: "small",
      salt: 0.06,
      productDescription:  ["D1: .....","D2: ....."]
    });
  */

  const [productList, setProductList] = useState([
    {
      productID: "p1",
      productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
      productPrice: "2,99€",
      productNutri: "C",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
      productBrand: "Davert",
      capacity: 3
    },
    {
      productID: "p2",
      productName: "Couscous Vollkorn - Davert - 500g",
      productPrice: "12,99€",
      productNutri: "A",
      productImage: "https://images.openfoodfacts.org/images/products/401/933/930/6109/front_de.6.full.jpg",
      productBrand: "Davert",
      capacity: 5
    }
    ]);  
  
  const [productDetailList, serProductDetail] = useState([
    {
      productID: "p1",
      fatLevel: "high",
      fat: 28,
      sugarLevel: "moderate",
      sugar: 12,
      saltLevel: "small",
      salt: 0.06,
      productDescription:  ["D1: .....","D2: ....."]
    },
    {
      productID: "p2",
      fatLevel: "small",
      fat: 1.8,
      sugarLevel: "small",
      sugar: 2.2,
      saltLevel: "small",
      salt: 0.01,
      productDescription:  ["D1: .....","D2: ....."]}
  ] 
  );

  var isAvailable= capacity => {
    if(capacity>0)
      return "Avaiable"
    else
      return "Not Abaiable"
  };

  // get corresponding product data by comparing the product id
  var pathname = window.location.pathname;
  var id = pathname.split("\/")[2];
  const product=productList.find(product => product.productID ==id);
  const productDetail=productDetailList.find(product => product.productID ==id);

  return (
    <div className="productdetail-wrap">  
      {/* <back */}
      <div className="pd_bread_crumb">
        <Link to="/product">&lt;Back</Link>
      </div>

      <div className="pd_content">
        <div className="pd_content_top">
          {/* product-img */}
          <div className="pd_top_left">
            <img src={product.productImage}></img>
          </div>
          <div className="pd_top_right">
            {/* product-name */}
            <h2>{product.productName}</h2>
            {/* brand */}
            <p>Brand: {product.productBrand}</p>
            {/* nutri-score */}
            <Nutri nutri={product.productNutri}/>
            <div className="pd_top_right_bottom">
              <div className="left">
                <div className="price">{product.productPrice}</div>
                <div className="available">{isAvailable(product.capacity)}</div>
              </div>
              <div className="right">
                {/* add to shopping cart button */}
                <AddToScButton/>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_content_bottom">
          <h3>Nutritional Information</h3>
          <div class="nutri_info">
            <ContentLevel degree={productDetail.fatLevel}/>
            Fat in {productDetail.fatLevel} amounts ({productDetail.fat}%)
          </div>
          <div class="nutri_info">
            <ContentLevel degree={productDetail.sugarLevel}/>
            Sugar in {productDetail.sugarLevel} amounts ({productDetail.sugar}%)
          </div>
          <div class="nutri_info">
            <ContentLevel degree={productDetail.saltLevel}/>
            Salt in {productDetail.saltLevel} amounts ({productDetail.salt}%)
          </div>

          <h3>Other Product Description</h3>
          {productDetail.productDescription.map((descriptionItem => {
            return(
              <div>
                <p>{descriptionItem}</p>
              </div>
            )
          }))}
        </div>
      </div>      
    </div>
  );
}

export default Page;