import React from 'react'
import UserProfileComponent from './UserPofileComponent'
import StoryComponent from './StoryComponent'

import './RightPanelComponent.css'

export default (props) => {
  return (
    <div>
      <UserProfileComponent userProfile = {props.postData} />
      <StoryComponent />
    </div>
  )
}
