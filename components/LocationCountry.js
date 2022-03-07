import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => Number(props.index) % 2 === 0 ? '2fr 1fr' : '1fr 2fr'};
  gap: 20px;

  @media ${devices.tablet} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  };

  @media ${devices.mobile} {
    gap: 0px;
  };
`

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 20px;
  background-color: #FDF3F0;
  padding: 90px;

  h2 {
    font-size: 40px;
    color: #E7816B;
  }

  @media ${devices.tablet} {
    padding: 60px;
  };

  @media ${devices.mobile} {
    border-radius: 0px;
    text-align: center;
    padding: 60px 40px;
  };
`

const MapImage = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-image: url('/assets/locations/desktop/${props => props.image}');
  background-size: cover;
  
  @media ${devices.tablet} {
    order: -1;
  };

  @media ${devices.mobile} {
    border-radius: 0px;
  };
`

const AddressContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
  };
`

const LocationCountry = ({ index, country }) => {

  return (
    <Container index={index}>
      {Number(index) % 2 === 0 ? (
        <CountryInfo>
        <h2>{country.name}</h2>

        <AddressContact>
          <div>
            <h3>{country.address.title}</h3>
            <p>{country.address.street}</p>
            <p>{country.address.state}</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>P: {country.contact.phoneNumber}</p>
            <p>M: {country.contact.email}</p>
          </div>
        </AddressContact>
      </CountryInfo>
      ) : (
        <MapImage image={country.image} />
      )}

    {Number(index) % 2 === 0 ? (
      <MapImage image={country.image} />
    ) : (
      <CountryInfo>
        <h2>{country.name}</h2>

        <AddressContact>
          <div>
            <h3>{country.address.title}</h3>
            <p>{country.address.street}</p>
            <p>{country.address.state}</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>P: {country.contact.phoneNumber}</p>
            <p>M: {country.contact.email}</p>
          </div>
        </AddressContact>
      </CountryInfo>
    )}
      

    </Container>
  )
}

export default LocationCountry