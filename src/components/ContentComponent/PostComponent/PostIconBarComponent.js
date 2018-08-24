import React, { Component } from 'react'

export default class PostIconBarComponent extends Component {

    share = () => {
        this.props.callBackFromParrent(true)
    }
    render() {
  return (
    <div className="postIconBar">
      <div className="row">
        <div className="col">
            <ul className="postIcons">
                {this.props.leftIcons.map(icon => {
                    return <li key={icon}><i className={"far " + "fa-" + icon} /></li>
                })}
            </ul>
        </div>
        <div className="col">
            <span className="rightIcon"><a onClick={this.share}><i className={"far " + "fa-" + this.props.rightIcon} /></a></span>
        </div>
      </div>
    </div>
  )}
}
