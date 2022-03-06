import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const DesignImg = styled.img`
  content:url('/assets/${props => props.designType}/desktop/${props => props.imageFilename}.jpg');
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media ${devices.tablet} {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 20px;
  };
  
`

const DesignInfo = styled.div`
  flex: 1;
  padding: 30px;
  text-align: center;
  background-color: #FDF3F0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  line-height: 26px;

  h3 {
    font-weight: 500;
    font-size: 20px;
    color: #E7816B;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  p {
    color: #333136;
  }

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
  };
`

const Container = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:active {
    ${DesignInfo} {
      background-color: #E7816B;
      color: #FFFFFF;

      h3, p {
        color: #FFFFFF;
      }
    }
  }

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  };
`



const DesignCard = ({ designType, design }) => {
  return (
    <Container>
      <DesignImg designType={designType} imageFilename={design.imageFilename} />
      <DesignInfo>
        <h3>{design.title}</h3>
        <p>{design.description}</p>
      </DesignInfo>
    </Container>
  )
}

export default DesignCard