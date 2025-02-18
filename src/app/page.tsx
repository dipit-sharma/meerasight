/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { services, testimonials, welcomeSection } from "./constants";
import "./globals.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <Services />
      <Testimonials />
      <Location />
    </div>
  );
};

const Welcome = () => {
  return (
    <Box className="welcome">
      <section>
        <Carousel
          centerMode={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite
          autoPlay
          autoPlaySpeed={2000}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          slidesToSlide={1}
        >
          {welcomeSection.images.map((val, index) => (
            <div className="carouselImageBox" key={index}>
              <img alt="welcome carousel image" src={val} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="content">
        <h1>{welcomeSection.title}</h1>
        <h4>{welcomeSection.subtitle}</h4>
      </section>
    </Box>
  );
};

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box className="services">
      <h2 className="heading">{services.title}</h2>

      <section className="carousel">
        <Carousel responsive={responsive}>
          {services.images.map((val, index) => (
            <Link key={index} href={val.link}>
              <img
                width={260}
                height={180}
                alt={val.link.replace("/", "")}
                src={val.image}
              />
            </Link>
          ))}
        </Carousel>
      </section>

      <section className="contentBox">
        <p className="headingText title">{services.visits.title}</p>
        <p className="headingText subtitle">{services.visits.subtitle}</p>

        {services.visits.time.map((val) => (
          <div className="schedule" key={val.day}>
            <p style={{ textAlign: "right" }}>{val.day}:&nbsp;</p>
            <ul>
              {val.slots.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box className="testimonials">
      <h2 className="heading">{testimonials.title}</h2>

      <section>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          transitionDuration={500}
          showDots
        >
          {testimonials.data.map((val) => {
            return (
              <div className="innerSection" key={val.name}>
                <div className="carousel-icon">
                  <a target="_blank" href={val?.link}>
                    <img
                      width={50}
                      src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Fyoutube.png?alt=media&token=43af0628-2744-4b6f-96a5-4f7883b574e2"
                      alt="youtube"
                    />
                  </a>
                </div>
                {val?.link ? (
                  <a target="_blank" href={val?.link}>
                    <img
                      width={190}
                      height={270}
                      alt={val.name}
                      src={val.image}
                    />
                  </a>
                ) : (
                  <img
                    width={190}
                    height={270}
                    alt={val.name}
                    src={val.image}
                  />
                )}
                {/* add youtube icon if link present - low priority */}
                <Box>
                  <Typography component="h2">{val.name}</Typography>
                  <Typography component="p">{val.description}</Typography>
                </Box>
              </div>
            );
          })}
        </Carousel>
      </section>
    </Box>
  );
};

const Location = () => {
  return (
    <div className="location">
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
  );
};

export default Home;
