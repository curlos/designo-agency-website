import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  border-radius: 20px;
  background-color: #E7816B;
  background-image: url('/assets/shared/desktop/bg-pattern-three-circles.svg');
  padding: 60px 80px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  margin-bottom: -70px;
  position: relative;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
    margin-top: 170px;
  };

  @media ${devices.mobile} {
    padding: 60px 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 180px;
  };
`

const Left = styled.div`
  flex: 1;

  h2 {
    font-size: 40px;
    font-weight: medium;
    line-height: 40px;
    margin-bottom: 30px;
  };

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  };

  @media ${devices.mobile} {
    h2 {
      font-size: 32px;
    };

    p {
      font-size: 15px;
    };
  };
`

const Right = styled.div`
  flex: 1;
  text-align: right;
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
  cursor: pointer;

  &:active {
    background-color: #FFAD9B;
    color: #FFFFFF;
  }

  @media ${devices.tablet} {
    align-self: center;
  };
`

const CallToAction = () => {
  return (
    <Container>
      <Left>
        <h2>Let’s talk about <br />your project</h2>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </Left>

      <Right>
        <WhiteButton>GET IN TOUCH</WhiteButton>
      </Right>
    </Container>
  )
}

export default CallToAction