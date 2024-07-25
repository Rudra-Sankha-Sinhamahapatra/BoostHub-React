import React from 'react';
// import { useNavigate } from 'react-router-dom';
import SignInStarted from './SignInnStarted';
import HomeStarted from './HomeStarted';
import Cookies from 'universal-cookie';

export const GetStarted: React.FC = () => {

  const cookies = new Cookies();
  const token = cookies.get('token');

  // console.log('Token:', token); 

  if (token) {
    console.log('User is authenticated, rendering HomeStarted');
    return <HomeStarted />;
  } else {
    console.log('User is not authenticated, rendering SignInStarted');
    return <SignInStarted />;
  }
};

export default GetStarted;
