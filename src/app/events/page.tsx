import { Box, Typography } from "@mui/material";
import "./styles.css";
import { events } from "./constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardType {
  image: StaticImageData;
  title: string;
  date: string;
  text: string[];
}

export default function About() {
  return (
    <Box className="ourEvents">
      <Typography component="h2">Events</Typography>

      <section>
        <ul>
          {events.map((val, index) => (
            <li key={index}>
              {val.link ? (
                <Link href={val.link}>
                  <Card data={val} />
                </Link>
              ) : (
                <Card data={val} />
              )}
            </li>
          ))}
        </ul>
      </section>
    </Box>
  );
}

function Card({ data }: { data: CardType }) {
  return (
    <Box className="card">
      <Image width={358} height={260} alt={data.title} src={data.image} />
      <section className="contentBox">
        <Typography className="date text-justify" component="span">
          {data.date}
        </Typography>
        <Typography className="title text-justify" component="h4">
          <i>{data.title}</i>
        </Typography>
        {data.text.map((val, index) => (
          <Typography key={index} className="text text-justify" component="p">
            {val}
          </Typography>
        ))}
      </section>
    </Box>
  );
}
