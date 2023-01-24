import React from "react"
import { IoEllipsisHorizontal } from "react-icons/io5"
import { AiOutlineLike,
             AiOutlineDislike,
             AiFillHeart  } from "react-icons/ai"

function WatchVideo(props) {

  return(
    <div className="Container">
      <div className="videoHeader">
        <video autoPlay controls >
          <source src="https://prophile.nyc3.cdn.digitaloceanspaces.com/Videos/8a94e2f767e42cfe9cb4355b31ffbf85f3cd6eb9.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="videoDescription">
        <div className="videoDescriptionHeader">
          <div className="videoAuthorContainer"> 
            <div className="AuthorAvi"></div>
            <label>Username</label>
          </div>
          <label htmlFor="">Video Title</label>
        </div>
        <div className="videoButtonContainer">
          <button><AiOutlineLike/> </button>
          <button><AiOutlineDislike/></button>
          <button><AiFillHeart/></button>
          <button><IoEllipsisHorizontal/></button>
        </div>
        <label>Description</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </div>
  )
}

export default WatchVideo
