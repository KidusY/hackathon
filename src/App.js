import React,{useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import LandingPage from './screens/landingPage/landingPage';
import Maps from './screens/maps/maps';

function App() {

  useEffect(() => {
    
   
  }, [])
  return (
    <div className="App">

      <Route exact path='/' component={() => <LandingPage />}  />
      <Route exact path='/maps' component={() => <Maps />}  />
     
   
     
    </div>
  );
}

export default App;
