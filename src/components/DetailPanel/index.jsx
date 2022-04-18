import React, {useEffect, useRef} from 'react'
import { Panel, P, CloseWrapper, BG, URL, isYellow } from './styles'
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
      <P>Contact: {gym.phoneNumber}</P>
      <P>Day-pass: $ {gym.oneDayPass}</P>
      <P>Membership: $ {gym.membership} /month</P>
      <P>Rental: $ {gym.rentalGear}</P>
      <P>Auto Belay? {gym.autoBelay ? "✅" : "🚫"}</P>
      <P>Bouldering? {gym.bouldering ? "✅" : "🚫"}</P>
      <P>Top Roping? {gym.topRoping ? "✅" : "🚫"}</P>
            <P><a style={{textDecoration: 'none'}}
              href={gym.url}><URL>Gym website: {gym.url}</URL></a></P>
      <P>{gym.location?.fullAddress}</P>
        </>
      )}
      
  </Panel>
  </>
    )
    }
export default DetailPanel