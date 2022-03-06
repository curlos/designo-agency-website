import React from 'react'
import styled from 'styled-components'
import DesignType from './DesignType'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 541px;
  margin: 70px auto;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
  };
`

const Right = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
`

const DesignTypes = () => {
  return (
    <Container>
      <DesignType type="WEB DESIGN" />

      <Right>
        <DesignType type="APP DESIGN" />
        <DesignType type="GRAPHIC DESIGN" />
      </Right>
    </Container>
  )
}

export default DesignTypes