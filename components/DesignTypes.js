import React from 'react'
import styled from 'styled-components'
import DesignType from './DesignType'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 541px;
  margin: 70px auto;
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