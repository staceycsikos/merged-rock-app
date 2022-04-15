import React from 'react'
import { Panel, P, Em } from './styles'
import Gym from '../Gym'

const DetailPanel = ({ gym }) => (
  <Panel>
    <Gym gym={gym} isLarge={true}/>
    <P>{gym.description}</P>
    <P>
    <Em>Published in {gym.published}</Em>
    </P>
  </Panel>
)

export default DetailPanel