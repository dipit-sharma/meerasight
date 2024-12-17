'use client'

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { services, testimonials, welcomeSection } from './constants';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  return (
    <div className="">
      <Welcome />
      <Services />
      <Testimonials />
      <Location />
    </div>
  );
}

const Welcome = () => {
  return <Box>
    <section>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite
        autoPlay
        autoPlaySpeed={2000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      // customRightArrow={<div></div>}
      // customLeftArrow={<div></div>}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        {/* 
        <div>
          <Image width={150} height={150} alt="random cat image" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </section>

    <section>
      <h1>{welcomeSection.title}</h1>
      <h4>{welcomeSection.subtitle}</h4>
    </section>
  </Box>
}

const Services = () => {
  return <Box>
    <h2>{services.title}</h2>

    <section>
      <Carousel
        responsive={responsive}
        infinite
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        {/* <div>
          <Image width={150} height={150} alt="random cat image" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </section>

    <section>
      <p>{services.visits.title}</p>
      <p>{services.visits.subtitle}</p>

      {services.visits.time.map(val => <div key={val.day}>
        <p>{val.day}:</p>
        <ul>
          {val.slots.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>)}
    </section>
  </Box>
}

const Testimonials = () => {
  return <Box>
    <h2>{testimonials.title}</h2>

    <section>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite
        autoPlay
        autoPlaySpeed={2000}
        transitionDuration={500}
        showDots
      >
        {testimonials.data.map(val => {
          return <div key={val.name}>
            <Image width={150} height={150} alt={val.name} src={val.image} />
            <Box>
              <Typography>{val.name}</Typography>
              <Typography>{val.description}</Typography>
            </Box>
          </div>
        })}

      </Carousel>
    </section>
  </Box>
}

const Location = () => {
  return <div className="relative h-[400px] w-[600px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5207755392807!2d77.09466657500766!3d28.614150084916076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ab79455a29%3A0x33bfb65fb9809a2d!2s14%2C%20Mall%20Rd%2C%20Near%20Cherubs%20Play%20Schoo%2C%20Block%20C5C%2C%20Janakpuri%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1734440118904!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
}

export default Home;
