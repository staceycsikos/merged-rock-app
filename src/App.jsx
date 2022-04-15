import React, {useState, useEffect} from 'react'
import GymContainer from './components/GymContainer';
import Header from './components/Header'
import { GlobalStyle } from './styles';
import DetailPanel from './components/DetailPanel';

const App = () => {
  const [gyms, setGyms] = useState([])
  const [selectedGym, setSelectedGym] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
     try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        
        const gyms = await response.json()
          setGyms(gyms)       
     } catch (errors) {
       console.error(errors, "error" )
    }
    }
    
fetchData()
  }, [])

  const pickGym = (gym) => {
    setSelectedGym(gym)
  }
  console.log(selectedGym)
return (
  <>
    <GlobalStyle />
    <Header /> 
    <GymContainer gyms={gyms} pickGym={pickGym} />
    {selectedGym && <DetailPanel gym={selectedGym} />}
    </>
  );
}

export default App;
