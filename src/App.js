import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);  //this is an object

  const showAlert = (message ,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#314449';
      showAlert("Dark Mode has been enabled.", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextHack" aboutText="About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/" element={<TestForm showAlert={showAlert} heading = "Enter the Text to Customize" mode={mode}/>} /> 
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;