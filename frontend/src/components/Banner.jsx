import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Banner = ({props}) => {

    const { title, content, buttonDestination, buttonLabel, image } = props;

  return (
    <div className='banner-container'>
        <div className='banner-content'>
            <h1 className='banner-title'>{title}</h1>
            <h4 className='banner-subtitle'>{content}</h4>
            <Button className='banner-button' as={Link} to={buttonDestination}>{buttonLabel}</Button>
        </div>

        <div className='banner-image'>{image}</div>
    </div>
  )
}

export default Banner
