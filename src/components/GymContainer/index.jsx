import React from 'react'
import { Container, H2, GymList } from './styles'
import Gym from '../Gym'

const GymContainer = ({gyms, pickGym}) => (
  <Container>
    <H2>All Gyms</H2>
    <GymList>
      {gyms.map((gym) => (
        <Gym key={gym.id} gym={gym} pickGym={pickGym}/>
      ))}
    </GymList>

  </Container>
)

export default GymContainer