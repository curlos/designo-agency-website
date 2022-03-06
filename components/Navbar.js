import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

const Left = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;

  img {
    height: 24px;
  };
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  
  a {
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover, &:active {
      text-decoration: underline;
    }

    &:active {
      text-decoration-color: 
    }
  }
`

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Link href="/" passHref>
          <img src="/assets/shared/desktop/logo-dark.png" alt=""  />
        </Link>
      </Left>

      <Right>
        <Link href="/about" passHref>OUR COMPANY</Link>
        <Link href="/locations" passHref>LOCATIONS</Link>
        <Link href="/contact" passHref>CONTACT</Link>
      </Right>
    </Container>
  )
}

export default Navbar