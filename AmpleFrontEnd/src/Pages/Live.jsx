import React, {useEffect, userState} from "react"
import {Link} from "react-router-dom"

import { IoIosArrowDropleftCircle,
             IoIosArrowDroprightCircle,
             IoIosArrowForward } from "react-icons/io"
import { IoEllipsisHorizontal } from "react-icons/io5"

import VideoSliderHeader from "./Components/VideoSliderHeader"
import VideoComponent from "./Components/VideoComponent"
import MobileVideoComponent from "./Components/MobileVideoComponent"
import { useDispatch, useSelector } from "react-redux"
import { loadLiveContent } from "../Data/Reducers/livestreamSlice"

// import MobileModel from "./Components/MobileModel"

// <img className={`video_item video_item_${i}`} src={`${process.env.PUBLIC_URL}/${item.image}`}  data-index={i}/>

function Live() {
  const liveStreams = useSelector(state => state.live)
  let sectionType = liveStreams.data.type
  let content = liveStreams.data.items

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLiveContent())
    console.log( liveStreams.data )
  },[])

  return(
    <div className="Container">
      <div className="body_container">

      {
        liveStreams.isLoading ? <span>Loading...</span> :
          liveStreams.data.forEach(section => {

            switch( section.type){
              case "mobile": 
                <div className=" section mobile">
                <div className="section_header">
                  <span className="section_title">{section.title}</span>
                  <IoIosArrowForward/>
                </div>
                <div className="mobile_items">
                  { section.items.map( (item, i) => { return <Link key={i} to={`/stream/:${item.id}`} ><MobileVideoComponent item={item}/></Link> })}
                  </div>
                </div>
                break;
      
                default: 
                <div className="section">
                  <div className="section_header">
                    <span className="section_title">{section.title}</span>
                    <IoIosArrowForward/>
                  </div>
                  <div className="video_component_items">
                    { section.items.map( (item, i) => { return <Link key={i} to={`/stream/:${item.id}`} ><VideoComponent item={item}/></Link> }) }
                  </div>{/*video_component_items*/}
                </div>
              }
          })
        }

      </div>
    </div>
  )
}

export default Live


// {liveStreams.isLoading ? <span>Loading...</span> : 
//         liveStreams.data.forEach(section => {
//           switch( section.type){
//             case "mobile": 
//               <div className=" section mobile">
//               <div className="section_header">
//                 <span className="section_title">Title</span>
//                 <IoIosArrowForward/>
//               </div>
//               <div className="mobile_items">
//               { content.map( (item, i) => { return <Link key={i} to={`/stream/:${item.id}`} ><MobileVideoComponent item={item}/></Link> })}
//               </div>
//             </div>
//             break;
    
//             default: 
    
//               <div className="section">
//                 <div className="section_header">
//                   <span className="section_title">Title</span>
//                   <IoIosArrowForward/>
//                 </div>
//                 <div className="video_component_items">
//                   { content.map( (item, i) => { return <Link key={i} to={`/stream/:${item.id}`} ><VideoComponent item={item}/></Link> }) }
//                 </div>{/*video_component_items*/}
//               </div>
    
//             }
//         })
        
//       }

