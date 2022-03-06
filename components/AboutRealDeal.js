import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  border: none;
  margin-bottom: 90px;

  @media ${devices.tablet} {
    grid-template-columns: none;
    grid-template-rows: 4fr 5fr;
    grid-auto-flow: dense;
  };
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDF3F0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 90px;
  color: #FFFFFF;

  @media ${devices.tablet} {
    border-top-left-radius: 0px;
    border-bottom-right-radius: 20px;
    text-align: center;
    padding: 60px;
  }
`

const InfoWrapper = styled.div`
  height: 100%;
  h2 {
    font-size: 40px;
    line-height: 48px;
    color: #E7816B;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #333136;
  }
`

const ImageWrapper = styled.img`
  background-image: url('/assets/about/desktop/image-real-deal.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;

  @media ${devices.tablet} {
    order: -1;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 20px;
  };
`

const AboutTalent = () => {
  return (
    <Container>
      <Info>
        <InfoWrapper>
          <h2>The real deal</h2>
          <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>

          <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </InfoWrapper>
      </Info>

      <ImageWrapper />
    </Container>
  )
}

export default AboutTalent