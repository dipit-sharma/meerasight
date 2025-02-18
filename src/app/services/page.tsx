/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { services } from "./constants";
import "./styles.css";

export default function About() {
  return (
    <Box className="ourServices">
      <Typography component="h2">Our Services</Typography>

      <section>
        <ul className="servicesList">
          {services.map((val, index) => <li key={index}>
            <Link href={val.link}>
              <img width={316} height={214} alt={val.link.replace("/", "")} src={val.image} />
              <Button className="serviceCTA" variant="contained">Book Service</Button>
            </Link>
          </li>)}
        </ul>
      </section>
    </Box>
  );
}
