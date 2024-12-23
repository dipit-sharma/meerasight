import Image from "next/image";
import { dr_anshu, dr_sonia } from "../../../../assets";
import DrSoniaSharma from "@/components/DrSoniaSharma";
import DrAnshuman from "@/components/DrAnshuman";

export default function KnowDoctor() {
  const imageWidth = 180;
  return (
    <div>
      <DrSoniaSharma />

      <div className="center">
        <div className="w-[1000px] h-[2px] bg-color-black"></div>
      </div>

      <DrAnshuman />
    </div>
  );
}
