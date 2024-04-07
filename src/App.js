import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from './pages/Home';
import Skill from './pages/Skillset';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Education from '../src/components/Education/Education';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './style.css'

function App() {
  const [load, upadateLoad] = useState(true);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Particle/> */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar setShowResume={setShowResume} />
        <ScrollToTop />
        {!showResume && (
          <>
            <Home />
            <Education />
            <Skill />
            <Project />
            <Contact />
          </>
        )}
        {showResume && <Resume />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
