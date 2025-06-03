import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
 import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const{loading,user}=use(AuthContext)
     const location=useLocation()
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(user && user?.email){
        return children
    }
       
  
    return <Navigate state={location.pathname} to="/login">Login</Navigate>


};

export default PrivateRoute;