import React,{useEffect, useState} from "react"
import { Link, useSearchParams, useLocation } from "react-router-dom"

import { AiFillHome,
             AiOutlineEllipsis,
             AiOutlinePoweroff } from "react-icons/ai"
import { MdVideoLibrary,
             MdQueryStats,
             MdOutlineAddCircleOutline } from "react-icons/md"
import { BsMusicNoteList,
             BsHeartFill,
             BsListStars } from "react-icons/bs"
import { IoIosCog } from "react-icons/io"

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

  let params = []
  let location = useLocation()

  function handleLink(link) {
    setActiveLink(link)
  }

  useEffect( () => {
       setActiveLink( location.pathname)
  },[activeLink])

  return(
    <div className="Aside">
      <div className="page_Links">
        <ul>
          <Link to="/"> <li onClick={ () => setActiveLink("/")} className={activeLink === "/" ? "active_list_item": ""}><AiFillHome/>Live</li></Link>
          <Link to="/watch"><li onClick={ () => setActiveLink("/watch")} className={activeLink === "/watch" ? "active_list_item": ""}><MdVideoLibrary/>Watch</li></Link>
          <Link to="/listen"><li onClick={ () => setActiveLink("/listen")} className={activeLink == "/listen" ? "active_list_item": ""}><BsMusicNoteList/>Listen</li></Link>
        </ul>
      </div>
      <span className="aside_section_title">Library</span>
      <div className="Library_content">
        <ul>
          <Link to="/publish"><li onClick={ () => setActiveLink("/publish")} className={activeLink == "/publish" ? "active_list_item": ""}><MdOutlineAddCircleOutline/>Publish</li></Link>
          <Link to="/saved"><li onClick={ () => setActiveLink("/saved")} className={activeLink == "/saved" ? "active_list_item": ""}><BsHeartFill/>Saved</li></Link>
          <Link to="/history"><li onClick={ () => setActiveLink("/history")} className={activeLink == "/history" ? "active_list_item": ""}><BsListStars/>History</li></Link>
          <Link to="/stats"><li onClick={ () => setActiveLink("/stats")} className={activeLink == "/stats" ? "active_list_item": ""}><MdQueryStats/>Stats for you</li></Link>
        </ul>
      </div>
      <span className="aside_section_title">Channels</span>
      <div className="channels_container">
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
          <ChannelStrip/>
      </div>
      <div className="aside_footer">
      <button><AiOutlinePoweroff/></button>
      <button><IoIosCog/></button>
      </div>
    </div>
  )
}
export default Aside