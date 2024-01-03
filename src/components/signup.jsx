
// import '../assets/styles/style.css'

import { Link } from "react-router-dom";
import photo from '../assets/images/registration-form-1.jpg'
// function Register() {



//   return (

//     <div className="wrapper">
//       <div className="inner">
//         <div className="image-holder">
//           <img src={photo} alt="photo" />
//         </div>
//         <form >
//           <h3>Registration Form</h3>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="form-control"


//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="form-control"

//             />
//           </div>
//           <div className="form-wrapper">
//             <input
//               type="text"
//               placeholder="Username"
//               className="form-control"



//             />

//           </div>
//           <div className="form-wrapper">
//             <input
//               type="text"
//               placeholder="Email Address"
//               className="form-control"

//             />

//           </div>
//           <div className="form-wrapper">
//             <select name="" id="" className="form-control" >
//               <option value="" disabled selected>Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>

//           </div>
//           <div className="form-wrapper">
//             <input
//               type="password"
//               placeholder="Password"
//               className="form-control"

//             />

//           </div>
//           <div className="form-wrapper">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="form-control"

//             />

//           </div>
//           <div>
//             <p>Already have account <Link to='/login' className='link' >Login</Link></p>
//           </div>



//           <button className='glow-on-hover' >
//             <Link to='/registersucess' >Register</Link>
//             <i className="zmdi zmdi-arrow-right" />
//           </button>
//         </form>
//       </div>
//     </div>


//   );
// }

// export default Register;





import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Registration successful!', response.data);
      // Redirect or handle success as needed
    } catch (error) {
      console.error('Registration failed!', error);
      // Handle error scenarios
    }
  };

  return (

    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <img src={photo} alt="photo" />
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Registration Form</h3>
          <div className="form-group">
            <input
              type="text" name="firstName" placeholder="First Name" onChange={handleChange}
              className="form-control"



            />
            <input
              type="text" name="lastName" placeholder="Last Name" onChange={handleChange}
              className="form-control"

            />
          </div>
          <div className="form-wrapper">
            <input
              name="username" placeholder="Username" onChange={handleChange}
              className="form-control"



            />

          </div>
          <div className="form-wrapper">
            <input
              type="email" name="email" placeholder="Email" onChange={handleChange}
              className="form-control"

            />

          </div>
          <div className="form-wrapper">
            <select id="" className="form-control" name="gender" onChange={handleChange} >
              <option value="" disabled selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

          </div>
          <div className="form-wrapper">
            <input
              type="password" name="password" placeholder="Password" onChange={handleChange}
              className="form-control"

            />

          </div>
          <div className="form-wrapper">
            <input
              type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}
              className="form-control"

            />

          </div>
          <div>
            <p>Already have account <Link to='/login' className='link' >Login</Link></p>
          </div>



          <button className='glow-on-hover' >
            Register
            <i className="zmdi zmdi-arrow-right" />
          </button>
        </form>
      </div>
    </div>


  );

};

export default Register;

