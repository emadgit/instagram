import React from 'react'

export default (props) => {
    console.log(props.icons)
  return (
    <div>
      <ul className="menuIcon">
       {props.icons.map(icon => {
           return <li key={icon} className={'far ' + 'fa-' + icon} />
       })}
      </ul>
    </div>
  )
}
