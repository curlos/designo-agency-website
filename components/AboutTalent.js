import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  border: none;
  margin-bottom: 90px;

  @media ${devices.tablet} {
    grid-template-columns: none;
    grid-template-rows: 4fr 5fr;
  };
`

const ImageWrapper = styled.img`
  background-image: url('/assets/about/desktop/image-world-class-talent.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;

  @media ${devices.tablet} {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 20px;
    background-position: 50% 68%;
  };

  @media ${devices.mobile} {
    border-radius: 0px;
  };
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDF3F0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 90px;
  color: #FFFFFF;

  @media ${devices.tablet} {
    text-align: center;
    padding: 60px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0px;
  };

  @media ${devices.mobile} {
    border-radius: 0px;
    padding: 60px 30px;
  };
`

const InfoWrapper = styled.div`
  height: 100%;
  h2 {
    color: #E7816B;
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #333136;
  }
`

const AboutTalent = () => {
  return (
    <Container>
      <ImageWrapper />

      <Info>
        <InfoWrapper>
          <h2>World-class talent</h2>
          <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>

          <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
        </InfoWrapper>
      </Info>
    </Container>
  )
}

export default AboutTalent