import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  border: none;
  margin-bottom: 90px;
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7816B;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 90px;
  color: #FFFFFF;

`

const LeftWrapper = styled.div`

  h2 {
    font-size: 48px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`

const Right = styled.img`
  background-image: url('/assets/about/desktop/image-about-hero.jpg');
  height: 100%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
`

const AboutTopInfo = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <h2>About Us</h2>
          <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
        </LeftWrapper>
      </Left>

      <Right />
    </Container>
  )
}

export default AboutTopInfo