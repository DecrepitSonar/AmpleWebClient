import React from "react"

import { IoIosArrowDropleftCircle,
            IoIosArrowDroprightCircle } from "react-icons/io"

function SliderHeader(){

const images = [
  { "image": "maxresdefault.jpg"},
  { "image": "maxresdefault.jpg"},
  { "image": "maxresdefault.jpg"},
  { "image": "maxresdefault.jpg"},
  { "image": "maxresdefault.jpg"}
]

const next = () => {

}
    return(
      <div className="header">
        <IoIosArrowDropleftCircle />
        <div className="video_container">
        { images.map( (item, i) => { return( <div key={i} className={`video_item video_item_${i}`}></div> ) }) }
        </div>
        <IoIosArrowDroprightCircle/>
      </div>
    )
}
export default SliderHeader
