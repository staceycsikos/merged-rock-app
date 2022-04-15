import React, {useState, useEffect} from 'react'
import GymContainer from './components/GymContainer';
import Header from './components/Header'
import { GlobalStyle } from './styles';
import DetailPanel from './components/DetailPanel';
import {Transition} from 'react-transition-group'

const App = () => {
  const [gyms, setGyms] = useState([])
  const [selectedGym, setSelectedGym] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

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
    setShowPanel(true)
  }

  const closePanel = () => { 
    setShowPanel(false)
  }
  return (
  <>
    <GlobalStyle />
    <Header /> 
    <GymContainer gyms={gyms} pickGym={pickGym} isPanelOpen={showPanel}/>
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel gym={selectedGym} closePanel={closePanel} state={state}/>}
    </Transition>
      </>
  );
}

export default App;
