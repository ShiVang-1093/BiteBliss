import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        // Add code to submit form data to server here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <Link to="/Signup">Don't have an account? Sign Up</Link>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
