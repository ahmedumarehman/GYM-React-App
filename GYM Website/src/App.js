import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './Aboutus';
import OurBranches from './OurBranch';
import PgcGymBlog from './Blog';
import PgcGymPromotion from './Promotion';
import Registration from './Registration'; // Import Registration component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/OurBranch" element={<OurBranches />} />
        <Route path="/Blog" element={<PgcGymBlog />} />
        <Route path="/Promotion" element={<PgcGymPromotion />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
