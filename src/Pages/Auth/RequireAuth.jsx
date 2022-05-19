import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import loadingImg from '../../assets/images/loading.gif';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <>
        <div className="h-[100vh] flex items-center justify-center">
          <img className="bg-white h-20" src={loadingImg} alt="" />
        </div>
      </>
    );
  }
  if (error) {
    return toast('Error...');
  }
  // console.log(user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
