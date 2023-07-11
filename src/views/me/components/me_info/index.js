import React, { useEffect } from 'react'
import User from "../../../../assets/images/myaccount/tax-inspector.png"

//import style
import "./index.css"

function MyInfo({ username }) {

  return (
    <div className="me-info-wrap">
        <span className="me-info-title">{username}</span>
    </div>
  )
}

export default MyInfo