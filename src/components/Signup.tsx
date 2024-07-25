import { useEffect, useState } from 'react';
import Cookie from 'js-cookie'; // For cookie handling
import NoPage from './NoPage';
import CreateAccount from './CreateAccount';

const Signup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookie.get('token'); // Retrieve the token from cookies

    if (token) {
      // If token exists, consider the user logged in
      setIsLoggedIn(true);
    } else {
      // If token doesn't exist, user is not logged in
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn) {
    return <NoPage label="You are Logged In, Please" choice="Logout" route="home" />;
  }

  return <CreateAccount />;
};

export default Signup;
