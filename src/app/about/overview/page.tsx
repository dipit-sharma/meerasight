import { Facade } from "@/components/facade";
import { content } from "./constants";

export default function Overview() {
  return (
    <div>
      <div className="center">
        <div className="heading">Overview</div>
      </div>
      <Facade />
      <div className="center">
        <div className="w-[70%]">
          {content.map((item, idx) => (
            <div className="p mt-8" key={idx}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
