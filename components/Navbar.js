import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  padding: 20px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media ${devices.mobile} {
    padding: 20px;
    margin-bottom: 0px;
  };
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

const MobileRight = styled.div`
  display: none;

  @media ${devices.mobile} {
    display: block;
  };
`

const DesktopRight = styled.div`
  display: block;

  @media ${devices.mobile} {
    display: none;
  };
`

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Link href="/" passHref>
          <img src="/assets/shared/desktop/logo-dark.png" alt=""  />
        </Link>
      </Left>

      <MobileRight>
        <Right>
          <img src="/assets/shared/mobile/icon-hamburger.svg" alt="hamburger menu" />
        </Right>
      </MobileRight>

      <DesktopRight>
        <Right>
          <Link href="/about" passHref>OUR COMPANY</Link>
          <Link href="/locations" passHref>LOCATIONS</Link>
          <Link href="/contact" passHref>CONTACT</Link>
        </Right>
      </DesktopRight>
    </Container>
  )
}

export default Navbar