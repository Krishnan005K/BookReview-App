import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import photo from '../assets/images/registration-form-1.jpg';
import '../assets/styles/style.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    // Clear error message when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(credentials);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: credentials,
      });
      if (response.data.length > 0) {
        console.log('Login successful!');
        // Redirect or handle successful login
      } else {
        console.log('Login failed! Invalid credentials.');
        // Handle invalid login
      }
    } catch (error) {
      console.error('Login failed!', error);
      // Handle error scenarios
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username) {
      errors.username = 'Username is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    return errors;
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
              name="username"
              onChange={handleChange}
              placeholder="Username or Email"
              className="form-control"
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="form-control"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div>
            <p>Don't have an account <Link to='/register' className='link'>Signup</Link></p>
          </div>

          <button className="glow-on-hover" type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
