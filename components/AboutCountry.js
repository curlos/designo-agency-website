import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 5px;
    text-transform: capitalize
  }
`

const SeeLocation = styled.button`
  background-color: #E7816B;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: medium;
  border: none;
  border-radius: 10px;
  padding: 20px;
  letter-spacing: 1px;
  cursor: pointer;
`

const AboutCountry = ({ country }) => {
  // /assets/shared/desktop/illustration-canada.svg

  return (
    <Container>
      <img src={`/assets/shared/desktop/${country.image}.svg`} alt={country.name} />
      <p>{country.name.toUpperCase()}</p>
      <Link href="/" passHref>
        <SeeLocation>SEE LOCATION</SeeLocation>
      </Link>
    </Container>
  )
}

export default AboutCountry