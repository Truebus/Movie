import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally, you'd send a request to the server to authenticate.
    // Here we're checking if the data matches what we stored in localStorage.
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      login(storedUser);
      alert('Login successful!');
      
      // Navigate to the trending page after successful login
      navigate('/'); // Navigate to the trending page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='flex justify-center p-[10px]' id='login'>
      <div className='h-auto w-[350px] rounded-3xl p-[5px]' id='loginform'>
    <form onSubmit={handleSubmit} className='flex flex-col p-[10px]'>
      <h2 className='text-orange-600 font-serif font-bold text-2xl text-center'>Welcome Login Page</h2>
      <h2 className='mt-2 mb-3 text-blue-900 text-center font-bold text-2xl'>Login via Email</h2>
      <div>
        <label htmlFor='email' className='font-semibold'>Enter Email:-</label>
      <input id='email' className='mt-2 mb-3 w-full outline-none rounded-2xl p-2 focus:border-2 border-blue-800
      shadow-md shadow-gray-400'
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      <div>
        <label htmlFor='password' className='font-semibold'>Enter Password:-</label>
      <input id='password' className='mt-2 mb-3 w-full outline-none rounded-2xl p-2 focus:border-2 border-blue-800
      shadow-md shadow-gray-400'
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </div>
      <button type="submit" className='mb-3 w-full bg-pink-300 p-1 font-semibold'>Login</button>
      <p className='text-center'>Forgot password?
      Don't have an account? <Link to={'/signup'} className='text-blue-600 font-semibold'> Register</Link></p>
      <p className='text-center mt-3 text-gray-600'>By registering, you agree to ReelSpark's Terms of Use and Privacy Policy</p>
    </form>
    </div>
    </div>
  );
};

export default Login;
