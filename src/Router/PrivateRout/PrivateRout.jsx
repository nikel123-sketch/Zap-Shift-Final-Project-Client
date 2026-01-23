import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRout = ({children}) => {
  const { user, loading } = useAuth();
  // location--
  const location = useLocation();
    // console.log(location);

    // loading check------
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  // check user
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
  return children;
};

export default PrivateRout;