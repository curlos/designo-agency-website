import React from 'react'
import styled from 'styled-components'
import Adjective from './Adjective'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
  };
`

const Adjectives = () => {
  const adjectives = [
    {
      title: "PASSIONATE",
      description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      image: "/assets/home/desktop/illustration-passionate.svg"
    },
    {
      title: "RESOURCEFUL",
      description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      image: "/assets/home/desktop/illustration-resourceful.svg"
    },
    {
      title: "FRIENDLY",
      description: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      image: "/assets/home/desktop/illustration-friendly.svg"
    }
  ]


  return (
    <Container>
      {adjectives.map((adjective) => <Adjective key={adjective.title} adjective={adjective} />)}
    </Container>
  )
}

export default Adjectives