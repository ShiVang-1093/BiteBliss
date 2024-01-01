import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Restaurants from "../src/components/Restaurants/Res-list/Restaurants";
import About from "./components/About/About";
import Account from "./components/User account/Account";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Restaurants/:id" element={<Restaurants />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/About" element={<About />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
