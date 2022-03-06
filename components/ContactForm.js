import React, { useState } from 'react'
import styled from 'styled-components'
import { devices } from '../styles/media_queries'

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  gap: 60px;
  padding: 70px 90px;
  background-color: #E7816B;
  border-radius: 20px;
  color: #FFFFFF;
  margin-bottom: 130px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px 50px;
  };
`

const ContactAbout = styled.div`
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

const Input = styled.input`
  width: ${props => !props.empty ? '2%' : 'auto'};
`

const Textarea = styled.textarea`
  font-family: Jost, sans-serif;
  resize: none;
  min-height: 100px;
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-bottom: 1px solid #FFFFFF;

  &:focus {
    outline: none;
    border-width: 3px;
  }

  ${Input}, ${Textarea} {
    padding: 10px 15px;
    border: none;
    background-color: transparent;
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    color: #FFFFFF;
    width: 100%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
      outline: none;
    }
  }
`

const EmptyError = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-style: italic;
`

const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  cursor: pointer;

  &:active {
    background-color: #FFAD9B;
    color: #FFFFFF;
  }
`

const ContactForm = () => {

  const [name, setName] = useState({
    type: 'text',
    placeholder: 'Name',
    value: '',
    change(newVal) {
      console.log('fag')
      setName({...name, value: newVal})
    }
  },)
  const [emailAddress, setEmailAddress] = useState({
    type: 'email',
    placeholder: 'Email Address',
    value: '',
    change(newVal) {
      setEmailAddress({...emailAddress, value: newVal})
    }
  })
  const [phone, setPhone] = useState({
    type: 'tel',
    placeholder: 'Phone',
    value: '',
    change(newVal) {
      setPhone({...phone, value: newVal})
    }
  })

  const [message, setMessage] = useState('')

  const INPUTS = [name, emailAddress, phone]

  return (
    <Container>
      <ContactAbout>
        <h1>Contact Us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </ContactAbout>

      <Inputs>
        {INPUTS.map((inputInfo) => (
          <InputWrapper>
            <Input type={inputInfo.text} placeholder={inputInfo.placeholder} empty={inputInfo.value.length < 1} value={inputInfo.value} onChange={(e) => inputInfo.change(e.target.value)}></Input>
            {inputInfo.value.length < 1 && (
              <EmptyError>
                <i>Can't be empty</i>
                <img src="/assets/contact/desktop/icon-error.svg" alt="error icon" />
              </EmptyError>
            )}
          </InputWrapper>
        ))}
      
        <InputWrapper>
          <Textarea placeholder="Your Message" />
          <EmptyError>
            <i>Can't be empty</i>
            <img src="/assets/contact/desktop/icon-error.svg" alt="error icon" />
          </EmptyError>
        </InputWrapper>
        <ButtonWrapper>
          <WhiteButton>SUBMIT</WhiteButton>
        </ButtonWrapper>
      </Inputs>
    </Container>
  )
}

export default ContactForm