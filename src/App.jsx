import React, {useState, useEffect} from 'react'
import GymContainer from './components/GymContainer';
import Header from './components/Header'
import { GlobalStyle } from './styles';
import DetailPanel from './components/DetailPanel';
import Search from './components/Search';
import { Transition } from 'react-transition-group'
import NavBar from './components/NavBar';
import jwt_decode from "jwt-decode"
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';



const App = () => {
  const [gyms, setGyms] = useState([])
  const [selectedGym, setSelectedGym] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredGyms, setFilteredGyms] = useState([])
  useEffect(() => {
    const fetchData = async () => {
     try {
        const response = await fetch('https://rock-climbing-api.herokuapp.com/api/gyms')
        
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
      gymAttribute.toLowerCase().includes(searchTerm.toLowerCase())


    //if searchTerm returns falsey value, display all gyms
    if (!searchTerm) {
      setFilteredGyms(gyms)
    } else {
      setFilteredGyms( gyms.filter((gym) => stringSearch(gym.name, searchTerm) || stringSearch(gym.location.address, searchTerm)
      )
      )
    }
  }

  //sign in process
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setUserName(name);
  
    axios
      .post("https://rock-climbing-api.herokuapp.com/api/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    setSignedIn(true);

    axios
      .post("https://rock-climbing-api.herokuapp.com/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
        const test = jwt_decode(res.data.token);
        setUserName(test.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Conditionally Render Title for Gym Container
  // Compares the length of the filteredGyms array and the gyms array... if they do not === one another, filter has happened
  const hasFiltered = filteredGyms !== gyms.length
  return (
  <>
    <GlobalStyle />
      <Header
        userName={userName}
        signedIn={signedIn}
      >
        <Search filterGyms={filterGyms} />
        <NavBar/>
      </Header>
    <GymContainer
        gyms={filteredGyms}
        pickGym={pickGym}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : "All Gyms"} />
     <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel gym={selectedGym} closePanel={closePanel} state={state}/>}
      </Transition>
      <Routes>
        <Route
          path="/signUp"
          element={
            <SignUp
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSignUp={handleSignUp}
            />
          }
        />
        <Route
          path="/signIn"
          element={
            <SignIn
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleLogIn={handleLogIn}
            />
          }
        />
        <Route
          path="/signOut"
          element={<SignOut setSignedIn={setSignedIn} />}
        />
      </Routes>
   </>
  );
}

export default App;
