import React from "react"
import { FaApple,
            FaGooglePlusG,
            FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login_container">
      <div className="modal">
        <div className="form_container">
        <h1> Login </h1>
          <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password "/>
            <span>Forgot password? <Link to="reset">Reset</Link></span>
            <button>Sign in </button>
          </form>

          <div className="seperator_container">
            <hr/> Or <hr/>
          </div>

          <div className="Other_auth_options">
            <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
            <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
            <Link className="register_button_container register" to="/signup"><div className="register_button"><button>Signup </button></div></Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default  Login
