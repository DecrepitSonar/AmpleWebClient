import React from "react"

import { IoIosArrowForward } from "react-icons/io"
import VideoComponentSkeleton from "./Components/VideoComponentSkeleton"
import MobileVideoSkeletonComponent from "./Components/MobileVideoComponent"

function PageLoader() {

    return(
        <>
        <div className=" section mobile">
          <div className="section_header">
            <span className="section_title_loader"></span>
            <IoIosArrowForward/>
          </div>
          <div className="mobile_items">
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
            <MobileVideoSkeletonComponent/>
          </div>
        </div>
  
        <div className="section">
            <div className="section_header">
            <span className="section_title_loader"></span>
            <IoIosArrowForward/>
            </div>
            <div className="video_component_items">
            <VideoComponentSkeleton/>
            <VideoComponentSkeleton/>
            <VideoComponentSkeleton/>
            <VideoComponentSkeleton/>
            </div>{/*video_component_items*/}
        </div>
      </>
    )
  }
  
  export default PageLoader