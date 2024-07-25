import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import NoPage from './NoPage';

const Signin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('token'); // Get the cookie

    // Check if the cookie exists
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return isLoggedIn ? (
    <NoPage label="You are Logged In, Please" choice="Logout" route="home" />
  ) : (
    <Login />
  );
};

export default Signin;
