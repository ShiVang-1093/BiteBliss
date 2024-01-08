import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pizza from '../images/pizza.gif';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="mx-auto px-4 flex items-center justify-center h-[40%] overflow-hidden w-[90%] m-[5%] bg-yellow rounded-3xl shadow-yellow ">
      {/* Image section */}
      <div className="w-[35%] lg:w-1/2 ">
        <img src={pizza} alt='p' className="w-full h-full object-cover mx-10"></img>
      </div>

      {/* Login form section */}
      <div className="w-[65%] lg:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4 flex">
            <label htmlFor="email" className="text-coffee font-bold mr-4 items-center">Email Id</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-coffee leading-tight focus:outline-none"
            />
          </div>
          <div className="mb-7 flex">
            <label htmlFor="password" className="block text-coffee font-bold mr-4">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-coffee leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button type="submit" className="bg-coffee text-yellow px-4 py-2 rounded font-bold hover:bg-green">
            Sign In
          </button>
          <div className="flex items-center justify-between mt-4">
            <Link to="/Signup" className="underline text-coffee hover:text-blue-700">Sign Up</Link>
            <Link to="/forgot-password" className="underline text-coffee hover:text-blue-700">Forgot Password?</Link>
          </div>
          <div className="mt-6">
            <button className="bg-coffee hover:bg-gray-400 text-yellow font-bold py-2 px-4 rounded mr-2">
              <i className="fab fa-facebook-f"></i> Sign in with Facebook
            </button>
            {/* ... other social login buttons */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css'

// const Login=()=> {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(`Email: ${email}, Password: ${password}`);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <br />
//             <Link to="/Signup">Don't have an account? Sign Up</Link>
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default Login;
