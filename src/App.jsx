import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import GymContainer from './components/GymContainer';

const App = () => {
  const [gyms, setGyms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
     try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        
        const books = await response.json()
          setGyms(gyms)       
     } catch (errors) {
       console.error(errors, "error" )
    }
    }
    
fetchData()
  }, [])
return (
    <>
    <GymContainer />
    </>
  );
}

export default App;
