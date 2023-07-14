

import React, { useEffect, useState } from "react";

import Signup from './Signup';
import Signin from './Signin';
import { Route, Routes, useLocation, useParams, Navigate } from 'react-router-dom';
import * as ApiAuth from './Api';
import ProtectedRoute from './ProtectedRoute.js';
import Users from './Users';
import './App.css';




function App() {
  const hist = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleRegistration = (data) => {
    return ApiAuth
      .register(data)
      .then(() => {
        handleAuthorization(data)
      
      })
      .catch((err) => {

      })
      .finally(() => {

      });
  }


  const handleAuthorization = (data) => {
    return ApiAuth
      .login(data)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setIsLoggedIn(true)
        hist.push('/users');
        ApiAuth.getUsers(data.token)
          .then(() => {
          })
      })
      .catch((error) => {
      })
      .finally(() => {

      });
  }


  return (
    <div className="App">
      <Routes>
        <Route exact path='/signin' element={<Signin onLogin={handleAuthorization} />} />
        <Route exact path='/signup' element={<Signup onRegister={handleRegistration} />} />
        <Route exact path='/users' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
          <Users/>
        </ProtectedRoute>
        }
         />
      </Routes>
    </div>
  );
}

export default App;
