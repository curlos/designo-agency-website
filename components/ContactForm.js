import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  gap: 60px;
  padding: 70px 90px;
  background-color: #E7816B;
  border-radius: 20px;
  color: #FFFFFF;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 48px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
  }
`

const Right = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input, textarea {
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #FFFFFF;
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    color: #FFFFFF;
  }

  input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  input:focus, textarea:focus {
    outline: none;
  }

  textarea {
    font-family: Jost, sans-serif;
    resize: none;
    min-height: 100px;
  }
`

const ButtonWrapper = styled.div`
  text-align: right;
`

const WhiteButton = styled.button`
  color: black;
  background-color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  border: none;
  padding: 20px 50px;
  border-radius: 10px;
  letter-spacing: 1px;
`

const ContactForm = () => {
  return (
    <Container>
      <Left>
        <h1>Contact Us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </Left>

      <Right>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email Address"></input>
        <input type="tel" placeholder="Phone"></input>
        <textarea placeholder="Your Message" />
        <ButtonWrapper>
          <WhiteButton>SUBMIT</WhiteButton>
        </ButtonWrapper>
      </Right>
    </Container>
  )
}

export default ContactForm