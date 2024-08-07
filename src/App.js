import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import WhyChooseUs from "./Pages/whychooseus";
import ClientSays from "./Pages/clientsays";
import ContactForm from "./Pages/contact";
import Youtube from "./Pages/youtube";

function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/client-says" element={<ClientSays />} />
        <Route path="/contact" element={<ContactForm />} /> */}
      </Routes>
      <Footer />
      </>
  );
}

export default App;


      {/* <Navbar /> */}
      {/* <Home /> */}
         {/* <Services /> */}
      {/* <Youtube /> */}
      {/* <WhyChooseUs /> */}
      {/* <ClientSays /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}