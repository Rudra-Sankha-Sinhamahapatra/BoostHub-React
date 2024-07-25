import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Home from './Home';

export default function Dashboard() {
  const navigate = useNavigate();

  const h=new Cookies();
  h.set('testiop','fewtfefre',{path:'/'})
  console.log(h.get('testiop'))

  useEffect(() => {
    const cookies = new Cookies(); 
    const token = cookies.get('token'); 
    console.log('Cookie value:', String(token));

    if (!token) {
      navigate('/');
    }
  }, [ navigate]);


  return <Home />;
}
