import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  border: none;
`

const Left = styled.img`
  background-image: url('/assets/about/desktop/image-world-class-talent.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7816B;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 90px;
  color: #FFFFFF;
`

const RightWrapper = styled.div`
  height: 100%;
  h2 {
    font-size: 48px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`

const AboutTalent = () => {
  return (
    <Container>
      <Left />

      <Right>
        <RightWrapper>
          <h2>World-class talent</h2>
          <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>

          <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
        </RightWrapper>
      </Right>
    </Container>
  )
}

export default AboutTalent