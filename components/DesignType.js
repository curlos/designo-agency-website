import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${props => props.bgImage}');
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
  
  h2 {
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #FFFFFF;
  };

  button {
    letter-spacing: 5px;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    border: none;
    background: none;
    cursor: pointer;
  };
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DesignType = ({ type }) => {

  const getDesignTypeInfo = (type) => {
    switch (type) {
      case 'WEB DESIGN':
        return {
          name: 'WEB DESIGN',
          bgImage: '/assets/home/desktop/image-web-design-small.jpg',
          routerLink: '/web-design'
        }
      case 'APP DESIGN':
        return {
          name: 'APP DESIGN',
          bgImage: '/assets/home/desktop/image-app-design.jpg',
          routerLink: '/app-design'
        }
      case 'GRAPHIC DESIGN':
        return {
          name: 'GRAPHIC DESIGN',
          bgImage: '/assets/home/desktop/image-graphic-design.jpg',
          routerLink: '/graphic-design'
        }
      default:
        return {
          name: 'WEB DESIGN',
          bgImage: '/assets/home/desktop/image-web-design-small.jpg',
          routerLink: '/web-design'
        }
    }
  }

  return (
    <Container bgImage={getDesignTypeInfo(type).bgImage}>
      <InnerContainer>
        <h2>{getDesignTypeInfo(type).name}</h2>
        <button>
          VIEW PROJECTS
          <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" />
        </button>
      </InnerContainer>
    </Container>
  )
}

export default DesignType