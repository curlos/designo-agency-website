import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => Number(props.index) % 2 === 0 ? '2fr 1fr' : '1fr 2fr'};
  gap: 20px;
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
`

const MapImage = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-image: url('/assets/locations/desktop/${props => props.image}');
  background-size: cover;
`

const AddressContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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