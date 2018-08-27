import React, { Component } from 'react'
import PostComponent from './PostComponent/PostComponent'
import RightPanelComponent from './RightPanelComponent/RightPanelComponent'

export default class ContentComponent extends Component {
  state = {
    posts : [{
        postProfilePicture : "https://instagram.fkul13-1.fna.fbcdn.net/vp/9e219327da23beac4ee627eec49ca251/5BF5681F/t51.2885-19/s150x150/23596508_1565682580166230_6436913588694155264_n.jpg",
        postUserName : "emadphotography",
        postUserLocation : "Kuala Lumpur",
        postImage : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg",
        totalLikes : 120,
        caption: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      postProfilePicture : "https://instagram.fkul13-1.fna.fbcdn.net/vp/6c1f7088a020b2ff724fccad0b1cd7f8/5BF99C38/t51.2885-19/s150x150/21879055_1885980528322799_5896753844141948928_n.jpg",
      postUserName : "TomHanks",
      postUserLocation : "Texas",
      postImage : "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg",
      totalLikes : 220,
      caption: "Look at this nice image"
  },{
    postProfilePicture : "https://instagram.fkul13-1.fna.fbcdn.net/vp/38ddd28daa8fac59d5af4a9406cb1808/5C0A2935/t51.2885-19/s150x150/19931902_1878132969118433_195487403572461568_a.jpg",
    postUserName : "Nina",
    postUserLocation : "Berlin",
    postImage : "https://images.pexels.com/photos/371530/pexels-photo-371530.jpeg",
    totalLikes : 56,
    caption: "Another caption"
}],
isShared : false,
userProfile : {
  userName : "emadphotography",
  fullName : "Emad Dehnavi" ,
  profilePic : "https://instagram.fkul13-1.fna.fbcdn.net/vp/9e219327da23beac4ee627eec49ca251/5BF5681F/t51.2885-19/s150x150/23596508_1565682580166230_6436913588694155264_n.jpg"
}
}

componentDidMount() {
  console.log(this.context)
}

handleShare = (data) => {
  this.setState((prevState,prevProps) => {
    return { isShared : data }
  })
}

  render() {
    return (
      <div className="container">
        <div className="row fullWidth mb-3">
            <div className="col-8">
                {this.state.posts.map(post => {
                  return <PostComponent getSharedData={this.handleShare} postData ={post} />
                })}
            </div>
            <div className="col-4">
                <RightPanelComponent postData= {this.state.userProfile} />
            </div>
        </div>
      </div>
    )
  }
}
