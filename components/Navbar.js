import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  padding: 20px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background-color: #FFFFFF;
  height: 65px;

  @media ${devices.tablet} {
    padding: 20px;
  };

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

const RouteLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  
  a {
    font-weight: 400;
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

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: flex-start;

    a {
      font-size: 24px;
      line-height: 25px;
    }
  };
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

const Dropdown = styled.div`
  position: relative;
  display: none;

  @media ${devices.mobile} {
    display: block;
  };
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #1D1C1E;
  color: #FFFFFF;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 40px 20px;
  z-index: 1;

  @media ${devices.mobile} {
    display: block;
  };
`

const ContainerWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  
  @media ${devices.mobile} {
    height: ${props => props.open ? '100%' : 'auto'};
    background-color: ${props => props.open ? 'rgb(0,0,0)' : 'transparent'};
    background-color: ${props => props.open ? 'rgba(0,0,0, 0.4)' : 'transparent'};
  };
`

const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    <ContainerWrapper open={open} onClick={() => open ? setOpen(false) : null}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Left>
          <Link href="/" passHref>
            <img src="/assets/shared/desktop/logo-dark.png" alt=""  />
          </Link>
        </Left>

        <Dropdown onClick={() => setOpen(!open)}>
          <RouteLinks>
            <img src={`/assets/shared/mobile/${!open ? 'icon-hamburger.svg' : 'icon-close.svg'}`} alt="hamburger menu" />
          </RouteLinks>
        </Dropdown>

        <DesktopRight>
          <RouteLinks>
            <Link href="/about" passHref>OUR COMPANY</Link>
            <Link href="/locations" passHref>LOCATIONS</Link>
            <Link href="/contact" passHref>CONTACT</Link>
          </RouteLinks>
        </DesktopRight>
      </Container>


      {open && (
        <DropdownContent onClick={(e) => e.stopPropagation()}>
          <RouteLinks>
            <Link href="/about" passHref>OUR COMPANY</Link>
            <Link href="/locations" passHref>LOCATIONS</Link>
            <Link href="/contact" passHref>CONTACT</Link>
          </RouteLinks>
        </DropdownContent>
      )}
    </ContainerWrapper>
  )
}

export default Navbar