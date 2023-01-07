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
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password "/>
            <span>Forgot password?</span>
            <button>Sign in </button>
          </form>

          <div className="seperator_container">
            <hr/> Or <hr/>
          </div>

          <div className="Other_auth_options">
          <button> <FaApple/> Login With Apple </button>
          <button> <FaGooglePlusG/> Login With Google </button>
          <button> <FaFacebookF/> Login With Apple </button>
          </div>
        </div>
        <div className="header_image"></div>
      </div>
    </div>
  )
}

export default  Login
