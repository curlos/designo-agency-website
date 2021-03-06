import React from 'react'
import styled from 'styled-components'
import LocationCountry from './LocationCountry'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 130px;
  margin-top: 80px;

  @media ${devices.tablet} {
    gap: 90px;
  };

  @media ${devices.mobile} {
    margin-top: 65px;
  };
`

const LocationCountries = () => {
  const COUNTRIES = [
    {
      name: 'Canada',
      address: {
        title: 'Designo Central Office',
        street: '3886 Wellington Street',
        state: 'Toronto, Ontario M9C 3J5'
      },
      contact: {
        phoneNumber: '+1 253-863-8967',
        email: 'contact@designo.co'
      },
      image: 'image-map-canada.png'
    },
    {
      name: 'Australia',
      address: {
        title: 'Designo AU Office',
        street: '19 Balonne Street',
        state: 'New South Wales 2443'
      },
      contact: {
        phoneNumber: '(02) 6720 9092',
        email: 'contact@designo.au'
      },
      image: 'image-map-australia.png'
    },
    {
      name: 'United Kingdom',
      address: {
        title: 'Designo UK Office',
        street: '13  Colorado Way',
        state: 'Rhyd-y-fro SA8 9GA'
      },
      contact: {
        phoneNumber: '078 3115 1400',
        email: 'contact@designo.uk'
      },
      image: 'image-map-united-kingdom.png'
    }
  ]

  return (
    <Container>
      {COUNTRIES.map((country, index) => (
        <LocationCountry key={country.name + index} index={index} country={country} />
      ))}
    </Container>
  )
}

export default LocationCountries