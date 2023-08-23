import React from 'react'
import Container from '../components/Container'
import Tarea1 from '../ejercicios/tarea _1/Tarea1';
import { BulmaSection } from '../components/Bulma';

export default () => {
  return (
    <>
    <Container>
      <h2>React CRUD & APIS</h2>
      <BulmaSection>
        <Tarea1 />
      </BulmaSection>
    </Container>
    </>
  )
}

export const Head = () => <title>CRUD App</title>;
