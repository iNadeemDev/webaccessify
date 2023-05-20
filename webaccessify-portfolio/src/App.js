import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/Signup/SignUp_Form';
import Home from './pages/Home';
import About from './pages/About';
import Solution from './pages/Solution';
import SignIn from './components/Signup/SignIn';
import Contactus from './pages/Contactus';
import Price from './pages/Price';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/sign-up' element={<SignUpForm/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/About-us' element={<About/>} />
          <Route path='/Solution' element={<Solution/>} />
          <Route path='/Contact-us' element={<Contactus/>} />
          <Route path='/Pricing' element={<Price/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
