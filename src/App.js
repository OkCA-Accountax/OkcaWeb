import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/post/:id" element={<PostDeatils />}></Route>
          <Route path="/profile" element={<Profile />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
