import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import chef from '../images/chef_login.png';
import google from '../images/google.png';

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        // confirmPassword: ''
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: value,
    //   }));
    // };
  
    const handleSignup = async (event) => {
      event.preventDefault();
  
      console.log('user registered successfully');
        
      try {
        const res = await fetch("http://localhost:4000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname: formData.firstname,
            lname: formData.lastname,
            email: formData.email,
            password: formData.password,
            // confirm_password: formData.password,
            // contactno: formData.contactno,
          })
        });
  
        const resJson = await res.json();
        console.log("Resjson : ", resJson);
  
        if (res.status === 201) {
          window.alert("Account successfully created");
          localStorage.setItem("jwt", resJson.token);
          console.log("Registered Successful");
          navigate("/");
        } else {
          window.alert(resJson.errors[0]);
          console.log("An error occurred");
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

  return (
    <section className="h-screen w-full flex items-center justify-center xs:px-10">
      <div className="bg-yellow flex w-[90%] md:flex-col-reverse h-auto rounded-2xl shadow-lg max-w-3xl p-5 items-center xs:h-[90%]">
        <div className="px-8 md:px-16 md:text-center">
        <h2 className="font-bold text-2xl text-coffee">Sign Up</h2>
          <p className="text-xs mt-4 text-coffee">Welcome to our family, Sign up easily</p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-5 rounded-xl border"
              type="firstname"
              name="firstname"
              placeholder="Enter your first name"
              onChange={handleChange}
              value={formData.firstname}
            />
            <input
              className="p-2 rounded-xl border"
              type="lastname"
              name="lastname"
              placeholder="Enter your last name"
              onChange={handleChange}
              value={formData.lastname}
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              value={formData.email}
            />

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={handleChange}
              value={formData.password}
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
              <div className="relative">
              {/* <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? 'text' : 'confirmpassword'}
                name="confirmpassword"
                placeholder="Confirm Password"
              /> */}
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
            onClick={handleSignup}>
              Sign Up
            </button>
          </form>

          <div className="mt-4 grid grid-cols-3 items-center text-coffee">
            <hr className="border-coffee" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-coffee" />
          </div>

          <button className="bg-coffee border py-2 w-full rounded-xl mt-5 flex justify-around items-center text-sm hover:scale-105 duration-300 text-yellow">
            <img className='w-5 h-5 ' src={google} alt=''></img>
              Register with Google
          </button>

          {/* <div className="mt-5 text-xs border-b border-coffee py-4 text-coffee">
            <Link to="">Forgot your password?</Link>
          </div> */}

          <div className="mt-3 text-xs flex justify-between items-center text-coffee">
            <p>Already have an account?</p>
            <Link to="/Login">
              <button className="ml-3 py-2 px-5 bg-coffee text-yellow border rounded-xl hover:scale-110 duration-300">Login</button>
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

export default Signup;
