import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Restaurants from "../src/components/Restaurants/Res-list/Restaurants";
import About from "./components/About/About";
// import Account from "./components/User account/Account";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/signup";
import Coupon from "./components/Coupons/Coupon";
import Menu from "./components/Restaurants/Res-Menu/Menu";
import Profile from "./components/User account/Profile";
import Coupens from "./components/User account/Coupens";
// import Logout from "./components/User account/Logout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/menu/:restaurantName" element={<Menu />} />
        <Route path="/Coupons" element={<Coupon />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/mycoupons" element={<Coupens />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
