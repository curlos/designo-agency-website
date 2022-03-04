import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: #FFFFFF;
  background-image: url('/assets/home/desktop/bg-pattern-hero-home.svg');
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 20px;
  
  -webkit-transform:scaleX(-1);
  -moz-transform:scaleX(-1);
  -ms-transform:scaleX(-1);
  -o-transform:scaleX(-1);
  transform:scaleX(-1);

  background-color: #E7816B;
`

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 50px;

  -webkit-transform:scaleX(-1);
  -moz-transform:scaleX(-1);
  -ms-transform:scaleX(-1);
  -o-transform:scaleX(-1);
  transform:scaleX(-1);
`

const Left = styled.div`

  h2 {
    font-size: 48px;
    font-weight: medium;
  };

  p {
    font-size: 16px;
    font-weight: regular;
  };
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

        <Right>
          <img src="/assets/home/desktop/image-hero-phone.png" alt="" />
        </Right>
      </Wrapper>
    </Container>
  )
}

export default HomeTopInfo