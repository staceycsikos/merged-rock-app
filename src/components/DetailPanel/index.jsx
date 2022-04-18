import React, {useEffect, useRef} from 'react'
import { Panel, P, Em, CloseWrapper, BG } from './styles'
import {Close} from '../../styles'
import Gym from '../Gym'

const DetailPanel = ({ gym, closePanel, state }) => {
 const panelEl = useRef(null)
 const prevGym = useRef(null)
  
  useEffect(() => {
    if (prevGym.current !== gym) {
      panelEl.current.scrollTop = 0;
    }

    prevGym.current = gym;
  }, [gym, prevGym])
  
  console.log(state)
  return (
  <>
      <BG onClick={closePanel} $state={state}/>
  <Panel $state={state} ref={panelEl}>
    <CloseWrapper onClick={closePanel} $state={state}>
      <Close />
      </CloseWrapper>
    {gym && (
 <>
    <Gym gym={gym} isLarge={true}/>
    <P>{gym.description}</P>
    <P>
    <Em>Published in {gym.published}</Em>
    </P>
        </>
      )}
      
  </Panel>
  </>
    )
    }
export default DetailPanel