import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;
  };

  p {
    font-weight: 400;
    font-size: 16px;
  };

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    text-align: start;
  };

  @media ${devices.mobile} {
    display: block;
    text-align: center;
  };
`

const AdjectiveImage = styled.img`
  background: url('/assets/shared/desktop/bg-pattern-small-circle.svg');
  background-size: contain;
  width: 200px;
`

const Adjective = ({ adjective }) => {
  return (
    <Container>
      <div>
        <AdjectiveImage src={adjective.image} alt={adjective.title} />
      </div>
      <div>
        <h3>{adjective.title}</h3>
        <p>{adjective.description}</p>
      </div>
    </Container>
  )
}

export default Adjective