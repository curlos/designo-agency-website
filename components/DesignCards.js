import React from 'react'
import styled from 'styled-components'
import DesignCard from './DesignCard'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 90px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
  };
`

const DesignCards = ({ designType, designs }) => {

  return (
    <Container>
      {designs.map((design) => (
        <DesignCard key={design} designType={designType} design={design} />
      ))}
    </Container>
  )
}

export default DesignCards