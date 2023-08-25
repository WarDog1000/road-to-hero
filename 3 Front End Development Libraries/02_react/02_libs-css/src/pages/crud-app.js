import React from 'react'
import Container from '../components/Container'
import { BulmaSection } from '../components/Bulma';
import Tarea1 from '../ejercicios/tarea _1/Tarea1';
import Tarea2 from '../ejercicios/tarea_2/Tarea2';

export default () => {
  return (
    <>
    <Container>
      <h2>React CRUD & APIS</h2>
      <BulmaSection>
        <Tarea2 />
      </BulmaSection>
      <BulmaSection>
        <Tarea1 />
      </BulmaSection>
    </Container>
    </>
  )
}

export const Head = () => <title>CRUD App</title>;
