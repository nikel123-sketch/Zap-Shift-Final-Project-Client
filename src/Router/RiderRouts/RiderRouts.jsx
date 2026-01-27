import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/Role/useRole';
import Loading from '../../Component/Loading/Loading';
import Forbidden from '../../Component/Forbiden/Forbiden';

const RiderRouts = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useRole();

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RiderRouts;