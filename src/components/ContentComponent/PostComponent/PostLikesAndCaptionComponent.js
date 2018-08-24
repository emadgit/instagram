import React from 'react'

export default (props) => {
  return (
    <div className="postCaption">
      <div className="row">
        <div className="col">
            <span className="likes">{props.postData.totalLikes}</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <span className="postUserName">{props.postData.postUserName} <span>{props.postData.caption}</span></span>
        </div>
      </div>
    </div>
  )
}
