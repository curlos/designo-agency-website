import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  border: none;
  margin-bottom: 90px;
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDF3F0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 90px;
  color: #FFFFFF;
`

const LeftWrapper = styled.div`
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

const Right = styled.img`
  background-image: url('/assets/about/desktop/image-real-deal.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
`

const AboutTalent = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <h2>The real deal</h2>
          <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>

          <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </LeftWrapper>
      </Left>

      <Right />
    </Container>
  )
}

export default AboutTalent