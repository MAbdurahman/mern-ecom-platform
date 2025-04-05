import React from 'react';
import {Navigate} from 'react-router-dom';


const isAuthenticated = () => {
   //return !!localStorage.getItem('token');
   return true;
}

export default function ProtectedRoute({children}) {

   if (!isAuthenticated()) {
      return (
         <Navigate to='/login'  replace={true} />
      )
   }
   return children;
}