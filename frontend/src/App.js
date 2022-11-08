import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="mt-8"> 
        <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={< Login />}/>
          <Route path='/' element={<Dashboard />}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
