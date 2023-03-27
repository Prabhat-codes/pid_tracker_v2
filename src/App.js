import './App.css';
import Navbar from './components/Navbar';
import Choice from './components/Choice';
import Developer from './components/Developer';
import Reviewer from './components/Reviewer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState('Enable dark Mode')

  const toggleMode = () => {
    // console.log(mode)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setbtnText('Enable light Mode')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setbtnText('Enable dark Mode')
    }
  }
  return (
    <div className="App">
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Routes>
        <Route exact path="*" element={<Choice mode={mode}/>}  />
        <Route exact path="/home" element={<Choice mode={mode}/>} pathname="home"/>
        <Route exact path="/developer" element={<Developer mode={mode}/>} pathname="developer"/>
        <Route exact path="/reviewer" element={<Reviewer mode={mode}/>} pathname="reviewer" />
        <Route exact path="/signin" element={<Signin mode={mode}/>} pathname="signin"/>
        <Route exact path="/signup" element={<Signup mode={mode}/>} pathname="signup"/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
