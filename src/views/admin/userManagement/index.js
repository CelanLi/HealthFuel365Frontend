import "./index.css";
import React from "react";
import { Table, Input, message } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUserWithProfile, deleteUserWithProfile, updateUserEmail} from "../../../services/adminService";

function UserManagement () {
  // data: list of user and corresponding profile
  const [userProfileList,setUserProfileList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  // define columns of data
  const columns= [
    {
      title: "UserID",
      width: 120,
      dataIndex: "userID",
      key: "userID",
      fixed: "left"
    },
    {
      title: "UserName",
      width: 120,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      // make email column editable
      editable: true, 
      render: (email, user) => {
        // check if current row is in editing
        const isEditing = user.userID === editingUser;
        return isEditing ? (
          <Input
            value={editingEmail}
            onChange={(event) => setEditingEmail(event.target.value)}
          />
          ) : (
          email
          );
      }
    },
    {
      title: "HealthGoal",
      dataIndex: "healthGoal",
      key: "healthGoal"
    },
    {
      title: "EaterType",
      dataIndex: "eaterType",
      key: "EaterType"
    },
    {
      title: "Preference",
      dataIndex: "preference",
      key: "preference"
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (user) => {
        // check if current row is in editing
        const isEditing = user.userID === editingUser;
        return isEditing ? (
          <div className="operation-column">
            <Link onClick={handleEditCancel} >Cancel</Link>
            <Link onClick={handleEditSave}>Save</Link>
          </div>
          ) : (
          <div className="operation-column">
            <Link onClick={() => handleEdit(user.userID,user.email)}>Edit</Link>
            <Link onClick={() => handleDeleteUser(user.userID)}>Remove</Link>
          </div>
          );
      }
    }
  ];
  // initialization data
  useEffect(() => {
    setUsers();
  },[])
  const setUsers = async () => {
    setIsLoading(true);
    try{
    // returns both user and profile data
    const [user,profiles] = await getAllUserWithProfile();
    const formattedData = user.map((user, index) => {
      // find corresponding profile
      const profile = profiles.find((p) => p.userID === user._id);
      return {
        key: String(index + 1),
        userID: user._id,
        name: user.username,
        email: user.email,
        healthGoal: profile?.losingWeightAsGoal? "lose weight":
          profile?.keepGoodDietAsGoal ? "Keep a good diet" :
          "",
        eaterType: profile?.typeOfEater,
        preference: formattedPreference(profile)
      }
    });
    setUserProfileList(formattedData);
    setIsLoading(false);
    }
    catch (error) {
      console.error("error set users with profiles:", error);
    }
  }
  const formattedPreference = (user) => {
      let preference = "";
      if (user?.lowInfat){
        preference += "low in fat\n";
      }
      if(user?.lowInSalt){
        preference += "low in salt\n";
      }
      if(user?.lowInSugar){
        preference += "low in sugar\n";
      }
      preference += "Nutri-score " + user?.nutriPreference.join(", ");
      return preference
  }

  // save the userID of editing row
  const [editingUser, setEditingUser] = useState("");
  // save the corresponding email of editing row
  const [editingEmail, setEditingEmail] = useState("");
  // handle edit clink: start editing, save the userID and current email of editing row
  const handleEdit = (id,oldEmail) => {
    setEditingUser(id);
    setEditingEmail(oldEmail);
  };
  // cancel edit: reset userID and email
  const handleEditCancel = ()=> {
     setEditingUser("");
     setEditingEmail("");
  };
  // save edit
  const handleEditSave = async () => {
    const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (emailFormat.test(editingEmail)) {
      await updateUserEmail(editingUser, editingEmail);
      setEditingUser("");
      setUsers();
    }
    else{
      message.error("Invalid email format.")
    }
  }
  
  // used to delete illeage user
  const handleDeleteUser = async (userID) => {
    console.log(userID)
    await deleteUserWithProfile(userID);
    // reset users after delete one
    setUsers();
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
          dataSource={userProfileList}  
          scroll={{
            x: 1200,
          }}
          pagination={{
            showTotal: (total) => (total + " users"),
          }}
          className="table"
        />
    )}
    </div>
  );
}

export default UserManagement;