import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7816B;
  padding: 40px;
  border-radius: 20px;
  color: #FFFFFF;
  margin-bottom: 90px;
`

const Wrapper = styled.div`
  width: 50%;
  text-align: center;

  h2 {
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`

const DesignTitle = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Web Design</h2>
        <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
      </Wrapper>
    </Container>
  )
}

export default DesignTitle