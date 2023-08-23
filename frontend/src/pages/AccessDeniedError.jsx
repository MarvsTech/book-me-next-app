import React from 'react'
import Banner from '../components/Banner'
import { Container } from 'react-bootstrap'
import AccessDeniedIllus from '../images/access-denied.svg'

const AccessDenied = () => {

    const data = {
        title : "Access Denied",
        content : "You do not have the access rights to do this action!",
        buttonDestination : '/',
        buttonLabel : 'Back to home',
        image : <img src={AccessDeniedIllus} alt='Access Denied Error Illsutration'/>
    }

  return (
    <Container className='banner-page-container'>
      <Banner props={data} />
    </Container>
  )
}

export default AccessDenied
