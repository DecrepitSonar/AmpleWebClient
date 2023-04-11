import React, {useState, useEffect} from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import { IoIosSearch,
            IoIosAdd,
            IoIosMenu  } from "react-icons/io"
import { IoEllipsisVertical } from "react-icons/io5"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { auth } from "../../Data/Reducers/authSlice"
import { useSelector } from "react-redux"
import { MdHomeFilled } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"

function Header(props){
  const [searchQuery, setSearchQuery] = useSearchParams({})
  let navigate = useNavigate()
  let location = useLocation()

  let path = location.pathname.split('/')[1]

  let authCredentials = useSelector((state) => state.auth)
  let user = authCredentials.user
  let LoggedIn = authCredentials.LoggedIn
  
  function search(){
    navigate("/search")
  }

  function returnFocus(){
    // console.log( params)
    if(params.length < 1){
      // console.log( true)
      navigate('/')
      return
    }
    return
  }

  let params = []

  useEffect(() => {

     for(let entry of searchQuery.entries()) {
       params.push(entry);
     }

}, [searchQuery])

  return(
    <div className="Header">
    
      <div className="logoContainer">
        {path === "stream" ? <button className="header_button"  onClick={() => navigate("/")}><MdHomeFilled/></button> : <button className="header_button" ><RxHamburgerMenu/> </button>}
        <img src={`${process.env.PUBLIC_URL}/Logo.png`} height="30px" width="auto"/>  
        <span>Alpha Channel</span>
      </div>

      <div className="Search_input_container">
        <input onBlur={() => returnFocus()} onFocus={()=> search()} onChange={(e) => setSearchQuery({"q":e.target.value})} type="text" placeholder="Search"/>
        <button className="header_button"><IoIosSearch/></button>
      </div>

      <div className="header_right_Items">
        { LoggedIn ? 
        <>
          <button className="header_button" onClick={() => navigate("/stream")}><AiOutlineVideoCameraAdd/></button>
          <div className="user_Avi_container">
            <div className="Avi"></div>
          </div>
        </>
         : 
         <>
         <button className="header_button" onClick={() => navigate("/stream")}><AiOutlineVideoCameraAdd/></button>
         <div className="user_Avi_container">
         <button className="login-button-header" onClick={() => props.OpenModal(true)}>Login</button>
         </div>
       </>
        }
      </div>

    </div>
  )
}

export default Header
