import React from "react"
import { useState } from "react"
import { FaApple,
         FaGooglePlusG,
         FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [authData, setAuthData ] = useState({})
  const [passwordValidation, setPasswordValidation] = useState("")

  const handleChange = e => {
    setAuthData({
        ...authData,
        [e.target.name]: e.target.value
      })
  }
  
  const handleAuth = e => {
    e.preventDefault()

    axios.post("http://localhost:8000/api/v1/auth/signup", authData)
    .then( response => {
      console.log(response )
    })
    .catch( err => {
      console.log( err )
    })
  }

  return (
    <div className="login_container">
      <div className="modal">
        <div className="form_container">
        <h1> Login </h1>
          <form onSubmit={(e) => handleAuth(e)}>
            <input 
            type="text" 
            placeholder="Username" 
            required={true}
            name="username"
            onChange={(e) => handleChange(e)}/>
            <input 
            type="email" 
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}/>
            <input 
            type="password" 
            placeholder="Password "
            name="password"
            onChange={(e) => handleChange(e)}/>
            <input type="password" placeholder="Confirm Password "/>
            <span> Already have an account? <Link to="/login">Login</Link> </span>
            <br/>
            <button type="submit">Sign up </button>
          </form>
        </div>
        <div className="header_image"></div>
      </div>
    </div>
  )
}

export default  Login
