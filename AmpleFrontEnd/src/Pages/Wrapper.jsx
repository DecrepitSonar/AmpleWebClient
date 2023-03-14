import React, {useEffect, useState} from "react"
import {Outlet} from 'react-router-dom'
import Header from "./Components/Header"
import Aside from "./Components/Aside"
import AVFooter from "./Components/AVFooter"
import Login from "./Login"

function Wrapper(props){
  return(
    <div className="Wrapper" >
    <Header OpenModal={props.OpenModal}/>
      <div className="main">
        <Aside/>
        <Outlet/>
      </div>

    </div>
  )
}

export default Wrapper
