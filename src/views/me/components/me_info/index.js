import React from 'react'
import User from "../../../../assets/images/myaccount/tax-inspector.png"

//import style
import "./index.css"

function MyInfo({ userAccount }) {
  return (
    <div className="me-info-wrap">
      <div className='me-info-background'>
        <span className="me-info-title">{userAccount.username}</span>
      </div>
    </div>
  )
}

export default MyInfo