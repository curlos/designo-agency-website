import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E7816B;
  padding: 60px 40px;
  border-radius: 20px;
  color: #FFFFFF;
  margin-bottom: 90px;
  margin-top: 80px;
  background-image: url('/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg');
  background-repeat: no-repeat;
  background-position: right center;
  margin-left: 40px;
  margin-right: 40px;


  background-image: url('/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg');
  background-position: center center;

  -webkit-transform:scaleY(-1);
  -moz-transform:scaleY(-1);
  -ms-transform:scaleY(-1);
  -o-transform:scaleY(-1);
  transform:scaleY(-1);


  

  @media ${devices.mobile} {
    border-radius: 0px;
    padding: 40px 20px;
    margin: 0;
    margin-top: 65px;
  };
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

  -webkit-transform:scaleY(-1);
  -moz-transform:scaleY(-1);
  -ms-transform:scaleY(-1);
  -o-transform:scaleY(-1);
  transform:scaleY(-1);


  @media ${devices.mobile} {
    width: 100%;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
    }
  };
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