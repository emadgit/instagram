import React from 'react'

export default (props) => {
  return (
    <div>
        <div className="logo">
            <span><img className="logoIcon" src={props.logoIcon} alt="Logo" /></span>
            <span className="logoSeperator"></span>
            <span className="logoTitle">{props.logoTitle}</span>
        </div>
    </div>
  )
}
