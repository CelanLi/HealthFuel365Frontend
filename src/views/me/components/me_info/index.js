import React from 'react'
import User from "../../../../assets/images/myaccount/tax-inspector.png"

//import style
import "./index.css"

function MyInfo({ userAccount }) {
    // const userAccount =
    // {
    //     username: "Heinz",
    //     email: "Heinz1973@gmail.com",
    // };
  return (
    <div className="me-info-wrap">
        <img src={User} className="me-info-avatar" />
        <div className="myaccount-information-column">
            <p className="myaccount-nav-title">{userAccount.username}</p>
        </div>
    </div>
  )
}

export default MyInfo