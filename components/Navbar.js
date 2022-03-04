import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  display: flex;
  gap: 10px;

  img {
    height: 24px;
  };
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  
  h4 {
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 2px;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Left>
        <img src="/assets/shared/desktop/logo-dark.png" alt=""  />
      </Left>

      <Right>
        <h4>OUR COMPANY</h4>
        <h4>LOCATIONS</h4>
        <h4>CONTACT</h4>
      </Right>
    </Container>
  )
}

export default Navbar