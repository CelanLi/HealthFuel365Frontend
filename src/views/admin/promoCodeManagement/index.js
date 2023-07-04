import "./index.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Table, message } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllPromoCode,
  deletePromoCode,
} from "../../../services/adminService";
import AddPromoCode from "./components/add_promocode";
import EditPromoCode from "./components/edit_promocode";

function PromoCodeManagement() {
  const [keyWords, setKeyWords] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (keyWords.trim()) {
      // navigate("/admin/promoCodeManagement?search=" + keyWords);
      await setPromoCodes();
    // }
  };

  const [promoCodeList, setPromoCodeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // define columns of data

  const columns = [
    {
      title: "PromoCodeID",
      width: 180,
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
    },
    {
      title: "PromoCode",
      width: 160,
      dataIndex: "code",
      key: "code",
      fixed: "left",
      sorter: (a, b) => a.code.localeCompare(b.code),
    },
    {
      title: "Expiration Date",
      width: 200,
      dataIndex: "showDate",
      key: "showDate",
      sorter: (a, b) => a.showDate.localeCompare(b.showDate),
    },
    {
      title: "Discount Rate",
      width: 150,
      dataIndex: "discountRate",
      key: "discountRate", 
    },
    {
      title: "minThreshold",
      width: 150,
      dataIndex: "minThreshold",
      key: "minThreshold", 
    },
    {
      title: "Users who have already used it",
      dataIndex: "usedUser",
      key: "usedUser",
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (promocode) => {
        return (
          <div className="operation-column">
            {/* <Link onClick={() => handleEdit(promocode.promocodeID)}>Edit</Link> */}
            <EditPromoCode
              info={promocode}
              getlist={setPromoCodes}
            ></EditPromoCode>
            {/* <Link onClick={() => handleEdit(promocode._id)}>Edit</Link> */}
            <Link onClick={() => handleDeletePromoCode(promocode._id)}>
              Remove
            </Link>
          </div>
        );
      },
    },
  ];

  // initialization data
  useEffect(() => {
    setPromoCodes();
  }, []);

  const setPromoCodes = async () => {
    setIsLoading(true);
    try {
      // returns promocodes
      const formattedData = await getAllPromoCode({ keyWords });
      const showData = formattedData.map((item) => {
        const newDate = new Date(item.expirationDate);
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const date = newDate.getDate();
        let usedUsersList = "";
        if (item.usedUser.length === 0) {
          usedUsersList = "-";
        } else if (item.usedUser.length > 3) {
          usedUsersList = item.usedUser.slice(0, 3).join(", ") + " ...";
        } else {
          usedUsersList = item.usedUser.slice(0, 3).join(", ");
        }
        return {
          ...item,
          showDate: year + "-" + month + "-" + date,
          usedUser: usedUsersList,
        };
      }); 
      setPromoCodeList(showData);
      setIsLoading(false);
    } catch (error) {
      console.error("error set promocodes:", error);
    }
  };

  const handleDeletePromoCode = async (promocodeID) => {
    console.log("promocodeID: " + promocodeID);
    await deletePromoCode({ promoCodeID: promocodeID });
    setPromoCodes();
  };

  return (
    <div className="promocode_manage_wrap">
      {/* &lt;represent< */}
      <div className="pc_bread_crumb">Product Management ＞</div>
      <div className="pc_top">
        <div className="pc_search_container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={keyWords}
              onChange={(e) => setKeyWords(e.target.value)} 
              placeholder="PromoCode Name"
            />
            <button type="submit" />
          </form>
        </div>
        <div className="pc_add_code">
          <AddPromoCode getlist={setPromoCodes}></AddPromoCode>
        </div>
      </div>

      {/* main content */}
      <div className="pc_content">
        <div>
          {isLoading ? (
            <div className="loading">
              <p>Loading...</p>
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={promoCodeList}
              scroll={{
                x: 1200,
              }}
              pagination={{
                showTotal: (total) => total + " promoCodes",
              }}
              className="table"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PromoCodeManagement;
