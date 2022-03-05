import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7816B;
  padding: 40px;
  border-radius: 20px;
  color: #FFFFFF;
  margin-bottom: 90px;
`

const Wrapper = styled.div`
  width: 50%;
  text-align: center;

  h2 {
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`

const DesignTitle = ({ type }) => {
  const getInfo = () => {
    switch(type) {
      case 'app-design':
        return {
          title: 'App Design',
          description: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        }
      case 'graphic-design':
        return {
          title: 'Graphic Design',
          description: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        }
      default:
        return {
          title: 'Web Design',
          description: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        }
    }
  }

  const { title, description } = getInfo()

  return (
    <Container>
      <Wrapper>
        <h2>{title}</h2>
        <p>{description}</p>
      </Wrapper>
    </Container>
  )
}

export default DesignTitle