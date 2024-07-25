import { useEffect, useState } from 'react';
import Cookie from 'js-cookie'; 
import NoPage from './NoPage';
import CreateAccount from './CreateAccount';

const Signup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookie.get('token'); 

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn) {
    return <NoPage label="You are Logged In, Please" choice="Logout" route="home" />;
  }

  return <CreateAccount />;
};

export default Signup;
