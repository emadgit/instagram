import React from 'react'
import './PostComponent.css'

export default (props) => {
  return (
    <div className="postHeader">
      <span className="userProfilePicture">
        <img src={props.postData.postProfilePicture} />
      </span>
      <span className="userNameTitle">
        {props.postData.postUserName}
      </span>
      <span className="userLocation">{props.postData.postUserLocation}</span>
    </div>
  )
}
