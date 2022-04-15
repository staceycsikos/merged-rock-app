import React from 'react'
import { Panel, P, Em, Close, CloseWrapper, BG } from './styles'
import Gym from '../Gym'

const DetailPanel = ({ gym, closePanel }) => (
  <>
    <BG onClick={closePanel} />
  <Panel>
    <CloseWrapper onClick={closePanel}>
      <Close />
      </CloseWrapper>
    <Gym gym={gym} isLarge={true}/>
    <P>{gym.description}</P>
    <P>
    <Em>Published in {gym.published}</Em>
    </P>
  </Panel>
  </>
    )

export default DetailPanel