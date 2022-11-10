import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer />
    </div>
  );
}

export default App;
