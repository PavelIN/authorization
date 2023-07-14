

import React, { useEffect, useState } from "react";

import Signup from './Signup';
import Signin from './Signin';
import SnackBar from './SnackBar';
import { Route, Routes, useParams, useNavigate,useLocation } from 'react-router-dom';

import * as ApiAuth from './Api';
import ProtectedRoute from './ProtectedRoute.js';
import Users from './Users';
import './App.css';




function App() {

  const navigate = useNavigate();
  const location = useLocation()

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsers, setIsUsers] = useState([]);
  const [error, setIsError] = useState('');
  const [isActive, setActive] = useState(false);
 



  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn]);


  const handleRegistration = (data) => {
    return ApiAuth
      .register(data)
      .then(() => {
        handleAuthorization(data)
        navigate('/')
        setIsError(`Успешный Вход`)
        setActive(true)
      })
      .catch((err) => {
        setIsError(`Ошибка:возможно пользователь с такими данными уже существует  ${error}`)
        setActive(true)
      })
      .finally(() => {

      });
  }


  const handleAuthorization = (data) => {

    return ApiAuth
      .login(data)
      .then((data) => {
        setIsError(`Успешный Вход`)
        setActive(true)
        localStorage.setItem('jwt', data);
        setIsLoggedIn(true)
        ApiAuth.getUsers(data)
          .then(() => {
            navigate('/users')
          })
      })
      .catch((error) => {
        setActive(true)
        setIsError(`Неверные данные  ${error}`)
        
      })
      .finally(() => {

      });
  }


  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    ApiAuth
      .getUsers(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setIsUsers(data)
        navigate('/users')

      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="App">
      <SnackBar error={error} isActive={isActive} setActive={setActive}/>
      <Routes>
        <Route exact path='/signin' element={<Signin onLogin={handleAuthorization} />} />
        <Route exact path='/' element={<Signup onRegister={handleRegistration} />} />
        <Route exact path='/users' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
          <Users users={isUsers} />
        </ProtectedRoute>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
