import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Home from "./Pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment the following routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/contact" element={<ContactForm />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
