import React, {useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import chef from '../images/chef_login.png';
import google from '../images/google.png';
import isLoggedin from './isLoggedin';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [role, setRole] = useState(''); // [1] Initialize role state
    
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const { isLoggedIn, login, setRole } = useAuthorization(); // Utilize context


  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isLoggedin()) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    const resJson = await res.json();
    // const userRole = resJson.role; // Retrieve user role from response
    // localStorage.setItem('jwt', resJson.token);
    // localStorage.setItem('userRole', userRole);
    // console.log("User Role: ", userRole);

    if (res.status === 400 || res.status === 401 || res.status === 403 || !resJson) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else if (res.status === 200) {
      window.alert("Login Successful");
      localStorage.setItem("jwt", resJson.token);
      console.log("Login Successful");
      // setRole(resJson.registeredUser.role);
      navigate('/');
    }
  };


  return (
    <section className="h-screen w-full flex items-center justify-center xs:px-10">
      <div className="bg-yellow flex w-[90%] md:flex-col-reverse h-auto rounded-2xl shadow-lg max-w-3xl p-5 items-center xs:h-[80%]">
        <div className="px-8 md:px-16 md:text-center">
          <h2 className="font-bold text-2xl text-coffee">Login</h2>
          <p className="text-xs mt-4 text-coffee">If you are already a member, easily log in</p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-5 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}

            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}

              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                viewBox="0 0 16 16"
                onClick={togglePasswordVisibility}
              >
                {/* ...path data */}
              </svg>
            </div>
            <button className="bg-coffee rounded-xl text-yellow py-2 px-5 mt-2 hover:scale-105 duration-300"
              onClick= {handleLogin}>
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-coffee">
            <hr className="border-coffee" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-coffee" />
          </div>

          <button className="bg-coffee border py-2 w-full rounded-xl mt-5 flex justify-around items-center text-sm hover:scale-105 duration-300 text-yellow">
            <img className='w-5 h-5 ' src={google} alt=''></img>
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-coffee py-4 text-coffee">
            <Link to="">Forgot your password?</Link>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-coffee">
            <p>Don't have an account?</p>
            <Link to="/Signup">
              <button className="py-2 px-5 bg-coffee text-yellow border rounded-xl hover:scale-110 duration-300">Register</button>
            </Link>
          </div>
        </div>

        <div className="xs:hidden md:flex md:justify-center md:mt-8 md:w-3/4 md:mx-auto ml-20 w-1/2">
          <img
            className="rounded-2xl md:h-[300px]"
            src={chef}
            alt='.'
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
