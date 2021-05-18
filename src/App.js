import React,{useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import LandingPage from './screens/landingPage/landingPage';

function App() {

  useEffect(() => {
    
   
  }, [])
  return (
    <div className="App">

      <Route exact path='/' component={() => <LandingPage />}  />
     
   
     
    </div>
  );
}

export default App;
