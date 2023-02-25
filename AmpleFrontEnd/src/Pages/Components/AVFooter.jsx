import React from "react"
import { useState } from "react"
import { IoPlay, IoPlayBack, IoPlayForward, IoRepeat, IoShuffle, IoVolumeHigh } from "react-icons/io5"

function AVFooter(){

    const [ showOverlay, toggleOverlay ] = useState(false)
    return(
            <div className="MiniVideoContainer" onMouseEnter={() => toggleOverlay(true) } onMouseLeave={() => toggleOverlay(false)}>
                <div className="MiniOverlay" style={showOverlay ? {"display": "block"} : {"display":"none"}}>
                    ul
                </div>
                <video autoPlay muted={true} >
                    <source src="https://prophile.nyc3.digitaloceanspaces.com/Videos/e9c4c8e41e6cfcb45bddcddac72042ef86a1d148.mp4" type="video/mp4"/>
                </video>
            </div>

    ) 
}

export default AVFooter