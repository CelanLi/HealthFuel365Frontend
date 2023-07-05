import "./index.css";
import React from "react";
import { Table, Input } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllUserWithProfile,
  deleteUserWithProfile,
  getProductsWithDetail,
  deleteProduct,
} from "../../../services/adminService";
import EditProduct from "../component/updateProduct";
import AddProduct from "../component/addProduct";

function ProductManagement() {
  // data: list of user and corresponding profile
  const [productsWithDetail, setProductsWithDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // define columns
  const columns = [
    {
      title: "product ID",
      width: 160,
      dataIndex: "productID",
      key: "productID",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      width: 200,
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      sorter: true,
      width: 100,
    },
    {
      title: "Vegan",
      dataIndex: "vegan",
      key: "vegan",
      width: 100,
    },
    {
      title: "Vegetarian",
      dataIndex: "vegetarian",
      key: "vegetarian",
      width: 100,
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
      width: 120,
    },
    {
      title: "Product Brand",
      dataIndex: "productBrand",
      key: "productBrand",
      width: 100,
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
      width: 100,
    },
    {
      title: "Nutri Score",
      dataIndex: "nutriScore",
      key: "nutriScore",
      width: 100,
    },
    {
      title: "Fat",
      dataIndex: "fat",
      key: "fat",
      width: 100,
    },
    {
      title: "Fat Level",
      dataIndex: "fatLevel",
      key: "fatLevel",
      width: 120,
    },
    {
      title: "Sugar",
      dataIndex: "sugar",
      key: "sugar",
      width: 100,
    },
    {
      title: "Sugar Level",
      dataIndex: "sugarLevel",
      key: "sugarLevel",
      width: 120,
    },
    {
      title: "Salt",
      dataIndex: "salt",
      key: "salt",
      width: 120,
    },
    {
      title: "Salt Level",
      dataIndex: "saltLevel",
      key: "saltLevel",
      width: 120,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
    },
    {
      title: "Image Url",
      dataIndex: "imageUrl",
      key: "imageUrl",
      width: 300,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (product) => (
        <div className="operation-column">
          <EditProduct productID={product.productID} />
          <Link onClick={() => handleDeleteProduct(product.productID)}>
            Remove
          </Link>
        </div>
      ),
    },
  ];
  // initialization data
  useEffect(() => {
    setProductList();
  }, []);
  const setProductList = async () => {
    setIsLoading(true);
    try {
      // returns products
      const [p, details] = await getProductsWithDetail(); //products and details
      const formattedData = p.map((p, index) => {
        //find corresponding detail
        const detail = details.find((d) => d.productID === p.productID);
        return {
          key: String(index + 1),
          productID: p.productID,
          category: p.category,
          imageUrl: p.imageUrl,
          nutriScore: p.nutriScore,
          capacity: p.capacity,
          productBrand: p.productBrand,
          productPrice: p.productPrice,
          productName: p.productName,
          vegan: detail?.vegan,
          vegetarian: detail?.vegetarian,
          fat: detail?.fat,
          sugar: detail?.sugar,
          salt: detail?.salt,
          fatLevel: detail?.fatLevel,
          sugarLevel: detail?.sugarLevel,
          saltLevel: detail?.saltLevel,
          description: detail?.description,
        };
      });
      setProductsWithDetail(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.error("error set products with profiles:", error);
    }
  };
  // used to delete illeage user
  const handleDeleteProduct = async (productID) => {
    console.log(productID);
    await deleteProduct(productID);
    // reset users after delete one
    setProductList();
  };
  // save the tracking the userID of editing row
  const [editingProduct, setEditingProduct] = useState("");
  // used to handle edit clink and save the userID of editing row
  const handleEdit = (i) => {
    setEditingProduct(i);
  };
  // used to edit email
  const handleProductEdit = async (editedProduct) => {
    //await updateEmail(userID, editedEmail);
    setEditingProduct("");
    setProductList();
  };

  return (
    <div className="product_manage_wrap">
      {/* &lt;represent< */}
      <div className="pc_bread_crumb">Product Management </div>
      <div className="pc_top">
        <div className="pc_add_code">
          <AddProduct></AddProduct>
        </div>
      </div>

      <div>
        {isLoading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={productsWithDetail}
            scroll={{
              x: 1200,
            }}
            pagination={{
              showTotal: (total) => total + " products",
            }}
            className="table"
          />
        )}
      </div>
    </div>
  );
}

export default ProductManagement;
