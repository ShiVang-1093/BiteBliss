import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Homepage/Navbar';
import Homepage from './components/Homepage/Homepage';
import Restaurants from '../src/components/Restaurants/Res-list/Restaurants';
import About from './components/About/About';
import Login from './components/Auth/Login';
import Signup from './components/Auth/signup';
import Coupon from './components/Coupons/Coupon';
import Menu from './components/Restaurants/Res-Menu/Menu';
import Profile from './components/User account/Profile';
import Coupens from './components/User account/Coupens';
import Footer from './components/Footer/Footer';

import ProtectedRoute from './components/Protectedroute'; // Import ProtectedRoute
import Adminpg1 from './components/Admin/Adminpg1';
import Restaurant from './components/Restaurant_pages/Restaurant';
import Salesman from './components/Sales person/Salesman';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="/menu/:restaurantName" element={<Menu />} />
          <Route path="/Coupons" element={<Coupon />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<About />} />

          {/* Protected routes with role-based access */}
          <Route path="/admin" element={<Adminpg1 />} /> {/* No need for ProtectedRoute here */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/salesman" element={<Salesman />} /> {/* No need for ProtectedRoute here */}

        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
