import { Route, Navigate,Routes } from 'react-router-dom';
import React, { Component }  from 'react';
import Users from './Users';

const ProtectedRoute = ({ isLoggedIn,children  }) => {
    if (!isLoggedIn) {
     return     <Navigate to='/signup' />
      }
      return children;
};

export default ProtectedRoute;