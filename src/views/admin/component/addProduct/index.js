//ANTD components
import React, { useState } from "react";
import { Modal, Input, Space, message, Select } from "antd";
import "./index.css";

import { addProduct, updateProduct } from "../../../../services/adminService";
import { async } from "q";

function AddProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [nutriScore, setNutriScore] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [fat, setFat] = useState("");
  const [sugar, setSugar] = useState("");
  const [salt, setSalt] = useState("");
  const [fatLevel, setFatLevel] = useState("");
  const [sugarLevel, setSugarLevel] = useState("");
  const [saltLevel, setSaltLevel] = useState("");
  const [ingredients, setIngredients] = useState("unknown");
  const [allergens, setAllergens] = useState("unknown");
  const [nova, setNova] = useState("unknown");
  const [energy, setEnergy] = useState("unknown");
  const [fiber, setFiber] = useState("unknown");
  const [proteins, setProteins] = useState("unknown");
  const [messageApi, contextHolder] = message.useMessage();
  const { Option } = Select;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (
      !productName ||
      !category ||
      !imageUrl ||
      !nutriScore ||
      !productBrand ||
      !productPrice ||
      !fat ||
      !fatLevel ||
      !salt ||
      !saltLevel ||
      !sugar ||
      !sugarLevel
    ) {
      messageApi.open({
        type: "error",
        content: "Please fill in all necessary fields",
      });
      return;
    }
    console.log(nova + "   nova");
    await addProduct({
      productID: "1",
      category: category,
      imageUrl: imageUrl,
      nutriScore: nutriScore,
      capacity: capacity,
      productBrand: productBrand,
      productPrice: productPrice,
      productName: productName,
      vegan: vegan,
      vegetarian: vegetarian,
      fat: fat,
      sugar: sugar,
      salt: salt,
      fatLevel: fatLevel,
      sugarLevel: sugarLevel,
      saltLevel: saltLevel,
      description:
        "Ingredients: " +
        ingredients +
        ";" +
        " Allergens: " +
        allergens +
        ";" +
        " Nova: " +
        nova +
        ";" +
        " Energy: " +
        energy +
        ";" +
        " Fat: " +
        fat +
        ";" +
        " Sugar: " +
        sugar +
        ";" +
        " Fiber: " +
        fiber +
        ";" +
        " Proteins: " +
        proteins +
        ";" +
        " Salt: " +
        salt,
    });

    setIsModalOpen(false);

    //refresh page after add address
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleProductPriceChange = (e) => {
    const value = e.target.value;

    setTimeout(() => {
      if (!isNaN(value)) {
        setProductPrice(value);
      } else {
        messageApi.open({
          type: "error",
          content: "Please enter a valid product price (numeric value)",
        });
      }
    });
  };

  const handleSugarChange = (e) => {
    const value = e.target.value;

    setTimeout(() => {
      if (!isNaN(value)) {
        setSugar(value);
      } else {
        messageApi.open({
          type: "error",
          content: "Please enter a valid sugar content (numeric value)",
        });
      }
    });
  };
  const handleCapicityChange = (e) => {
    const value = e.target.value;

    setTimeout(() => {
      if (!isNaN(value)) {
        setCapacity(value);
      } else {
        messageApi.open({
          type: "error",
          content: "Please enter a valid capacity (numeric value)",
        });
      }
    });
  };
  const handleFatChange = (e) => {
    const value = e.target.value;

    setTimeout(() => {
      if (!isNaN(value)) {
        setFat(value);
      } else {
        messageApi.open({
          type: "error",
          content: "Please enter a valid fat content (numeric value)",
        });
      }
    });
  };
  const handleSaltChange = (e) => {
    const value = e.target.value;

    setTimeout(() => {
      if (!isNaN(value)) {
        setSalt(value);
      } else {
        messageApi.open({
          type: "error",
          content: "Please enter a valid salt content (numeric value)",
        });
      }
    });
  };
  return (
    <div className="addProduct">
      {contextHolder}
      <div className="product_add_button" type="primary" onClick={showModal}>
        + Create
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        width="1000px"
        wrapClassName="add_product_model"
      >
        <div className="add_product_title">Add Product</div>
        <div className="Short_Field">
          <div className="product_name">
            <div className="product_name_text">
              <sup>*</sup>Product Name:
            </div>
            <div className="product_name_input">
              <Input
                className="productName"
                defaultValue={""}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>
          <div className="Category">
            <div className="Category_text">
              <sup>*</sup>Category:
            </div>
            <div className="Category_input">
              <Select
                defaultValue={""}
                value={category}
                onChange={(value) => setCategory(value)}
              >
                <Option value="staple">staple</Option>
                <Option value="snacks">snacks</Option>
                <Option value="drinks">drinks</Option>
                <Option value="flavorings">flavorings</Option>
                <Option value="supplements">supplements</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="Image_URL">
          <div className="ImageUrl_Text">
            <sup>*</sup>Image Url:
          </div>
          <div className="ImageUrl_Input">
            <Input
              defaultValue={""}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="Short_Field1">
          {" "}
          <div className="Nutri-Score">
            <div className="NutriScore_text">
              <sup>*</sup>Nutri-Score:
            </div>
            <div className="NutriScore_input">
              <Select
                defaultValue={""}
                value={nutriScore}
                onChange={(value) => setNutriScore(value)}
              >
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
                <Option value="D">D</Option>
                <Option value="E">E</Option>
              </Select>
            </div>
          </div>
          <div className="Capacity">
            <div className="Capacity_text">
              <sup>*</sup>Capacity:
            </div>
            <div className="Capacity_input">
              <Input
                defaultValue={""}
                value={capacity}
                onChange={handleCapicityChange}
              />
            </div>
          </div>
          <div className="Product_brand">
            <div className="Product_brand_text">
              <sup>*</sup>Product Brand:
            </div>
            <div className="Product_brand_input">
              <Input
                defaultValue={""}
                value={productBrand}
                onChange={(e) => setProductBrand(e.target.value)}
              />
            </div>
          </div>
          <div className="Product_price">
            <div className="Product_price_text">
              <sup>*</sup>Product Price:
            </div>
            <div className="Product_price_input">
              <Input
                defaultValue={""}
                value={productPrice}
                onChange={handleProductPriceChange}
              />
            </div>
          </div>
        </div>
        <div className="Short_Field2">
          <div className="Vegan">
            <div className="Vegan_text">
              <sup>*</sup>Vegan:
            </div>
            <div className="Vegan_input">
              <Select
                defaultValue={""}
                value={vegan}
                onChange={(value) => setVegan(value)}
              >
                <Option value="True">True</Option>
                <Option value="False">False</Option>
              </Select>
            </div>
          </div>
          <div className="Vegetarian">
            <div className="Vegetarian_text">
              <sup>*</sup>Vegetarian:
            </div>
            <div className="Vegetarian_input">
              <Select
                defaultValue={""}
                value={vegetarian}
                onChange={(value) => setVegetarian(value)}
              >
                <Option value="True">True</Option>
                <Option value="False">False</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="Short_Field6">
          <div className="Fat">
            <div className="Fat_text">
              <sup>*</sup>Fat:
            </div>
            <div className="Fat_input">
              <Input defaultValue={""} value={fat} onChange={handleFatChange} />
            </div>
          </div>
          <div className="sugar">
            <div className="Sugar_text">
              <sup>*</sup>Sugar:
            </div>
            <div className="Sugar_input">
              <Input
                defaultValue={""}
                value={sugar}
                onChange={handleSugarChange}
              />
            </div>
          </div>
          <div className="Salt">
            <div className="Salt_text">
              <sup>*</sup>Salt:
            </div>
            <div className="Salt_input">
              <Input
                defaultValue={""}
                value={salt}
                onChange={handleSaltChange}
              />
            </div>
          </div>
        </div>
        <div className="Short_Field3">
          <div className="Fat_level">
            <div className="Fat_level_text">
              <sup>*</sup>Fat Level:
            </div>
            <div className="Fat_level_input">
              <Select
                defaultValue={""}
                value={fatLevel}
                onChange={(value) => setFatLevel(value)}
              >
                <Option value="high">high</Option>
                <Option value="moderate">moderate</Option>
                <Option value="low">low</Option>
              </Select>
            </div>
          </div>
          <div className="Salt_level">
            <div className="Salt_level_text">
              <sup>*</sup>Salt Level:
            </div>
            <div className="Salt_level_input">
              <Select
                defaultValue={""}
                value={saltLevel}
                onChange={(value) => setSaltLevel(value)}
              >
                <Option value="high">high</Option>
                <Option value="moderate">moderate</Option>
                <Option value="low">low</Option>
              </Select>
            </div>
          </div>
          <div className="Sugar_level">
            <div className="Sugar_level_text">
              <sup>*</sup>Sugar Level:
            </div>
            <div className="Sugar_level_input">
              <Select
                defaultValue={""}
                value={sugarLevel}
                onChange={(value) => setSugarLevel(value)}
              >
                <Option value="high">high</Option>
                <Option value="moderate">moderate</Option>
                <Option value="low">low</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="Ingredients">
          <div className="Ingredients_text">
            <sup>*</sup>Ingredients:
          </div>
          <div className="Ingredients_input">
            <Input
              defaultValue={""}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
        </div>
        <div className="Short_Field4">
          <div className="Allergens">
            <div className="Allergens_text">
              <sup>*</sup>Allergens:
            </div>
            <div className="Allergens_input">
              <Input
                defaultValue={""}
                value={allergens}
                onChange={(e) => setAllergens(e.target.value)}
              />
            </div>
          </div>
          <div className="Nova">
            <div className="Nova_text">
              <sup>*</sup>Nova:
            </div>
            <div className="Nova_input">
              <Select
                defaultValue={""}
                value={nova}
                onChange={(value) => setNova(value)}
              >
                <Option value="1.0">1.0</Option>
                <Option value="2.0">2.0</Option>
                <Option value="3.0">3.0</Option>
                <Option value="4.0">4.0</Option>
                <Option value="unknown">unknown</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="Short_Field5">
          <div className="Energy">
            <div className="Energy_text">
              <sup>*</sup>Energy:
            </div>
            <div className="Energy_input">
              <Input
                defaultValue={""}
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
              />
            </div>
          </div>
          <div className="Fiber">
            <div className="Fiber_text">
              <sup>*</sup>Fiber:
            </div>
            <div className="Fiber_input">
              <Input
                defaultValue={""}
                value={fiber}
                onChange={(e) => setFiber(e.target.value)}
              />
            </div>
          </div>
          <div className="Proteins">
            <div className="Proteins_text">
              <sup>*</sup>Proteins:
            </div>
            <div className="Proteins_input">
              <Input
                defaultValue={""}
                value={proteins}
                onChange={(e) => setProteins(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddProduct;
