import React from "react";

import '../assets/styles/regisucess.css'
import {Link} from 'react-router-dom'
const RegistrationSuccess = () => {
  return (
    <body>
    <div className="Scriptcontent">
      <div id="card" className="animated fadeIn">
        <div id="upper-side">

          <h3 id="status">
            Success
          </h3>
        </div>
        <div id="lower-side">
          <p id="message">
            Congratulations, your account has been successfully created.
            <br/>
            Login now
          </p>
          <buttton className='regissucess'>
         <Link to='/login' className="">Login</Link>
         </buttton>
         
        </div>
      </div>
    </div>
    </body>
  );
};

export default RegistrationSuccess;
