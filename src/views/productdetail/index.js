import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd"; 
import Nutri from "../../components/nutri";
import ContentLevel from "./components/content_level";
import AddToScButton from "../../components/add_to_sc_button";
import { getDetail } from "../../services/productDetailService";
import { addShoppingCart } from "../../services/productService";

function Page() {
  // get corresponding product data by comparing the product id
  var pathname = window.location.pathname;
  var id = pathname.split("/")[3];
  console.log(id);
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    const setData = async (id: string) => {
      try {
        const [product, productDetail] = await getDetail(id);
        setProduct(product);
        setProductDetail(productDetail);
      } catch (error) {
        console.error("error set products:", error);
      }
    };
    setData(id);
  }, []);
  // {
  //   productID: "p1",
  //   productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
  //   productPrice: 2.99,
  //   productNutri: "C",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
  //   productBrand: "Davert",
  //   capacity: 3,
  // },
  // {
  //   productID: "p2",
  //   productName: "Couscous Vollkorn - Davert - 500g",
  //   productPrice: 12.99,
  //   productNutri: "A",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/930/6109/front_de.6.full.jpg",
  //   productBrand: "Davert",
  //   capacity: 5,
  // },
  // {
  //   productID: "p3",
  //   productName: "Saltoos - Seitenbacher - 200 g",
  //   productPrice: 4.84,
  //   productNutri: "A",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/200/000/009/8459/front_de.3.400.jpg",
  //   productBrand: "Seitenbacher",
  //   capacity: 5,
  // },
  // {
  //   productID: "p4",
  //   productName: "Seitenbacher all natural cereal musli strawberry delight",
  //   productPrice: 12.99,
  //   productNutri: "A",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/003/954/509/9095/front_en.3.400.jpg",
  //   productBrand: "Seitenbacher",
  //   capacity: 20,
  // },
  // {
  //   productID: "p5",
  //   productName: "Milk & Cereal Biscuits - Belvita",
  //   productPrice: 7.99,
  //   productNutri: "B",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/762/221/074/0519/front_en.21.400.jpg",
  //   productBrand: "Belvita",
  //   capacity: 15,
  // },
  // {
  //   productID: "p6",
  //   productName: "Biscuits Belvita Choco - 300g",
  //   productPrice: 3.99,
  //   productNutri: "D",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/762/230/044/3269/front_en.19.400.jpg",
  //   productBrand: "Belvita",
  //   capacity: 1,
  // },
  // {
  //   productID: "p7",
  //   productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
  //   productPrice: 2.99,
  //   productNutri: "A",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
  //   productBrand: "Davert",
  //   capacity: 3,
  // },
  // {
  //   productID: "p8",
  //   productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
  //   productPrice: 2.99,
  //   productNutri: "B",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
  //   productBrand: "Davert",
  //   capacity: 3,
  // },
  // {
  //   productID: "p9",
  //   productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
  //   productPrice: 2.99,
  //   productNutri: "C",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
  //   productBrand: "Davert",
  //   capacity: 3,
  // },
  // {
  //   productID: "p10",
  //   productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
  //   productPrice: 2.99,
  //   productNutri: "D",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
  //   productBrand: "Davert",
  //   capacity: 3,
  // },
  // {
  //   productID: "p11",
  //   productName: "Hafer Porridge Cup Schokolade - Davert - 65 g",
  //   productPrice: 2.99,
  //   productNutri: "E",
  //   imageUrl:
  //     "https://images.openfoodfacts.org/images/products/401/933/963/6107/front_de.22.400.jpg",
  //   productBrand: "Davert",
  //   capacity: 3,
  // },

  // const [productDetailList, setProductDetail] = useState([
  //   {
  //     productID: "1",
  //     fatLevel: "high",
  //     fat: 28,
  //     sugarLevel: "moderate",
  //     sugar: 12,
  //     saltLevel: "small",
  //     salt: 0.06,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "2",
  //     fatLevel: "small",
  //     fat: 1.8,
  //     sugarLevel: "small",
  //     sugar: 2.2,
  //     saltLevel: "small",
  //     salt: 0.01,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p3",
  //     fatLevel: "small",
  //     fat: 2,
  //     sugarLevel: "small",
  //     sugar: 4,
  //     saltLevel: "small",
  //     salt: 0,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p4",
  //     fatLevel: "moderate",
  //     fat: 15.6,
  //     sugarLevel: "small",
  //     sugar: 4.44,
  //     saltLevel: "small",
  //     salt: 0,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p5",
  //     fatLevel: "small",
  //     fat: 1.2,
  //     sugarLevel: "moderate",
  //     sugar: 6.1,
  //     saltLevel: "moderate",
  //     salt: 0.59,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p6",
  //     fatLevel: "moderate",
  //     fat: 14,
  //     sugarLevel: "high",
  //     sugar: 26,
  //     saltLevel: "moderate",
  //     salt: 0.51,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p7",
  //     fatLevel: "high",
  //     fat: 28,
  //     sugarLevel: "moderate",
  //     sugar: 12,
  //     saltLevel: "small",
  //     salt: 0.06,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p8",
  //     fatLevel: "high",
  //     fat: 28,
  //     sugarLevel: "moderate",
  //     sugar: 12,
  //     saltLevel: "small",
  //     salt: 0.06,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p9",
  //     fatLevel: "high",
  //     fat: 28,
  //     sugarLevel: "moderate",
  //     sugar: 12,
  //     saltLevel: "small",
  //     salt: 0.06,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p10",
  //     fatLevel: "high",
  //     fat: 28,
  //     sugarLevel: "moderate",
  //     sugar: 12,
  //     saltLevel: "small",
  //     salt: 0.06,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  //   {
  //     productID: "p11",
  //     fatLevel: "high",
  //     fat: 28,
  //     sugarLevel: "moderate",
  //     sugar: 12,
  //     saltLevel: "small",
  //     salt: 0.06,
  //     productDescription: ["D1: .....", "D2: ....."],
  //   },
  // ]);

  var isAvailable = (capacity) => {
    if (capacity > 0) return "Available";
    else return "Not Available";
  };

  const [shoppingCartID, setShoppingCartID] = useState("134134");
  const clickShoppingCart = async (id) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, id);
  }; 
  // if the item is not avialable, it cannot be added to the cart.
  const handleClick = () => {
    if (product?.capacity === 0){
      message.error("Sorry, this item is not available.");
    }
    else{
      clickShoppingCart(id);
    }
  };

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
            <img src={product?.imageUrl}></img>
          </div>
          <div className="pd_top_right">
            {/* product-name */}
            <h2>{product?.productName}</h2>
            {/* brand */}
            <p>Brand: {product?.productBrand}</p>
            {/* nutri-score */}
            <Nutri nutri={product?.nutriScore} />
            <div className="pd_top_right_bottom">
              <div className="left">
                <div className="price">{product?.productPrice}€</div>
                <div className="available">
                  {isAvailable(product?.capacity)}
                </div>
              </div>
              <div className="right">
                {/* add to shopping cart button */}
                <AddToScButton  onClick={handleClick} disabled={product?.capacity === 0}/>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_content_bottom">
          <h3>Nutritional Information</h3>
          <div class="nutri_info">
            <ContentLevel degree={productDetail?.fatLevel} />
            Fat in {productDetail?.fatLevel} amounts ({productDetail?.fat}%)
          </div>
          <div class="nutri_info">
            <ContentLevel degree={productDetail?.sugarLevel} />
            Sugar in {productDetail?.sugarLevel} amounts ({productDetail?.sugar}
            %)
          </div>
          <div class="nutri_info">
            <ContentLevel degree={productDetail?.saltLevel} />
            Salt in {productDetail?.saltLevel} amounts ({productDetail?.salt}%)
          </div>

          <h3>Other Product Description</h3>
          {productDetail?.productDescription?.map((descriptionItem) => {
            return (
              <div>
                <p>{descriptionItem}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
