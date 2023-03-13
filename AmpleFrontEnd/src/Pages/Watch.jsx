import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { loadVideos } from "../Data/Reducers/videoSlice"
import PageLoader from "./SkeletonLoaders/PageLoader"
import LiveVideoComponent from "./Components/LiveVideoComponent"
import MobileVideoComponent from "./Components/MobileVideoComponent"
import VideoComponent from "./Components/VideoComponent"

function Watch() {

  const videos = useSelector( state => state.videos )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadVideos())
  },[])

  return(
    <div className="Container">
      <div className="body_container">
      {
        videos.isLoading ? <PageLoader/> :
          videos.data.map(section => {
            switch( section.type){
              case "mobile": 
                return ( 
                  <div className=" section mobile">
                    <div className="section_header">
                      <span className="section_title">{section.title}</span>
                    </div>
                    <div className="mobile_items">
                    { section.items.map( (item, i) => { return <Link  to={`/stream/:${item.id}`} ><MobileVideoComponent key={i} item={item}/></Link> })}
                    </div>
                  </div>
                )

              case "Podcast": 
                return( 
                  <div className="section">
                    <div className="section_header">
                      <span className="section_title">{section.title}</span>
                    </div>
                    <div className="video_component_items">
                      { section.items.map( (item, i) => { return <VideoComponent item={item}/>}) }
                    </div>{/*video_component_items*/}
                  </div>
                  )

              default: 
                return( 
                <div className="section">
                  <div className="section_header">
                    <span className="section_title">{section.title}</span>
                    <IoIosArrowForward/>
                  </div>
                  <div className="video_component_items">
                    { section.items.map( (item, i) => { return <Link key={i} to={`/stream/${item.id}`} ><VideoComponent item={item}/></Link> }) }
                  </div>{/*video_component_items*/}
                </div>
                )

            }
          
          })
        }
      </div>
    </div>
  )
}

export default Watch
