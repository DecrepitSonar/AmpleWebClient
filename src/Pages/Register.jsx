import React from "react"
import { FaApple,
            FaGooglePlusG,
            FaFacebookF } from "react-icons/fa"

const Login = () => {
  return (
    <div className="login_container">
      <div className="modal">
        <div className="form_container">
        <h1> Login </h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password "/>
            <input type="password" placeholder="Confirm Password "/>
            <span> Already have an account? </span>
            <button>Sign in </button>
          </form>
          
        </div>
        <div className="header_image"></div>
      </div>
    </div>
  )
}

export default  Login
