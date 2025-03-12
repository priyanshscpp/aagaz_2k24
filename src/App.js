import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import NavBar from "./Components/NavBar"

import Home from './Pages/home';
import Events0 from './Pages/events0';
import Events1 from './Pages/events1';
import Events2 from './Pages/events2';
import Gallery from './Pages/gallery';
import Team from './Pages/ourTeam';
import Merch from './Pages/merch';
import Sponsors from './Pages/sponsors';
import Esports from './Pages/esports';
// import SubCouncils from './Pages/subCouncils';
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer"

// Add a style to ensure no black strip at the top
const appStyle = {
  margin: 0,
  padding: 0,
  overflow: 'hidden'
};

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/events0' element={<Events0 />} />
          <Route path='/events1' element={<Events1 />} />
          <Route path='/events2' element={<Events2 />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/ourTeam' element={<Team />} /> 
          <Route path='/sponsers' element={<Sponsors />} />
          <Route path='/esports' element={<Esports />} />
          {/* <Route path='/subCouncils' element={<SubCouncils />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;