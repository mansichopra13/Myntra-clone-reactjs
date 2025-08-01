import React, { useState } from 'react'
import './Login.css'
import loginn from '../../assets/loginn.jpg'
import { login, signup } from '../../Firbase'
import loadingImg from '../../assets/loadingImg.gif'
// import { useNavigate } from 'react-router-dom';

// complete after routing
const Login = () => {

  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email, password);
        // navigate('/')
      }
      else {
        await signup(name, email, password);
        // navigate('/')
      }
    } catch (error) {
      console.error(err);
      toast.error("Authentication failed. Check your credentials.");
    } finally {
      setLoading(false);
    }


  };


  return (

    loading ? <div className="login-spinner">
      <img src={loadingImg} alt="" />
    </div> :

      <div className="login">
        <div className="log">
          <img src={loginn} alt="" />


          <div className="login-form">
            <h1>{signState}</h1>
            <form >
              {signState === "Sign Up" ?
                <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' />
                : <></>}
              <br /><br />
              <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
              <br /><br />
              <input className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
              <br /><br />
              <button onClick={user_auth} type='submit'>{signState}</button>
              <br /><br />
              <div className="form-help">
                <div className="remember">
                  <input type="checkbox" />
                  <label htmlFor="">Remember Me</label>
                </div>
                {/* <p>Need Help?</p> */}
              </div>
            </form>
            <div className="form-switch">
              {signState === "Sign In" ?
                <p>New to Myntra? <span onClick={() => { setSignState("Sign Up") }}><b>Sign Up Now</b></span></p> :
                <p>Already have account? <span onClick={() => { setSignState("Sign In") }}><b>Sign In Now</b></span></p>
              }
            </div>
          </div>



          {/* <div className="formm">
             <p><b>Login </b>or <b>Signup</b></p><br />
             <div className="num">
              <input  type="number" placeholder='+91 | Mobile Number*' />
             </div>
             <br />
             <div className="checking">
              <input type="checkbox" />
               <p className='para'>
                By continuing,I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b> and I am above 18 years old.
                </p> 
             </div>
             <br />
             <button>Continue</button><br />
             <div className="help">
                <p>Have trouble logging in?<b>Get Help</b></p>
             </div>
             
        </div> */}

        </div>


      </div>
  )
}

export default Login