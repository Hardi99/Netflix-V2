import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import logo from './assets/logo.png'
import Section from './Section';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
      try {
      const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1643648266/react-new-exercices/netflix2022/movies_rnexgr.json"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      } catch (error) {
      console.log(error.message);
      }
  };
  fetchData();
  }, []);

  return isLoading ?  (
    <p>Loading..</p>
  ) : (
      <>
      <header>
        <img className='logo' src={logo} alt="" />
      </header>
        <Section data={data} />
      </>
    )
  
}

export default App
