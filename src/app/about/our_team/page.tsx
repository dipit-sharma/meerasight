import { team_members } from "./constants";
import "../styles.css";
import { Button } from "@mui/material";
import Link from "next/link";

export default function OurTeam() {
  return (
    <div>
      <div className="center">
        <div className="heading">Our Team</div>
      </div>
      <div className="center">
        <div className="center">
          <div className="cnt text-center gap-4">
            {team_members.map((item, idx) => (
              <div key={idx} className="w-full">
                <div key="link" className="our-team-card h-full p-8 mb-2 flex flex-col items-center">
                  <div style={{backgroundImage: `url(${item.image})`, width: 200, height: 200, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "5px"}}>
                  </div>
                  <div className="text-2xl mt-4">{item.label}</div>
                  <div>{item.desig}</div>
                  <div>{item.qual}</div>
                  <div>{item.course}</div>
                </div>
                <Link href={`/about/our_team/${item.link}`}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#d274cd" }}
                    className="btn-contained"
                  >
                    Know More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
