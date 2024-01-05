import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import photo from '../assets/images/registration-form-1.jpg';
import '../assets/styles/style.css';


const Register = ({ history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});
  const [redirectToLogin, setRedirectToLogin] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Assuming the API request is a Promise (like axios returns)
    axios.post('http://localhost:3001/users', formData)
      .then((response) => {
        console.log('Registration successful!', response.data);
        setRedirectToLogin(true); // Update state to trigger redirection
      })
      .catch((error) => {
        console.error('Registration failed!', error);
      });
  };
  if (redirectToLogin) {
  window.location.href='/regisucess'
  }

    const validateForm = (data) => {
      const errors = {};
      if (!data.firstName) {
        errors.firstName = 'First Name is required';
      }
      if (!data.lastName) {
        errors.lastName = 'Last Name is required';
      }
      if (!data.username) {
        errors.username = 'Username is required';
      }
      if (!data.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email address';
      }
      if (!data.gender) {
        errors.gender = 'Gender is required';
      }
      if (!data.password) {
        errors.password = 'Password is required';
      } else if (!/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(data.password)) {
        errors.password =
          'Enter a valid password';
      }
      if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
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
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="form-control"
              />
              {errors.firstName && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.firstName}
                </span>
              )}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="form-control"
              />
              {errors.lastName && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.lastName}
                </span>
              )}
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="form-control"
              />
              {errors.username && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.username}
                </span>
              )}
            </div>
            <div className="form-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.email}
                </span>
              )}
            </div>
            <div className="form-wrapper">
              <select id="" className="form-control" name="gender" onChange={handleChange}>
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.gender}
                </span>
              )}
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-control"
              />
              {errors.password && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.password}
                </span>
              )}
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="form-control"
              />
              {errors.confirmPassword && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.confirmPassword}
                </span>
              )}
            </div>
            <div>
              <p>
                Already have an account?{' '}
                <Link to="/login" className="link">
                  Login
                </Link>
              </p>
            </div>
            <button className="glow-on-hover" type="submit">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Register;
