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

const ImageWrapper = styled.div`
  background-image: url('/assets/shared/desktop/bg-pattern-small-circle.svg');
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${props => props.degrees === 'none' ? 'none' : `rotate(${props.degrees}deg)`};

  img {
    transform: ${props => props.degrees === 'none' ? 'none' : `rotate(${-1 * props.degrees}deg)`};
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

  &:active {
    background-color: #FFAD9B;
  }
`

const AboutCountry = ({ index, country }) => {

  const degrees = ['90', '45', '-90']

  return (
    <Container>
      <ImageWrapper degrees={degrees[index]}>
        <img src={`/assets/shared/desktop/${country.image}.svg`} alt={country.name} />
      </ImageWrapper>
      <p>{country.name.toUpperCase()}</p>
      <Link href="/locations" passHref>
        <SeeLocation>SEE LOCATION</SeeLocation>
      </Link>
    </Container>
  )
}

export default AboutCountry