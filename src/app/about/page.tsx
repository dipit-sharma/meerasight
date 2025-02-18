import { Facade } from "@/components/facade";
import Link from "next/link";
import { createHref } from "../utils";
import { footerBtns } from "./constants";
import "./styles.css";

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
                <button className="serviceCTA">{item}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/*Nav bar tabs*/}
    </div>
  );
}
