import React, { useEffect, useRef, useState } from "react"
import { HiOutlinePaperAirplane } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Socket } from "../Data/socket"
import Aside from "./Components/Aside"
import Login from "./Login"

function CommentSection(props){

  let textAreaRef = useRef()
  let auth = useSelector( state => state.auth)
  let isLoggedIn = auth.LoggedIn

  function handleCommentSubmit(e){

    if(e.target.value.length > 1  && isLoggedIn ){ 

    Socket.emit("data", {
      "username": auth.user.username,
      "imageURL": "https://prophile.nyc3.cdn.digitaloceanspaces.com/images%2F$Lucky-Daye-Real-Games-768x443.jpg`",
      "comment": e.target.value,
      "streamId": props.id
    })

      textAreaRef.current.value = ""
    }

}

  return(
    <div className="commentSection">
        <div className="commentSectionHeader"></div>
        <div className="comments-container">
 
        { props.comments.length > 0 ? props.comments.map( (item, i ) => {
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
        {isLoggedIn ? null : <div className="auth-button-container">
            <button onClick={() => props.toggleLogin(true)}>Login</button>
        </div> }
        <button onClick={(e) => handleCommentSubmit(e) }><HiOutlinePaperAirplane/> </button>
        <input disabled={isLoggedIn ? false : true } ref={textAreaRef} onKeyDown={ key => key.key === "Enter"  ? handleCommentSubmit( key ) : null  } type="text" placeholder={isLoggedIn ?  "Post a comment" : "Login to join chat"}/>
      </div>
    </div>
  )

}

function Stream(props) {
  
  const [comments, postComment] = useState([])

  let videoRef = useRef()
  let { id }  = useParams()
  let dispatch = useDispatch()
  let auth = useSelector( state => state.auth)
  
  useEffect(() => {
    Socket.connect()
    // Socket.on("connected", (data) => {
    //   console.log( "connected")
    //   postComment(previous => [...previous, {"type": "connection", "message": "User Connected"}])
    // })

    Socket.emit("join", id)

    return () => {
      console.log( "disconnecting")
      Socket.disconnect()
      Socket.emit("leave", id)
    }

  },[])

useEffect(() => {
  Socket.on("message", data => {
    postComment(previous => [...previous, data])
  })

  return () => {
    Socket.off("message")
  }
},[comments])
  
  return(
    <div className="Container stream">
      <Login/>
      <video  muted autoPlay ref={videoRef} controls className="videoContainer">
        <source src={`https://prophile.nyc3.digitaloceanspaces.com/Videos/${id}.mp4`} type="video/mp4"/>
      </video>
     <CommentSection toggleLogin={props.toggleLogin}comments={comments} video={videoRef} id={id}/>
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
