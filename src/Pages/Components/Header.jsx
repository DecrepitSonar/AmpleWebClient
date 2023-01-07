import React, {useState, useEffect} from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import { IoIosSearch,
            IoIosAdd,
            IoIosMenu  } from "react-icons/io"
import { IoEllipsisVertical } from "react-icons/io5"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"

function Header(){
  const [searchQuery, setSearchQuery] = useSearchParams({})
  let navigate = useNavigate()

  function search(){
    navigate("/search")
  }

  function returnFocus(){
    console.log( params)
    if(params.length < 1){
      console.log( true)
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
    <div className="Header"v>
    <div className="logoContainer">
    <button><IoIosMenu/></button>
      <img src={`${process.env.PUBLIC_URL}/Logo.png`} height="30px" width="auto"/>
    </div>

      <div className="Search_input_container">
        <input onBlur={() => returnFocus()} onFocus={()=> search()} onChange={(e) => setSearchQuery({"q":e.target.value})} type="text" placeholder="Search"/>
        <button><IoIosSearch/></button>
      </div>

      <div className="header_right_Items">
        <button onClick={() => navigate("/stream")}><AiOutlineVideoCameraAdd/></button>
        <div className="user_Avi_container">
          <span>User</span>
          <div className="Avi"></div>
        </div>
        <button><IoEllipsisVertical/></button>
      </div>

    </div>
  )
}

export default Header
