import { Box, Button, Typography } from "@mui/material";
import "./styles.css";
import { services } from "./constants";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Box className="ourServices">
      <Typography component="h2">Our Services</Typography>

      <section>
        <ul>
          {services.map((val, index) => <li key={index}>
            <Link href={val.link}>
              <Image width={316} height={214} alt={val.link.replace("/", "")} src={val.image} />
              <Button className="serviceCTA" variant="contained">Book Service</Button>
            </Link>
          </li>)}
        </ul>
      </section>
    </Box>
  );
}
