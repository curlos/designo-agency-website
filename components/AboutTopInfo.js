import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  border: none;
  margin-bottom: 90px;

  @media ${devices.tablet} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  };
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7816B;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 90px;
  color: #FFFFFF;

  @media ${devices.tablet} {
    text-align: center;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 20px;
    order: 1;
    padding: 60px;
  };

`

const InfoWrapper = styled.div`

  h2 {
    font-size: 48px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`

const ImageWrapper = styled.img`
  background-image: url('/assets/about/desktop/image-about-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;

  @media ${devices.tablet} {
    text-align: center;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0px;
  };
`

const AboutTopInfo = () => {
  return (
    <Container>
      <Info>
        <InfoWrapper>
          <h2>About Us</h2>
          <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
        </InfoWrapper>
      </Info>

      <ImageWrapper />
    </Container>
  )
}

export default AboutTopInfo