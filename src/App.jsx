import React, {useState, useEffect} from 'react'
import GymContainer from './components/GymContainer';
import Header from './components/Header'
import { GlobalStyle } from './styles';
import DetailPanel from './components/DetailPanel';
import Search from './components/Search';
import {Transition} from 'react-transition-group'

const App = () => {
  const [gyms, setGyms] = useState([])
  const [selectedGym, setSelectedGym] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredGyms, setFilteredGyms] = useState([])
  useEffect(() => {
    const fetchData = async () => {
     try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        
        const gyms = await response.json()
        setGyms(gyms)    
        //need to set filteredGyms or else page will render empty
       setFilteredGyms(gyms)
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

  
  const filterGyms = (searchTerm) => {
//Convert the array and the input to lowercase & string to make non-case-sensitive
    const stringSearch = (gymAttribute, searchTerm) => 
      gymAttribute.toLowerCase.includes(searchTerm.toLowerCase())


    //if searchTerm returns falsey value, display all gyms
    if (!searchTerm) {
      setFilteredGyms(gyms)
    } else {
      setFilteredGyms( gyms.filter((gym) => stringSearch(gym.title, searchTerm) || stringSearch(gym.author, searchTerm)
      )
      )
    }
  }

  // Conditionally Render Title for Gym Container
  // Compares the length of the filteredGyms array and the gyms array... if they do not === one another, filter has happened
  const hasFiltered = filteredGyms !== gyms.length
  return (
  <>
    <GlobalStyle />
      <Header>
        <Search filterGyms={filterGyms}/>
    </Header>
      <GymContainer
        gyms={filteredGyms}
        pickGym={pickGym}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : "All books"} />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel gym={selectedGym} closePanel={closePanel} state={state}/>}
    </Transition>
      </>
  );
}

export default App;
