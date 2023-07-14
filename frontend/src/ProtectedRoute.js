import { Route, Navigate,Routes } from 'react-router-dom';
import React, { Component }  from 'react';
import Users from './Users';

const ProtectedRoute = ({ isLoggedIn,children  }) => {
    console.log(isLoggedIn)
    if (!isLoggedIn) {
     return     <Navigate to='/signin' />
      }
      return children;
};

export default ProtectedRoute;