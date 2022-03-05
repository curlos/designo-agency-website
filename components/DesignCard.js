import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const DesignImg = styled.img`
  content:url('/assets/${props => props.designType}/desktop/image-${props => props.title.toUpperCase()}.jpg');
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const DesignInfo = styled.div`
  flex: 1;
  padding: 20px;
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
`



const DesignCard = ({ designType, design }) => {
  return (
    <Container>
      <DesignImg designType={designType} title={design.title.toLowerCase()} />
      <DesignInfo>
        <h3>{design.title}</h3>
        <p>{design.description}</p>
      </DesignInfo>
    </Container>
  )
}

export default DesignCard