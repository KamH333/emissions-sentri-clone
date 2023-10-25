import './App.css';
import logo from './emissionSentriLogo.png';
import icon from './show-password.png';
import React, { useState } from 'react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  }
  const handleLogin = () => {
    setEmailError(email ? '' : 'email is required');
    setPasswordError(password ? '' : 'password is required');
  
    if (email && password) {
      setErrorMessage(''); // Clear any previous error message
      // Perform the login logic here
      return 'Login successful';
    }
  };
  
  return (
    <div id="container">
      <div id="form">
        <img id="logo" src={logo} alt="Emission Sentri Logo"></img>
        <form id="formItems">
          <div className="input-container">
             <label htmlFor="email">Email</label> 
             <br></br>
             <input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: emailError ? '1px solid red' : '1px solid #ccc' }}>
            </input>
            {emailError && (
              <div className= "error-bubble">
                This field cannot be empty
              </div>
            )}
          </div>
          <div id="second">
          <br></br>
          <label htmlFor="password">Password</label>
          <a><strong>Reset password</strong></a>
          <br></br>
          <div className="password-input">
          <input 
            id="password" 
            type= {showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: passwordError ? '1px solid red' : '1px solid #ccc' }}>
          </input>
          {passwordError && (
              <div className= "error-bubble">
                This field cannot be empty
              </div>
          )}
          <button 
          id="showIcon"
          onClick={(e) => {
            e.preventDefault();
            togglePasswordVisibility();
          }}
          >
            <img src={icon} alt="show password"></img>
            </button>
          </div>
        </div>
        </form>
        <div className="error-message">{errorMessage}</div>
        <button onClick={handleLogin}><strong>Log in</strong></button>
        </div>
      </div>
  );
}
export default App;
