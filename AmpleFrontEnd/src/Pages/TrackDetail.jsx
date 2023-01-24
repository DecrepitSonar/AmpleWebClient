import React from "react"
import { IoEllipsisHorizontalSharp, IoHeart,
         IoPlayCircleSharp } from "react-icons/io5"
import { MdOutlineLibraryAdd } from "react-icons/md"

function TrackDetail(){
  return (
  <>
    <div className="DetailHeader">
      <div className="HeaderOverlay">
        <div className="currentItemItem">
          <div className="CoverArt"></div>
        
          <div className="TracksContainer">
            <div className="DeatilInfo">
              <span>Title</span>
              <span>Artist</span>
            </div>
            <div className="TrackItems">
              <ul>
                <li><span>item 1</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 1</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 1</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 2</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 3</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 4</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 5</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 6</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 7</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 8</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 9</span><button><IoEllipsisHorizontalSharp/></button></li>
                <li><span>item 10</span><button><IoEllipsisHorizontalSharp/></button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> {/* DetailHeader */}

    <div className="DetailBody">
     
    </div>
  </>
  )
}

export default TrackDetail
