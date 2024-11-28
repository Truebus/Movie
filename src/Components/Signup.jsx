import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[username,setUserName] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { username,email, password};

    // Save user data in context and localStorage
    login(userData);
    alert('Signup successful!');

    // Redirect to login page after signup
    navigate('/login');
  };

  return (
    <div className='p-[10px] flex justify-center' id='sign'>
    <div className='border-2 border-gray-200 rounded-3xl bg-yellow-200 p-4 w-[350px] h-auto' id="form">
      <form onSubmit={handleSubmit} className='flex flex-col'>
      <h2 className='text-center text-blue-700 font-serif font-bold text-3xl'>Let's get you set up!</h2>
      <h2 className='text-center mt-2 mb-2 text-blue-700 font-sans underline font-bold text-lg'>Register via Email</h2>
      <div>
        <label htmlFor='name=' className='mt-3 font-semibold'>Enter UserName:-</label><br/>
      <input className='w-full mb-3 mt-2 p-2 outline-none rounded-xl shadow-md shadow-gray-500 focus:border-2 border-sky-500'
        type="text" id='name'
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
      /><br/>
      </div>
      <div>
        <label htmlFor='email' className='mt-3 font-semibold'>Enter Your Email:-</label><br/>
      <input  className='w-full mb-3 mt-2 p-2 outline-none rounded-xl shadow-md shadow-gray-500 focus:border-2 border-sky-500'
        type="email" id='email'
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br/>
      </div>
      <div>
        <label htmlFor='password' className='mt-3 font-semibold'>Enter Password:-</label><br/>
      <input  className='w-full mb-3 mt-2 p-2 outline-none rounded-xl shadow-md shadow-gray-500 focus:border-2 border-sky-500'
        type="password" id='password'
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br/>
      </div>
      <div>
      <button type="submit" className='text-center w-full mb-[10px] bg-yellow-400 p-2 rounded-lg font-semibold'>Register</button>
      </div>
      <p className='text-center text-sm mb-4 text-gray-500'>By continuing or registering, you agree that you have read and understood ReelSpark's Privacy Policy and agree to ReelSpark'sTerms of Use.</p>
    <p className='text-center'>Already have an account? <Link className="text-sky-700" to={"/login"}> Sign In</Link> </p>
    </form>
    </div>
    </div>
  );
};

export default Signup;
