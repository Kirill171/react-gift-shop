import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useUser } from '@contexts/UserContext';

export default function index() {
  const location = useLocation();
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return (
    <>
      <hr />
      Basket
    </>
  )
}
