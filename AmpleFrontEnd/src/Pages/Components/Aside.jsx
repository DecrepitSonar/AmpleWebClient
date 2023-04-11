import React,{useEffect, useState} from "react"
import { Link, useSearchParams, useLocation } from "react-router-dom"

import { AiFillHome,
             AiFillLike,
             AiOutlineEllipsis,
             AiOutlinePoweroff } from "react-icons/ai"
import { MdVideoLibrary,
             MdQueryStats,
             MdOutlineAddCircleOutline,
             MdBookmark,
             MdHome} from "react-icons/md"
import { BsMusicNoteList,
             BsHeartFill,
             BsListStars, 
             BsGear} from "react-icons/bs"
import { IoIosCog } from "react-icons/io"
import { GiCompass } from "react-icons/gi"

function ChannelStrip(){

  return(
    <div className="ChannelStrip">
      <div className="avi_container">
        <div className="channel_strip_Avi"></div>
        <span>Username</span>
      </div>
      <AiOutlineEllipsis/>
    </div>
  )
}


function Aside(props){

  const [activeLink, setActiveLink] = useState("")

  let location = useLocation()

  useEffect( () => {
       setActiveLink( location.pathname)
  },[activeLink])

  return(
    <div className={` ${activeLink === "stream" ? "streamAside": "Aside" }`}>
      <div className="page_Links">
        <ul>
        <Link to="/"><li onClick={ () => setActiveLink("/")} className={activeLink === "/" ? "active_list_item": ""}><MdHome/> Home</li></Link>
          <Link to="/live"> <li onClick={ () => setActiveLink("/live")} className={activeLink === "/live" ? "active_list_item": ""}><GiAerialSignal/>Live</li></Link>
          <Link to="/watch"><li onClick={ () => setActiveLink("/watch")} className={activeLink === "/watch" ? "active_list_item": ""}><MdVideoLibrary/>Watch</li></Link>
        </ul>
      </div>
      <div className="Library_content">
        <ul>
          <Link to="/saved"><li onClick={ () => setActiveLink("/saved")} className={activeLink == "/saved" ? "active_list_item": ""}><MdBookmark/>Saved</li></Link>
          <Link to="/likes"><li onClick={ () => setActiveLink("/likes")} className={activeLink == "/likes" ? "active_list_item": ""}><AiFillLike/> Likes</li></Link>
          <Link to="/history"><li onClick={ () => setActiveLink("/history")} className={activeLink == "/history" ? "active_list_item": ""}><BsListStars/>History</li></Link>
        </ul>
      </div>
      
    </div>
  )
}
export default Aside