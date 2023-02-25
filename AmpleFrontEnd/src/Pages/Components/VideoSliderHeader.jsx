import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { IoIosArrowDropleftCircle,
            IoIosArrowDroprightCircle } from "react-icons/io"

function VideoSliderHeader(props){

const videos = props.videos
const [ position, setPosition ] = useState(0)

let galleryContainer = document.querySelector('.video_container')
let galleryItems = document.querySelectorAll(".video_item")

const next = () => {

  galleryItems = Array.from(galleryItems)
  galleryItems.push( galleryItems.shift())

  galleryItems.forEach((el, i) => {
    let className = el.classList.value.split(" ")[1]
    el.classList.remove(className)
  });

  galleryItems.forEach((el, i) => {
    el.classList.add(`video_item_${i}`)
  });

  // Play selected video
  // galleryItems[1].pause()
  // galleryItems[2].play()
}
const prev = () => {

    galleryItems = Array.from(galleryItems)
    galleryItems.unshift( galleryItems.pop())

    galleryItems.forEach((el, i) => {
      let className = el.classList.value.split(" ")[1]
      el.classList.remove(className)
    });

    galleryItems.forEach((el, i) => {
      el.classList.add(`video_item_${i}`)
    });

    // galleryItems[3].pause()
    // galleryItems[2].play()

}

useEffect(() => {
  galleryContainer = document.querySelector('.video_container').childNodes
  galleryItems = document.querySelectorAll(".video_item")
  // galleryItems[2].play()
}, [])

    return(
      <div className="header">
        <button onClick={() => prev()}><IoIosArrowDropleftCircle /></button>
        <div className="video_container">
        { videos.map( (item, i) => { return(
            <video key={i} onEnded={() => next()} muted={true} className={`video_item video_item_${i}`} width="auto"  poster={process.env.PUBLIC_URL,`${item.image}`} >
              <source src={item.url} type="video/mp4" />
            </video>
        ) }) }
        </div>
        <button onClick={() => next() }>< IoIosArrowDroprightCircle/></button>
      </div>
    )
}
export default VideoSliderHeader
