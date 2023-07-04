import "./index.css";
import React from "react";
import { Table, Select, Input, message } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllOrdersWithService, updateOrder } from "../../../services/adminService";
const { Option } = Select;

function OrderManagement () {
  // data: list of order
  const [orderList,setOrderList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const statusFilter = [
    {
      text: "Processing",
      value: "Processing",
    },
    {
      text: "Shipped",
      value: "Shipped",
    },
    {
      text: "Delivered",
      value: "Delivered",
    },
    {
      text: "Completed",
      value: "Completed",
    },
    {
      text: "Cancelled",
      value: "Cancelled",
    }
  ]
  // define columns of data
  const columns= [
    {
      /* order.orderID */
      title: "OrderID",
      width: 120,
      dataIndex: "orderID",
      key: "orderID",
      fixed: "left"
    },
    {
      /* order.userID */
      title: "OrdererID",
      width: 120,
      dataIndex: "userID",
      key: "userID",
      fixed: "left"
    },
    {
      /* order.orderDate */
      title: "Order Date",
      width: 180,
      dataIndex: "orderDate",
      key: "orderDate",
      sorter: (a, b) => a.orderDate.localeCompare(b.orderDate)
    },
    {
       /* order.totalPrice */
      title: "Total Price",
      width: 120,
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      /* services.isDHL services.rapidShipping services.sendAsAGift */
      title: "Shipping & Packing Services",
      width: 300,
      dataIndex: "services",
      key: "services",
      filters: [
        {
          text: "Standard shipping via DHL",
          value: "Standard shipping via DHL",
        },
        {
          text: "Standard shipping via HERMES",
          value: "Standard shipping via HERMES",
        },
        {
          text: "Rapid packaging and shipping",
          value: "Rapid packaging and shipping",
        },
        {
          text: "Send as a gift",
          value: "Send as a gift",
        },
      ],
      onFilter: (value, record) => record.services.includes(value),
    },
    {
      /* order.shipTo */
      title: "Order Address",
      width: 300,
      dataIndex: "orderAddress",
      key: "orderAddress",
    },
    {
      /* order.orderStatus */
      title: "Order Status",
      width: 150,
      fixed: "right",
      dataIndex: "orderStatus",
      key: "orderStatus",
      editable: true, 
      filters: statusFilter,
      onFilter: (value, record) => record.orderStatus === value,
      render: (orderStatus, order) => {
        // check if current row is in editing
        const isEditing = order.orderID === editingOrder;
        console.log(isEditing+ orderStatus + order.orderID)
        return isEditing ? (
          <Select
          value={editingStatus}
          onChange={(value) => setEditingStatus(value)}
          >
            {statusFilter.map((filter) => (
              <Option key={filter.value} value={filter.value}>
                {filter.text}
              </Option>
            ))}
          </Select>
          ) : (
          orderStatus
          );
      }
    },
    {
      /* order.trackingNumber */
      title: "tracking Number",
      width: 150,
      fixed: "right",
      dataIndex: "trackingNumber",
      key: "trackingNumber",
      editable: true, 
      render: (trackingNumber,order) => {
        // check if current row is in editing
        const isEditing = order.orderID === editingOrder;
        return isEditing ? (
          <Input
            value={editingTrackingNumber}
            onChange={(event) => setEditingTrackingNumber(event.target.value)}
          />
          ) : (
          trackingNumber
          );
      }
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (order) => {
        // check if current row is in editing
        const isEditing = order.orderID === editingOrder;
        return isEditing ? (
          <div className="operation-column">
            <Link onClick={handleEditCancel} >Cancel</Link>
            <Link onClick={handleEditSave}>Save</Link>
          </div>
          ) : (
          <div className="operation-column">
            <Link onClick={() => handleEdit(order.orderID,order.orderStatus,order.trackingNumber)}>Edit</Link>
            <Link to = { "orderdetail/" + order.orderID + `?services=${encodeURIComponent(JSON.stringify(order.services))}` }>Details</Link>
          </div>
          );
      }
    }
  ];
  // initialization data
  useEffect(() => {
    setOrder();
  },[])
  const setOrder = async () => {
    setIsLoading(true);
    try{
    //returns both orders and service data
    const [orders,services] = await getAllOrdersWithService();
    const formattedData = orders.map((order, index) => {
      //find corresponding services
      const service = services.find((s) => s.orderID === order.orderID);
      return {
        key: String(index + 1),
        /* to do */
        orderID: order.orderID,
        userID: order.userID,
        orderDate: order.orderDate,
        totalPrice: order.totalPrice + "€",
        services: service!==undefined? formattedService(service) : "",
        orderAddress: formattedAddress(order.shipTo),
        trackingNumber: order.trackingNumber,
        orderStatus: order.orderStatus,
      }
    });
    setOrderList(formattedData);
    setIsLoading(false);
    }
    catch (error) {
      console.error("error set orders with services:", error);
    }
  }
  const formattedAddress = (address) =>{
    return "Receiver:  " + address.receiver + "\n"
    + "Tel: " + address.tel + "\n"
    + "Address: "  + address.additionalAddress + ", " + address.street + ", " + address.postCode + ", " + address.city
  }
  const formattedService = (service) => {
    let s = "";
    if (service?.isDHL){
      s += "Standard shipping via DHL\n";
    }
    else if (service?.rapidShipping){
      s += "Rapid packaging and shipping\n";
    }
    else{
      s += "Standard shipping via HERMES\n";
    }
    if (service?.sendAsAGift){
      s += "Send as a gift";
    }
    return s
  }
  // save the orderID of editing row
  const [editingOrder, setEditingOrder] = useState("");
  // save the corresponding status of editing row
  const [editingStatus, setEditingStatus] = useState("");
  // save the corresponding Tracking Number of editing row
  const [editingTrackingNumber, setEditingTrackingNumber] = useState("-");
  // handle edit clink: start editing, save the orderID, current status, TrackingNumber of editing row
  const handleEdit = (id,status,trackingNumber) => {
    setEditingOrder(id);
    setEditingStatus(status);
    setEditingTrackingNumber(trackingNumber);
  };
  // cancel edit: reset orderID and order status
  const handleEditCancel = ()=> {
     setEditingOrder("");
     setEditingStatus("");
     setEditingTrackingNumber("-");
  };
  // save edit 
  const handleEditSave = async () => {
    if (editingTrackingNumber.length>0){
      await updateOrder(editingOrder, editingStatus, editingTrackingNumber);
    }
    else{
      await updateOrder(editingOrder, editingStatus, "-");
    }
      setEditingOrder("");
      setOrder();
  }
 
  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <Table 
          columns={columns}
          dataSource={orderList}
          scroll={{
            x: 1200,
          }}
          pagination={{
            showTotal: (total) => (total + " orders"),
          }}
          className="table"
        />
    )}
  </div>
  );
}

export default OrderManagement;