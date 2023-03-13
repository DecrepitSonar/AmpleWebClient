import React, { useRef } from "react"
import {IoEllipsisHorizontal } from "react-icons/io5"
import { GiAerialSignal } from "react-icons/gi"
const VideoComponentSkeleton = () => { 
  return(
    <div className="video_component_item_skeleton">
      <div className="video_component_video_skeleton"/>
      <div className="video_component_description_skeleton">
        <div className="video_component_description_header_skeleton">
          <div className="component_avi_skeleton" />
          <span></span>
          <IoEllipsisHorizontal/>
        </div> {/*video_component_description_header*/}
        <div className="video_description_skeleton">
          <p></p>
          <p></p>
        </div>
      </div>{/*video_component_description*/}
    </div>
  )
}

export default VideoComponentSkeleton
