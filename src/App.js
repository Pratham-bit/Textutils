import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert= (message,type) =>{
    setalert({
      msg : message,
      type : type
  })
  setTimeout(() => {
    setalert(null);
  }, 3000);
  }
  const togglemode = ()=> {
    if(mode === 'light'){
      setmode('dark');
    document.body.style.backgroundColor= '#36454F';
    showalert("Dark Mode has been enabled.","success");
    }
    else{
      setmode('light');
    document.body.style.backgroundColor= 'white';
    showalert("Light Mode has been enabled.","success");
    }
  }
  return (
  <>
  <Router>
        <Navbar title="TextUtils" abouttext="About Textutils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            {/* Define the route for the About page */}
            <Route exact path="/about" element={<About />} />

            {/* Define the route for the Home page (Textform) */}
            <Route exact path="/" element={<Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
