import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { message, Modal } from "antd";
import Nutri from "../../components/nutri";
import Nova from "./components/nova";
import ContentLevel from "./components/content_level";
import AddToScButton from "../../components/add_to_sc_button";
import Vegetarian from "../../assets/images/vegetarian.png";
import Vegan from "../../assets/images/vegan.png";
import { getDetail } from "../../services/productDetailService";
import { addShoppingCart } from "../../services/productService";
import { getCookie } from "../../util/cookie";
import { getUser } from "../../services/userService";
import { Collapse, Table } from "antd";
const { Panel } = Collapse;

function Page() {
  // get corresponding product data by comparing the product id
  var pathname = window.location.pathname;
  var id = pathname.split("/")[3];
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [shoppingCartID, setShoppingCartID] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
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
    (async () => {
      const cookie = getCookie("login");
      if (cookie) {
        const userAccount = await getUser();
        const userID = userAccount.id;
        setShoppingCartID(userID);
      } else {
        messageApi.open({
          type: "error",
          content: "Please log in!",
        });
      }
    })();
  }, []);

  var isAvailable = (capacity) => {
    if (capacity > 0) return "Available";
    else return "Not Available";
  };
  const showLoginReminder = () => {
    Modal.error({
      title: "please log in",
      content: "Before adding items to your shopping cart, log in is reuired",
      onOk: () => {
        window.location.href = "http://localhost:3000";
      },
    });
  };

  const clickShoppingCart = async (id) => {
    // wait for shoppingCartID
    await addShoppingCart(shoppingCartID, id);
  };
  // if the item is not avialable, it cannot be added to the cart.
  const handleClick = () => {
    const cookie = getCookie("login");
    if (!cookie) {
      showLoginReminder();
    } else if (product?.capacity === 0) {
      message.error("Sorry, this item is not available.");
    } else {
      clickShoppingCart(id);
    }
  };

  const getDetailDict = () => {
    const detail = productDetail?.productDescription;
    const dict = {};
    const descriptions = detail.split(";");
    descriptions.forEach((description) => {
      const keyValue = description.split(":");
      if (keyValue.length === 2) {
        const key = keyValue[0].trim();
        const value = keyValue[1].trim();
        dict[key] = value;
      }
    });
    return dict;
  };
  const detailDict = productDetail?.productDescription ? getDetailDict() : {};

  // data for nutrition facts table
  const columns = [
    {
      title: "Nutrition facts",
      dataIndex: "nutri",
    },
    {
      title: "As sold for 100 g / 100 ml",
      dataIndex: "content",
    },
  ];
  const data = Object.keys(detailDict)
    .map((key) => {
      if (!["Ingredients", "Allergens", "Nova"].includes(key)) {
        return {
          nutri: key,
          content: detailDict[key],
        };
      }
      return null;
    })
    .filter((nutriFact) => nutriFact != null);

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
                <AddToScButton
                  onClick={handleClick}
                  disabled={product?.capacity === 0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pd_content_bottom">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition="end"
          >
            <Panel header="Nutritional Information" key="1">
              {/* nutritional information including fat/ sugar/ salz */}
              <div class="info">
                <ContentLevel degree={productDetail?.fatLevel} />
                <p>
                  {" "}
                  Fat in {productDetail?.fatLevel} amount ({productDetail?.fat}
                  %){" "}
                </p>
              </div>
              <div class="info">
                <ContentLevel degree={productDetail?.sugarLevel} />
                <p>
                  {" "}
                  Sugar in {productDetail?.sugarLevel} amount (
                  {productDetail?.sugar}%){" "}
                </p>
              </div>
              <div class="info">
                <ContentLevel degree={productDetail?.saltLevel} />
                <p>
                  {" "}
                  Salt in {productDetail?.saltLevel} amount (
                  {productDetail?.salt}%){" "}
                </p>
              </div>
              {/* nutritional table */}
              {data.length > 0 && (
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="table"
                />
              )}
            </Panel>
          </Collapse>
          {/* ingredients including ingredients, allergens, vegan, vegetarian */}
          <Collapse bordered={false} expandIconPosition="end">
            {"Ingredients" |
            ("Allergens" in detailDict) |
            productDetail.vegetarian |
            productDetail.vegan ? (
              <Panel header="Ingredients">
                <p>{detailDict["Ingredients"]}</p>
                {"Allergens" in detailDict && (
                  <p>Allergens: {detailDict["Allergens"]}</p>
                )}
                <div className="row">
                  {productDetail.vegan ? (
                    <div class="info">
                      <img src={Vegan} className="icon" />
                      <p> Vegan </p>
                    </div>
                  ) : null}
                  {productDetail.vegetarian ? (
                    <div class="info">
                      <img src={Vegetarian} className="icon" />
                      <p> Vegetarian </p>
                    </div>
                  ) : null}
                </div>
              </Panel>
            ) : null}
          </Collapse>
          {/* food processing */}
          <Collapse bordered={false} expandIconPosition="end">
            {"Nova" in detailDict && detailDict["Nova"] !== "nan" && (
              <Panel header="Food Processing">
                <Nova nova={detailDict["Nova"]} />
              </Panel>
            )}
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Page;
