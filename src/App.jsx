import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout/Layout"
import Resume from './Pages/Resume/Resume';
import Home from './Pages/Homes/Home';
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          
          <Route path="/" element={ <Home />} />
          <Route path="/resume" element={<Resume />} />
          
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
