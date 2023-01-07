import React from "react"
import {Outlet} from 'react-router-dom'
import Header from "./Components/Header"
import Aside from "./Components/Aside"

function Wrapper(){
  return(
    <div className="Wrapper">
    <Header/>
      <div className="main">
        <Aside/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Wrapper
