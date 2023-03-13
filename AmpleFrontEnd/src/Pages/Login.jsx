import React, {useState} from "react"
import { FaApple,
            FaGooglePlusG,
            FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login, register } from "../Data/Reducers/authSlice"
import { IoClose } from "react-icons/io5"

const Login = (props) => {

  const [selectedModal, setSelectedModal] =useState("login")
  const isLoggedIn = useSelector( (state) => state.auth)

  const errorStatus = isLoggedIn.error
  
  return (
    <div className="login_container" 
      style={props.modalOpen ?{"display" : "flex"} : {"display" : "none"}}
    >
      { selectedModal == "login" ? <LoginModal setSelectedModal={setSelectedModal} errorStatus={errorStatus}/> :<RegisterModal setSelectedModal={setSelectedModal} errorStatus={errorStatus} />}
      <button className="closeButton" onClick={() => props.OpenModal(false)}><IoClose/></button>
    </div>
  )
}

const LoginModal = (props) => {
  const [authForm, setForm] = useState({})
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(authForm))
  }

  return(
    <div className="modal">
    <div className="form_container">
    <h1> Login </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="email" 
          placeholder="Email"
          onChange={(e) => setForm({...authForm, email: e.target.value })}
        />
        <input 
          type="password" 
          placeholder="Password "
          onChange={(e) => setForm({...authForm, password: e.target.value })}
        />
        <Link to="reset">Forgot password?</Link>
        <button>Sign in </button>
        <span className="errorMessage">{props.errorStatus} </span>
      </form>
      <div className="seperator_container">
        <hr/> Or <hr/>
      </div>

      <div className="Other_auth_options">
        <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
        <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
        <div className="register_button_container register register_button"  onClick={() => props.setSelectedModal("register")}><button>Sign Up </button></div>
      </div>
    </div>
    
   </div>
  )
}

const RegisterModal = (props) => {

  const [authData, setAuthData ] = useState({})
  const [passwordValidation, setPasswordValidation] = useState("")

  const dispatch = useDispatch()

  const handleChange = e => {
    setAuthData({
        ...authData,
        [e.target.name]: e.target.value
      })
  }


  
  const handleAuth =async ( e) => {
    e.preventDefault()

    try{ 
      await verifyPasswords()
      dispatch(register(authData))
    }
    catch( err){}
   
  }

  const verifyPasswords = async() => {
    if(passwordValidation != authData.password){
      throw false 
    }

    return
  }

  return(
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
            <span className="errorMessage">{props.errorStatus} </span>
          </form>
          <div className="seperator_container">
            <hr/> Or <hr/>
          </div>

          <div className="Other_auth_options">
            <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
            <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
            <div className="register_button_container register register_button"  onClick={() => props.setSelectedModal("login")}><button>Sign In </button></div>
          </div>
        </div>

      </div>
  )
}
export default  Login
