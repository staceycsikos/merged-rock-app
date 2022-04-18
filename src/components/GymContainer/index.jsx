import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import { Container, H2, GymList, Wrapper } from './styles'
import Gym from '../Gym'

const GymContainer = ({gyms, pickGym, isPanelOpen, title}) => {
  const [scroll, setScroll] = useState(0);
  const prevPanelState = useRef(false)

  // The doubounce function delays invoking a specificed function, until after a certain amount of time has passes. Which is specificied as a 2nd argument in milliseconds
  // Structing the debounce as a callback
  // We want it to only take effect after the user has stopped scrolling... hence the delay
  // This will get triggered whenever the isPanelOpen value changes
  useEffect(() => {
    const handleScroll = debounce(() => {
      // window.scrollY returns the # of pixels that the document is currently scrolled vertically
      setScroll(window.scrollY)
    }, 100)

    //use effect will run each time isPanelOpen's value changes
    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    //clean up function 
    //we want to remove any pre-existing event handlers before our useEffect function gets rerun
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  //Get triggered by the change in 3 different variables within the dependency array: isPanelOpen, prevPanalState, scroll 
  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      // Window.scroll method scrolls the window to particular place in the argument
      // It takes 2 arguments: x axis and y axis coordinates --> x set to 0 b/c only want to scroll up & down
      window.scroll(0, scroll)
    }
    //Reassign value to isPanelOpen, so that we can know if the panel was just opened or not;
    //Therefore the window will scroll to our states scroll position only when the panel was previously open 
    prevPanelState.current = isPanelOpen
  
  }, [isPanelOpen, prevPanelState, scroll])

  return (
  <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
    <Wrapper>
    <GymList>
      {gyms.map((gym) => (
        <Gym key={gym.id} gym={gym} pickGym={pickGym}/>
      ))}
    </GymList>
    </Wrapper>
  </Container>
)
      }
export default GymContainer