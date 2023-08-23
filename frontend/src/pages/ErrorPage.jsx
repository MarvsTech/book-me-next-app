import React from 'react'
import ServerDown from '../images/server-down-error.svg'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner'

const ErrorPage = () => {

    const data = {
        title : 'Error',
        content : 'Error content goes here',
        buttonDestination : '/',
        buttonLabel : 'Back to home',
        image : <img src={ServerDown} alt='404 Error Illsutration'/>
    }

  return (
    <Container>
      <Banner props={data}/>
    </Container>
  )
}

export default ErrorPage
