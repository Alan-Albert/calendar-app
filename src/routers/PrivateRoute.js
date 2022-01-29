import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const state = useSelector( state => state );
    console.log(state);

    const location = useLocation();
    localStorage.setItem('lastPath', location.pathname);
    localStorage.setItem('lastSearch', location.search);
    // console.log(location);
    return children;
//   return user.logged 
//   ? children
//   : <Redirect to='/login' />
};
