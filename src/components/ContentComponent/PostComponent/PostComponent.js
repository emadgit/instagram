import React, { Component } from 'react'
import PostHeaderComponent from './PostHeaderComponent'
import PostImageComponent from './PostImageComponent'
import PostIconBarComponent from './PostIconBarComponent'
import PostLikesAndCaptionComponent from './PostLikesAndCaptionComponent'

export default class PostComponent extends Component {
    handleShare = (data) => {
        this.props.getSharedData(data)
    }
  render() {
    return (
        <div className="p-2">
        <PostHeaderComponent postData={this.props.postData} />
        <PostImageComponent postData={this.props.postData}/>
        <PostIconBarComponent callBackFromParrent={this.handleShare}  leftIcons={["heart","comment","arrow-alt-circle-down"]} rightIcon="bookmark" />
        <PostLikesAndCaptionComponent postData={this.props.postData} />
      </div>
    )
  }
}