import { Button } from "@mui/material";
import Link from "next/link";
import { createHref } from "../utils";
import { footerBtns } from "./constants";
import "./styles.css";
import { Facade } from "@/components/facade";

export default function About() {
  return (
    <div>
      {/*Nav bar tabs*/}
      <Facade />
      <div className="center m-12">
        <div className="footerBtns">
          {footerBtns.map((item, idx) => (
            <div key={idx}>
              <Link href={`about/${createHref(item)}`}>
                <Button variant="contained">{item}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/*Nav bar tabs*/}
    </div>
  );
}
