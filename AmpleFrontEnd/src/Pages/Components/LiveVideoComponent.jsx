import React, { useRef } from "react"
import {IoEllipsisHorizontal } from "react-icons/io5"
import { GiAerialSignal } from "react-icons/gi"
import { Link } from "react-router-dom"

const LiveVideoComponent = (props) => {
  let item = props.item

  let videoRef = useRef()

  const handleNavigate = ( path ) => {

  }

  const togglePlay = ( e ) => {

    // videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
    
  }
  return(
    <div className="video_component_item">
      <Link to={`/stream/${item.id}`} >
        <video onClick={() => handleNavigate(`/stream/${item.id}`)} 
              ref={videoRef} 
              onMouseOver={(e) => { togglePlay(e)}} 
              onMouseLeave={(e) => togglePlay(e)} 
              className="video_component_video"
              muted={true}
              poster={`https://prophile.nyc3.cdn.digitaloceanspaces.com/images%2F${item.imageURL}.jpg`}
            >
              <source  src={item.videoURL} type="video/mp4"/>
        </video>
      </Link>
      <div className="video_component_description">
        <div className="video_component_description_header">
          <img className="component_avi" alt="artist" src={`https://prophile.nyc3.cdn.digitaloceanspaces.com/images%2F${item.artistImageURL}.jpg`}/>
          <span> {item.artist} </span>
          <IoEllipsisHorizontal/>
        </div> {/*video_component_description_header*/}
        <span className="video_description">{item.title}</span>
        {item.isLive ? <span className="live"> <i><GiAerialSignal/></i> Watching : {item.views}</span> : <span className="live"> Views : {item.views}</span>}
      </div>{/*video_component_description*/}
    </div>
  )
}

export default  LiveVideoComponent