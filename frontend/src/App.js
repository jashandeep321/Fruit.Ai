// import logo from './logo.svg';
// import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Componenets/Login';
import Home from './Componenets/Home';
import Chat from './Componenets/Chat';
import FAQs from './Componenets/FAQs';
import Translate from './Componenets/Translate'
import About  from './Componenets/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        
        <Route path='/' element={ <Login />}/>
        <Route path='/home' element={ <Home />}/>
        <Route path='/Chat' element={ <Chat />}/>
        <Route path='/Translate' element={ <Translate />}/>
        <Route path='/FAQs' element={ <FAQs />}/>
        <Route path='/About' element={ <About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
