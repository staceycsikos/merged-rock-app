import React from 'react'
import {Container, Cover, Title, Author} from './styles'

const Gym = ({gym, pickGym}) => (
  <Container onClick={() => pickGym(gym)}> 
    
    <Cover alt={`Gym image for ${gym.title} by ${gym.author}`}
      src={gym.image}
    />
    <figcaption>
      <Title>{gym.title}</Title>
      <Author>by {gym.author}</Author>
    </figcaption>
</Container>

)

export default Gym 