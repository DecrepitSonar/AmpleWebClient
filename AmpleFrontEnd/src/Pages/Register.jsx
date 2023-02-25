import React from "react"
import { useState } from "react"
import { FaApple,
         FaGooglePlusG,
         FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../Data/Reducers/authSlice"

const Login = () => {
  const [authData, setAuthData ] = useState({})
  const [passwordValidation, setPasswordValidation] = useState("")
  const auth = useSelector((state) => state.auth)
  const errorStatus = auth.error

  const dispatch = useDispatch()

  const handleChange = e => {
    setAuthData({
        ...authData,
        [e.target.name]: e.target.value
      })
  }


  
  const handleAuth =async ( e) => {
    e.preventDefault()

    console.log( authData)
    
    try{ 
      await verifyPasswords()
      dispatch(register(authData))
    }
    catch( err){
      console.log( err )
    }
   
  }

  const verifyPasswords = async() => {
    if(passwordValidation != authData.password){
      throw false 
    }

    return
  }

  return (
    <div className="login_container">
      <div className="modal">
        <div className="form_container">
        <h1> Login </h1>
          <form onSubmit={(e) => handleAuth(e)}>
          <input 
            type="text" 
            required={true}
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}/>
            <input 
            type="email" 
            required={true}
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}/>
            <input 
            type="password" 
            required={true}
            placeholder="Password "
            name="password"
            onChange={(e) => handleChange(e)}/>
            <input type="password" 
            type="password"
            required={true}
            placeholder="Confirm Password"
            name="passwordValidation"
            onChange={(e) => setPasswordValidation(e.target.value)}/>

            <br/>
            <button type="submit">Sign up </button>
            <span className="errorMessage">{errorStatus} </span>
          </form>
          <div className="seperator_container">
            <hr/> Or <hr/>
          </div>

          <div className="Other_auth_options">
            <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
            <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
            <Link className="register_button_container register" to="/login"><div className="register_button"><button>Sign In </button></div></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default  Login
