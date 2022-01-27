import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel className='pt-1'>
  <Carousel.Item>
    <img
      className="d-block w-100 long"
      src="https://lakshmisharath.com/wp-content/uploads/2017/02/Travel-Blogger-1024x682.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 long"
      src="https://blog.continentalcurrency.ca/wp-content/uploads/2020/01/solo-female-travel-blogger-922x615.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 long"
      src="https://www.radioactivetalent.com/wp-content/uploads/2019/07/mesut-kaya-eOcyhe5-9sQ-unsplash-1-750x400@2x.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;