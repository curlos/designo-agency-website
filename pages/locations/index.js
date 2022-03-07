import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import LocationCountries from '../../components/LocationCountries'
import CallToAction from '../../components/CallToAction'
import Footer from '../../components/Footer'
import { devices } from '../../styles/media_queries'

const Container = styled.main`
  min-height: 100vh;
  padding: 20px 70px;

  @media ${devices.tablet} {
    padding: 20px 40px;
  };
`

export default function Location() {
  return (
    <div>
      <Head>
        <title>Designo - Location</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    
      <Container>
        <LocationCountries />
      </Container>

      <CallToAction />
      <Footer />
    </div>
  )
}
