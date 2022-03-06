import React from 'react'
import styled from 'styled-components'
import AboutCountry from './AboutCountry'
import { devices } from '../styles/media_queries' 

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  margin-bottom: 90px;

  @media ${devices.tablet} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 70px;
  };
`

const AboutCountries = () => {
  const countries = [
    {
      name: 'Canada',
      image: 'illustration-canada',
      location: ''
    },
    {
      name: 'Australia',
      image: 'illustration-australia',
      location: ''
    },
    {
      name: 'United Kingdom',
      image: 'illustration-united-kingdom',
      location: ''
    }
  ]

  return (
    <Container>
      {countries.map((country, index) => (
        <AboutCountry key={country.name + index} index={index} country={country} />
      ))}

    </Container>
  )
}

export default AboutCountries