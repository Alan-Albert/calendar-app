import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({children}) => {

    const state = useSelector( state => state );
    console.log(state);


    const location = useLocation();
    localStorage.setItem('lastPath', location.pathname);
    localStorage.setItem('lastSearch', location.search);
    console.log(location);
    return children;
//   return user.logged 
//   ? children
//   : <Redirect to='/login' />
};
