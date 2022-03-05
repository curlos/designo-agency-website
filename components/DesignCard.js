import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 20px;
  display: grid;
  grid-template-rows: 2fr;
`

const DesignImg = styled.img`
  content:url('/assets/web-design/desktop/image-express.jpg');
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const DesignInfo = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #FDF3F0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  h3 {
    font-weight: 500;
    font-size: 20px;
    color: #E7816B;
  }

  p {
    color: #333136;
  }
`



const DesignCard = ({ design }) => {
  return (
    <Container>
      <DesignImg title={design.title.toLowerCase()} />
      <DesignInfo>
        <h3>{design.title}</h3>
        <p>{design.description}</p>
      </DesignInfo>
    </Container>
  )
}

export default DesignCard