import React from 'react'

export default (props) => {
    console.log(props)
  return (
    <div className="profilePic relativePosition">
        <img src={props.userProfile.profilePic} />
        <span className="userName">{props.userProfile.userName}</span>
        <span className="actualName">{props.userProfile.fullName}</span>
      
    </div>
  )
}
