import { mission, vision } from "./constants";

export default function OurMission() {
    return <div>
        <div className="center">
            <div className="heading">Our Vision</div>
        </div>
        <div className="center">
            <ul className="text-center">
                {
                    vision.map((item, idx) =>
                        <li key={idx}>{item}</li>)
                }
            </ul>
        </div>
        <div className="center">
            <div className="heading">Our Mission</div>
        </div>
        <div className="center">
            <ul className="text-center">
                {
                    mission.map((item, idx) =>
                        <li key={idx}>{item}</li>)
                }
            </ul>
        </div>
    </div>
}