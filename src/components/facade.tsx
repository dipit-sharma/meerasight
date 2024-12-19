import Image from "next/image";
import { facade } from "../../assets";

export const Facade = () => {
  return (
    <div className="center">
      <Image height={500} src={facade} alt="facade" />
    </div>
  );
};
