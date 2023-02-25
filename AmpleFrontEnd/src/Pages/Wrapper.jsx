import React, {useEffect, useState} from "react"
import {Outlet} from 'react-router-dom'
import Header from "./Components/Header"
import Aside from "./Components/Aside"
import AVFooter from "./Components/AVFooter"
import Login from "./Login"

function Wrapper(){
  const [modalOpen, OpenModal] = useState(false)

  return(
    <div className="Wrapper" >
    <Header OpenModal={OpenModal}/>
    <Login modalOpen={modalOpen} OpenModal={OpenModal}/>
      <div className="main">
        <Aside/>
        <Outlet/>
      </div>

    </div>
  )
}

export default Wrapper
