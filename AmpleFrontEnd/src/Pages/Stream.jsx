import React, { useEffect, useRef, useState } from "react"
import { HiOutlinePaperAirplane } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { Socket } from "../Data/socket"

import { mediaPlayer, postComment } from "../Data/Reducers/mediaPlayerslice"

function CommentSection(props){

  let dispatch = useDispatch()
  let mediaState = useSelector((state) => state.mediaPlayer)
  let textAreaRef = useRef()

  const [comments, postComment] = useState([])

  function handleCommentSubmit(e){

      if(e.target.value.length > 1 ){ 

      Socket.emit("data", {
        "id": "dadfasdf",
        "username": "rib",
        "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images%2F$Lucky-Daye-Real-Games-768x443.jpg`",
        "comment": e.target.value,
      })

        textAreaRef.current.value = ""
      }

  }
  
  useEffect(() => {
      Socket.connect()
      Socket.on("connected", (data) => {
        console.log( "connected")
        postComment(previous => [...previous, {"type": "connection", "message": "User Connected"}])
      })
  },[])


useEffect(() => {
  Socket.on("message", data => {
    postComment(previous => [...previous, data])
  })
},[comments])

  return(
    <div className="commentSection">
        <div className="comments-container">
 
        { comments.length > 0 ? comments.map( (item, i ) => {
          switch( item.type){
            case "connection":
              return ( <p key={i} className="comment-message">{item.message}</p>)
                break;
            default: 
              return (
                <div key={i} className="comment">
                  <div className="comment-user-info">
                    <div className="comment-avi"/>
                    <span>{item.username}</span>
                  </div>
                  <p>{item.comment}</p> 
                </div>)
            }
          }
        ) : null}

      </div>
      <div className="comment-input">
        <button onClick={(e) => handleCommentSubmit(e) }><HiOutlinePaperAirplane/> </button>
        <input ref={textAreaRef} onKeyDown={ key => key.key === "Enter"  ? handleCommentSubmit( key ) : null  } type="text" placeholder="Post a comment"/>
      </div>
    </div>
  )

}

function Stream() {
  
  let videoRef = useRef()
  let { id }  = useParams()
  
  return(
    <div className="Container stream">
      <video  autoPlay ref={videoRef} controls className="videoContainer">
        <source src={`https://prophile.nyc3.digitaloceanspaces.com/Videos/${id}.mp4`} type="video/mp4"/>
      </video>
     <CommentSection video={videoRef}/>
    </div>
  )
}

export default Stream

// let currentMinutes = Math.floor(media.currentTime / 60);
      // let currentSeconds = Math.floor(media.currentTime - currentMinutes * 60);
    
      // let currentMinuteValue = currentMinutes.toString()
      // let currentSecondValue = currentSeconds.toString().padStart(2, '0');
    
      // const currentTime = `${currentMinuteValue}:${currentSecondValue}`;

      // let minutes = Math.floor(media.duration / 60);
      // let seconds = Math.floor(media.duration - minutes * 60);
    
      // let minuteValue = minutes.toString()
      // let secondValue = seconds.toString().padStart(2, '0');
    
      // const mediaDuration = `${minuteValue}:${secondValue}`;

      // console.log(currentTime)
