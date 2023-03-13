import React from "react"
import { IoEllipsisHorizontal } from "react-icons/io5"

function MobileVideoComponent(props){
  let item = props.item
  return(
    <div className="mobile_item_container">

        <video muted={true} className="mobile_item">
            <source src={item.contentURL} type="video/mp4"/>
        </video>
        
      <div className="component_description">
        <div className="component_avi"></div>
        <span>{item.name}</span>
      </div>
      <p>Description asfasdf asdfa sdf adf asdfasd fasd f ass </p>
    </div>
  )
}

export default MobileVideoComponent
