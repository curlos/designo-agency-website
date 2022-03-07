import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  color: #FFFFFF;
  background-color: #E7816B;
  background-image: url('/assets/home/desktop/bg-pattern-hero-home.svg'), url('/assets/home/desktop/image-hero-phone.png');
  background-repeat: no-repeat;
  background-position: top right, top right;
  border-radius: 20px;
  margin: 0px 70px;
  margin-top: 80px;


  @media ${devices.mobile} {
    margin: 0px;
    border-radius: 0px;
    margin-top: 65px;
    background-position: 100% 28%;
  };
`

const Wrapper = styled.div`
  margin-top: 40px;
  border-radius: 20px;
  padding: 130px 80px;

  @media ${devices.tablet} {
    flex-direction: column;
    text-align: center;
  };

  @media ${devices.mobile} {
    padding: 70px 20px;
    margin-top: 0px;
  };
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 65%;

  h2 {
    font-size: 48px;
    font-weight: 500;
  };

  p {
    font-size: 16px;
    font-weight: regular;
  };

  @media ${devices.tablet} {
    text-align: center;
    align-items: center;
  };

  @media ${devices.mobile} {
    width: 100%;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
    }
  }
`

const Right = styled.div`

  img {
    width: 100%;
  }
`

const WhiteButton = styled.button`
  color: black;
  background-color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  border: none;
  padding: 20px 25px;
  border-radius: 10px;
  letter-spacing: 1px;
  align-self: flex-start;

  cursor: pointer;

  &:active {
    background-color: #FFAD9B;
    color: #FFFFFF;
  }

  @media ${devices.mobile} {
    align-self: center;
  };
`

const HomeTopInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <h2>Award-winning custom designs and digital branding solutions</h2>

          <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

          <WhiteButton>LEARN MORE</WhiteButton>
        </Left>
      </Wrapper>
    </Container>
  )
}

export default HomeTopInfo