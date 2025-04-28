import DrAnshuman from "@/components/DrAnshuman";
import DrSoniaSharma from "@/components/DrSoniaSharma";

export default function KnowDoctor() {
  return (
    <div style={{ padding: "10px" }}>
      <DrSoniaSharma />

      <div className="center">
        <div className="w-[1000px] h-[2px] bg-color-black"></div>
      </div>

      <DrAnshuman />
    </div>
  );
}
