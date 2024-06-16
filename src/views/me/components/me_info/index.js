import React from 'react'
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