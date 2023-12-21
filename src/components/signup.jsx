
import '../assets/styles/style.css'

import { Link } from "react-router-dom";
import photo from '../assets/images/registration-form-1.jpg'
function Register() {



    return (

      <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src={photo} alt="photo" />
          </div>
          <form >
            <h3>Registration Form</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"


              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"

              />
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                
              

              />

            </div>
            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Email Address"
                className="form-control"

              />

            </div>
            <div className="form-wrapper">
              <select name="" id="" className="form-control" >
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                
              />

            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"

              />

            </div>
            <div>
              <p>Already have account <Link to='/login' className='link' >Login</Link></p>
            </div>

            

            <button className='glow-on-hover' >
              <Link to='/registersucess' >Register</Link>
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>


    );
  }

export default Register;