import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Course from './Components/Course';
import Carrers from './Components/Carrers';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/careers" element={<Carrers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
