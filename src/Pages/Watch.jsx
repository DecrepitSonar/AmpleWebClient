import React from "react"
import {IoIosArrowForward} from "react-icons/io"
import SliderHeader from "./Components/SliderHeader"
import VideoComponent from "./Components/VideoComponent"

function Watch() {

let videos = [
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 1,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 2,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 3,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 4,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 5,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 6,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 7,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
  {
    "id": 8,
    "name": "",
    "description": "This is a description of the video or what is happening in the video",
    "imageURL": ""
  },
]

  return(
    <div className="Container">
      <SliderHeader/>
      <div className="body_container">
        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { videos.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}
      </div>
      </div>
  )
}

export default Watch
