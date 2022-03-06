import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  height: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${props => props.bgImage}');
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover, &:active {
    background-image:
      linear-gradient(0deg, rgba(231,129,107, 0.6), rgba(231,129,107, 0.6)),
      url('${props => props.bgImage}');
  }
  
  h2 {
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #FFFFFF;
  };

  button {
    letter-spacing: 5px;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    border: none;
    background: none;
    cursor: pointer;
  };

  @media ${devices.tablet} {
    padding: 40px;
  };

  @media ${devices.mobile} {
    padding: 80px 20px;

    h2 {
      font-size: 28px;
    }

    button {
      font-size: 15px;
    }
  };
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const DesignType = ({ type }) => {

  const getDesignTypeInfo = (type) => {
    switch (type) {
      case 'WEB DESIGN':
        return {
          name: 'WEB DESIGN',
          bgImage: '/assets/home/desktop/image-web-design-small.jpg',
          routerLink: '/web-design'
        }
      case 'APP DESIGN':
        return {
          name: 'APP DESIGN',
          bgImage: '/assets/home/desktop/image-app-design.jpg',
          routerLink: '/app-design'
        }
      case 'GRAPHIC DESIGN':
        return {
          name: 'GRAPHIC DESIGN',
          bgImage: '/assets/home/desktop/image-graphic-design.jpg',
          routerLink: '/graphic-design'
        }
      default:
        return {
          name: 'WEB DESIGN',
          bgImage: '/assets/home/desktop/image-web-design-small.jpg',
          routerLink: '/web-design'
        }
    }
  }

  const { name, bgImage, routerLink } = getDesignTypeInfo(type)

  return (
    <Link href={`${routerLink}`} passHref>
      <Container bgImage={bgImage}>
        <InnerContainer>
          <h2>{name}</h2>
          <button>
            VIEW PROJECTS
            <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
          </button>
        </InnerContainer>
      </Container>
    </Link>
  )
}

export default DesignType