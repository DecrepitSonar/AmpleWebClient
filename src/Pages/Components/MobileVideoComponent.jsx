import React from "react"
import { IoEllipsisHorizontal } from "react-icons/io5"

function MobileVideoComponent(props){
  let item = props.item
  return(
    <div key={item.id}  className="mobile_item">
      <div className="component_description">
        <div className="component_avi"></div>
        <span>{item.name}</span>
      </div>
      <IoEllipsisHorizontal/>
    </div>
  )
}

export default MobileVideoComponent
