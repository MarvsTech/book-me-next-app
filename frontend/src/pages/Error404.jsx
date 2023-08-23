import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner';
import PageNotFound from '../images/page-not-found.svg'

const Error = () => {
    
    const data = {
        title : '404 - Page Not Found',
        content : 'The page you are looking for cannot be found!',
        buttonDestination : '/',
        buttonLabel : 'Back to home',
        image : <img src={PageNotFound} alt='404 Error Illsutration'/>
    }

  return (
    <Container className='banner-page-container'>
      <Banner props={data}/>
    </Container>
  )
}

export default Error
