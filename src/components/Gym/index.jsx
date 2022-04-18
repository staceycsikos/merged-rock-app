import React from 'react'
import {Container, Cover, Title, Address} from './styles'

const Gym = ({gym, pickGym, isLarge}) => (
  <Container $isLarge={isLarge} onClick={() => pickGym(gym)}> 
    
    <Cover alt={`Gym image for ${gym.name} by ${gym.location.address}`}
      src={gym.image}
    />
    <figcaption>
      <Title $isLarge={isLarge}>{gym.name}</Title>
      <Address $isLarge={isLarge}>{isLarge ? gym.location.fullAddress : gym.location.address}</Address>
    </figcaption>
</Container>

)

export default Gym 