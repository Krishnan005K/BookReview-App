// import { Link } from "react-router-dom";
import photo from '../assets/images/registration-form-1.jpg'
import '../assets/styles/style.css'
// function Login() {
//   return (
//     <div className="wrapper">
//       <div className="inner">
//         <div className="image-holder">
//           <img src={photo} alt="photo" />
//         </div>
//         <form className="form">
//           <h3>Login</h3>

//           <div className="form-wrapper">
//             <input
//               type="text"
//               placeholder="Username or Email"
//               className="form-control"

//             />

//           </div>
//           <div className="form-wrapper">
//             <input
//               type="password"
//               placeholder="Password"
//               className="form-control"

//             />
//           </div>

//           <div>
//             <p>Don't have account <Link to='/register' className='link'>Signup</Link></p>
//           </div>

//           <button className="glow-on-hover"><Link to='/loginsucess'  >Login
//           </Link></button>


//         </form>
//       </div>
//     </div>


//   );
// }
// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: credentials,
      });
      if (response.data.length > 0) {
        console.log('Login successful!');
        
      } else {
        console.log('Login failed! Invalid credentials.');
        // Handle invalid login
      }
    } catch (error) {
      console.error('Login failed!', error);
      // Handle error scenarios
    }
  };


  return (
    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <img src={photo} alt="photo" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h3>Login</h3>

          <div className="form-wrapper">
            <input
              type="text"
              name="username" onChange={handleChange}
              placeholder="Username or Email"
              className="form-control"

            />

          </div>
          <div className="form-wrapper">
            <input
              type="password"
              name="password" onChange={handleChange}
              placeholder="Password"
              className="form-control"

            />
          </div>

          <div>
            <p>Don't have account <Link to='/register' className='link'>Signup</Link></p>
          </div>

          <button className="glow-on-hover" type='submit'>Login
         </button>


        </form>
      </div>
    </div>


  );

};

export default Login;
