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
      <h3>Welcome to Our Bloging WebSite</h3>
      <p>In a world there has many place Those are really wonderful</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 long"
      src="https://blog.continentalcurrency.ca/wp-content/uploads/2020/01/solo-female-travel-blogger-922x615.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Start Your Travel Bloging</h3>
      <p>Every man in the world like to travell.So they travel many place</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 long"
      src="https://www.radioactivetalent.com/wp-content/uploads/2019/07/mesut-kaya-eOcyhe5-9sQ-unsplash-1-750x400@2x.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Share your own travel exprience</h3>
      <p>In Our website you read many bloging and you can shere your own exprience</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;