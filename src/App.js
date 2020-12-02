import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import HomeContainer from './views/Home/HomeContainer';
import About from "./views/About/About.js";
import NotFound from "./views/NotFound/NotFound.js";

import Navbar from './components/Navbar/Navbar';
import LocationDisplay from './utils/LocationDisplay';
import Footer from './components/Footer/Footer';




function App() {


  return (
    <>
      <Router>
        <Navbar />
        <LocationDisplay />
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/about' exact component={About} />
          <Route path="*" component={NotFound} />
        </Switch>      
        <Footer/>
      </Router>
    </>
  );
}

export default App;
