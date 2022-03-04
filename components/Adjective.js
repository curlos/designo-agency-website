import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
`

const AdjectiveImage = styled.img`
  background: url('/assets/shared/desktop/bg-pattern-small-circle.svg');
  background-size: contain;
  width: 200px;
`

const Adjective = ({ adjective }) => {
  return (
    <Container>
      <AdjectiveImage src={adjective.image} alt={adjective.title} />
      <h3>{adjective.title}</h3>
      <p>{adjective.description}</p>
    </Container>
  )
}

export default Adjective