import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Home from './Home';

export default function Dashboard() {
// Initialize universal-cookie
  const navigate = useNavigate();

  const h=new Cookies();
  h.set('testiop','fewtfefre',{path:'/'})
  console.log(h.get('testiop'))

  useEffect(() => {
    const cookies = new Cookies(); 
    const token = cookies.get('token'); // Retrieve the cookie
    console.log('Cookie value:', String(token)); // Log the cookie value

    if (!token) {
      // Navigate to root path if the cookie does not exist
      navigate('/');
    }
  }, [ navigate]);

  // Render Home only if the cookie exists
  return <Home />;
}
