import React from "react"
import {IoEllipsisHorizontal } from "react-icons/io5"

const VideoComponent = (props) => {
  let item = props.item
  return(
    <div className="video_component_item">
      <div className="video_component_video"></div>
      <div className="video_component_description">
        <span className="video_description">{item.title}</span>
        <div className="video_component_description_header">
          <div className="component_avi"></div>
          <span> User </span>
          <IoEllipsisHorizontal/>
        </div> {/*video_component_description_header*/}
      </div>{/*video_component_description*/}
    </div>
  )
}

export default VideoComponent
