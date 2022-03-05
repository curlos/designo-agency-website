import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #1D1C1E;
  padding: 40px 70px;
  padding-top: 70px;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 35px 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);

  img {
    height: 24px;
  }
`

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  h4 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #FFFFFF;
  }
`

const BottomBar = styled.div`
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: rgba(255, 255, 255, 0.5);
`

const Address = styled.div`

  div:
`

const Contact = styled.div`
  font-weight: bold;
`

const SocialMedia = styled.div`
  color: #E7816B;
  display: flex;
  gap: 20px;
`

const Footer = () => {

  const SOCIAL_MEDIA = ['facebook', 'youtube', 'twitter', 'pinterest', 'instagram']

  return (
    <Container>
      <TopBar>
        <div>
          <img src="/assets/shared/desktop/logo-light.png" alt=""  />
        </div>

        <TopRight>
          <h4>OUR COMPANY</h4>
          <h4>LOCATIONS</h4>
          <h4>CONTACT</h4>
        </TopRight>
      </TopBar>

      <BottomBar>
        <Address>
          <strong>
            <div>Designo Central Office</div>
          </strong>

          <div>3886 Wellington Street</div>
          <div>Toronto, Ontario M9C 3J5</div>
        </Address>

        <Contact>
          <div>Contact Us (Central Office)</div>
          <div>P : +1 253-863-8967</div>
          <div>M : contact@designo.co</div>
        </Contact>

        <SocialMedia>
          {SOCIAL_MEDIA.map((socialMedia) => (
            <img key={socialMedia} src={`/assets/shared/desktop/icon-${socialMedia}.svg`} alt="" />
          ))}
          
        </SocialMedia>
      </BottomBar>
    </Container>
  )
}

export default Footer