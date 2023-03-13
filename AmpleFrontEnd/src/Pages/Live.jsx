import React, {useEffect, userState} from "react"
import {Link} from "react-router-dom"

import { IoIosArrowForward } from "react-icons/io"

import MobileVideoComponent from "./Components/MobileVideoComponent"
import { useDispatch, useSelector } from "react-redux"
import { loadLiveContent } from "../Data/Reducers/livestreamSlice"
import LiveVideoComponent from "./Components/LiveVideoComponent"
import PageLoader from "./SkeletonLoaders/PageLoader"

// import MobileModel from "./Components/MobileModel"

// <img className={`video_item video_item_${i}`} src={`${process.env.PUBLIC_URL}/${item.image}`}  data-index={i}/>

function Live() {
  const liveStreams = useSelector(state => state.live)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLiveContent())
  },[])

  return(
    <div className="Container">
      <div className="body_container">

      {
        liveStreams.isLoading ? <PageLoader/> :
          liveStreams.data.map(section => {
            switch( section.type){
              case "mobile": 

              return ( 
                <div className=" section mobile">
                  <div className="section_header">
                    <span className="section_title">{section.title}</span>
                  </div>
                  <div className="mobile_items">
                  { section.items.map( (item, i) => { return <MobileVideoComponent key={i} item={item}/>})}
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
                      { section.items.map( (item, i) => { return <LiveVideoComponent item={item} key={i}/>}) }
                    </div>{/*video_component_items*/}
                  </div>
                  )

              default: 

                return( 
                <div className="section">
                  <div className="section_header">
                    <span className="section_title">{section.title}</span>
                  </div>
                  <div className="video_component_items">
                    { section.items.map( (item, i) => { return <LiveVideoComponent item={item}/> }) }
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

export default Live




{/* <Link key={i} to={`/stream/:${item.id}`} ><VideoComponent item={item}/></Link> })  */}

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

