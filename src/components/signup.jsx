import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import photo from '../assets/images/registration-form-1.jpg';
import '../assets/styles/style.css';

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      // Check if the username or email already exists in the database
      const users = await axios.get('http://localhost:3001/users');
      const foundUser = users.data.find(
        (user) => user.username === formData.username || user.email === formData.email
      );
  
      if (foundUser) {
        if (foundUser.username === formData.username) {
          setErrors({ ...errors, username: 'Username already exists' });
        }
        if (foundUser.email === formData.email) {
          setErrors({ ...errors, email: 'Email already exists' });
        }
        return;
      }
  
      // If no existing user found, proceed with registration
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Registration successful!', response.data);
      // Redirect or handle success as needed
    } catch (error) {
      console.error('Registration failed!', error);
      // Handle error scenarios
    }
  };

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
          'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character';
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
