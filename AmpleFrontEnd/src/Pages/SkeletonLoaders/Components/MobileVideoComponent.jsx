import React from "react"

function MobileVideoSkeletonComponent(props){
  return(
    <div className="mobile_item_container_skeleton">
        <div muted={true} className="mobile_item_skeleton"></div>
      <div className="component_description_skeleton">
        <div className="component_avi_skeleton"></div>
        <span></span>
      </div>
      <p></p>
      <p></p>
    </div>
  )
}

export default MobileVideoSkeletonComponent
