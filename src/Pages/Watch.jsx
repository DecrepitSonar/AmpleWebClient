import React from "react"
import {IoIosArrowForward} from "react-icons/io"
import SliderHeader from "./Components/SliderHeader"
import VideoComponent from "./Components/VideoComponent"

function Watch() {

  const videos = [
    {
      "image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/Kehlani44.jpg",
      "url": "https://prophile.nyc3.digitaloceanspaces.com/Videos/8a94e2f767e42cfe9cb4355b31ffbf85f3cd6eb9.mp4"
    },
    {
      "image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/Capture-25.jpg",
      "url": "https://prophile.nyc3.digitaloceanspaces.com/Videos/f8856321095006adba848aa554353a5c4911b933.mp4"
    },
    {
      "image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/sir-devils-video.jpg",
      "url": "https://prophile.nyc3.digitaloceanspaces.com/Videos/b95f9e9ca54c89b18a4f82d90353df4a3bc04af1.mp4"
    },
    {
      "image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/Lucky-Daye-Real-Games-768x443.jpg",
      "url": "https://prophile.nyc3.digitaloceanspaces.com/Videos/e9c4c8e41e6cfcb45bddcddac72042ef86a1d148.mp4"
    },
    {
       "image": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images/MV5BMGNjNTlmYmUtNGM2Zi00MmRlLWJlZGMtNzM2NjRiM2RjZmE5XkEyXkFqcGdeQXVyMTk2NTA3MjU.jpg",
       "url": "https://prophile.nyc3.digitaloceanspaces.com/Videos/d05a0180d3cdf07831a85443a9bff244bb5244fa.mp4"
     }
  ]

let sectionVideos = [
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
      <SliderHeader videos={videos}/>
      <div className="body_container">
        <div className="section">
          <div className="section_header">
            <span className="section_title">Title</span>
            <IoIosArrowForward/>
          </div>
          <div className="video_component_items">
            { sectionVideos.map( (item, i) => { return <VideoComponent key={i} item={item}/> }) }
          </div>{/*video_component_items*/}
        </div>{/* End of section*/}
      </div>
      </div>
  )
}

export default Watch
