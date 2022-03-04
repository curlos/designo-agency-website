import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 20px;
  background-color: #E7816B;
  background-image: url('/assets/shared/desktop/bg-pattern-three-circles.svg');
  padding: 40px 70px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;

  h2 {
    font-size: 40px;
    font-weight: medium;
    line-height: 40px;
  };

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
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