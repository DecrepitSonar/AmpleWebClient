import React, {userState} from "react"
import { IoIosArrowDropleftCircle,
             IoIosArrowDroprightCircle,
             IoIosArrowForward } from "react-icons/io"
import { IoEllipsisHorizontal } from "react-icons/io5"

import SliderHeader from "./Components/SliderHeader"
import VideoComponent from "./Components/VideoComponent"
import MobileVideoComponent from "./Components/MobileVideoComponent"
// import MobileModel from "./Components/MobileModel"

// <img className={`video_item video_item_${i}`} src={`${process.env.PUBLIC_URL}/${item.image}`}  data-index={i}/>

const MobileModel = (props) => {
  return(
    <div className="model-container">

    </div>
  )
}

function Live() {
  const mobileItems = [
    {
      "id": 1,
      "name": "user",
      "imageURL": ""
    },
    {
      "id": 2,
      "name": "user",
      "imageURL": ""
    },
    {
      "id": 3,
      "name": "user",
      "imageURL": ""
    },
    {
      "id": 4,
      "name": "user",
      "imageURL": ""
    },
    {
      "id": 5,
      "name": "user",
      "imageURL": ""
    },
    {
      "id": 6,
      "name": "user",
      "imageURL": ""
    }
  ]
  const liveVideos = [
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
    }

  ]
  const liveCasts = [
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
    }
  ]

  return(
    <div className="Container">
      <SliderHeader/>
      <MobileModel/>
      <div className="body_container">
        <div className=" section mobile">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="mobile_items">
          { mobileItems.map( (item, i) => { return <MobileVideoComponent key={i} item={item}/> })}
          </div>
        </div>{ /* End of mobile section*/}

        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { liveVideos.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}

        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { liveCasts.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}

        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { liveCasts.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}

        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { liveCasts.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}

        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { liveCasts.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}

      </div>
    </div>
  )
}

export default Live
