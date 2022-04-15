import React from 'react'
import { Panel } from './styles'
import Gym from '../Gym'

const DetailPanel = ({ gym }) => (
  <Panel>
    <Gym gym={gym}/>
    <figure>
      <img alt="" src={gym.image}/>
      <h3>{gym.title}</h3>
      <h4>by {gym.author}</h4>
    </figure>
    <p>{gym.description}</p>
    <p></p>
    <em>Published in {gym.published}</em>
    <p></p>
  </Panel>
)

export default DetailPanel