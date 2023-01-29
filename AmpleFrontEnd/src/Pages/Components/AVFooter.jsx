import React from "react"
import { useState } from "react"
import { IoPlay, IoPlayBack, IoPlayForward, IoRepeat, IoShuffle, IoVolumeHigh } from "react-icons/io5"

function AVFooter(){

    const [ showOverlay, toggleOverlay ] = useState(false)
    return(
        <footer className="AVContainer">
            <div className="mediaControls">
                <img src="https://prophile.nyc3.cdn.digitaloceanspaces.com/images/1af17e73721dbe0c40011b82ed4bb1a7dbe3ce29.jpg" className="trackArtwork"/>
                <div className="trackInfo">
                    <span>Give up</span>
                    <span>Mac Ayres</span>
                </div>
            </div>
            <div className="mediaButtons">
                <button><IoRepeat/></button>
                <button><IoPlayBack/></button>
                <button><IoPlay/></button>
                <button><IoPlayForward/></button>
                <button><IoShuffle/></button>
            </div>
            <div className="progressBarContainer">
                <span>2:00</span>
                <div className="progressBar">< div className="progressBar-slider"/></div>
                <span>3:24</span>
            </div>
            <div className="volumeControls">
                <button><IoVolumeHigh/></button>
                <div className="volume">
                    <div className="volumeHighlight">
                        <div className="volume_slider"></div>
                    </div>
                </div>
            </div>

            <div className="MiniVideoContainer" onMouseEnter={() => toggleOverlay(true) } onMouseLeave={() => toggleOverlay(false)}>
                <div className="MiniOverlay" style={showOverlay ? {"display": "block"} : {"display":"none"}}>
                    ul
                </div>
                <video autoPlay muted={true} >
                    <source src="https://prophile.nyc3.digitaloceanspaces.com/Videos/e9c4c8e41e6cfcb45bddcddac72042ef86a1d148.mp4" type="video/mp4"/>
                </video>
            </div>

        </footer>
    ) 
}

export default AVFooter