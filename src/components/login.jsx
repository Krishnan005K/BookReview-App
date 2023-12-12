import {  Link } from "react-router-dom";
import photo from '../assets/images/registration-form-1.jpg'
import '../assets/styles/style.css'

function Login()
{
    return (
        
        <div className="wrapper">
          <div className="inner">
            <div className="image-holder">
              <img src={photo} alt="photo" />
            </div>
            <form  className="form">
              <h3>Login</h3>
              
              <div className="form-wrapper">
                <input
                  type="text"
                  placeholder="Username or Email"
                  className="form-control"
                 
                />
                <i className="zmdi zmdi-account" />
              </div>
           
             
              <div className="form-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  
                />
                <i className="zmdi zmdi-lock" />
              </div>
              
              <div>
                <p>Don't have account <Link to='/register'className='link'>Signup</Link></p>
              </div>
              <button >
              <Link to='/Home' >Login</Link>
                <i className="zmdi zmdi-arrow-right" />
                </button>
            </form>
          </div>
        </div>
       
       
      );
    }

export default Login;
