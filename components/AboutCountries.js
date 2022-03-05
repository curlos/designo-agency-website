import React from 'react'
import styled from 'styled-components'
import AboutCountry from './AboutCountry'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 90px;
`

const AboutCountries = () => {

  // /assets/shared/desktop/illustration-canada.svg

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
        <AboutCountry index={index} country={country} />
      ))}

    </Container>
  )
}

export default AboutCountries