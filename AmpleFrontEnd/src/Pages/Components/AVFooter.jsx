import React from "react"
import { IoPlay, IoPlayBack, IoPlayForward, IoRepeat, IoShuffle, IoVolumeHigh } from "react-icons/io5"

function AVFooter(){
    return(
        <footer className="AVContainer">
            <div className="mediaControls">
                <img src="https://prophile.nyc3.cdn.digitaloceanspaces.com/images/1af17e73721dbe0c40011b82ed4bb1a7dbe3ce29.jpg" className="trackArtwork"/>
                <div className="trackInfo">
                    <span>Title</span>
                    <span>Artist</span>
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
                    <div className="volumeHighlight"></div>
                </div>
            </div>
        </footer>
    )
}

export default AVFooter