import './index.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Nutri from "../shoppingcart/components/shoppingcart_nutri";
import ContentLevel from "./components/content_level";

function Page() {
   // mock data
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

  const isAvailable= capacity => {
    if(capacity>0)
      return "Avaiable"
    else
      return "Not Abaiable"
  }

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
                <button/>
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