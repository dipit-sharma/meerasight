/* eslint-disable @next/next/no-img-element */

import { dr_anshu } from "../../assets/exports";

export default function DrAnshuan() {
  const imageWidth = 180;
  return (
    <div>
      <div className="center">
        <div className="flex justify-between w-[1000px]">
          <div>
            <div className="heading">Dr. Anshuman Gahlot</div>
            <div className="sub-heading">MBBS, MS (OPHTHALMOLOGY), FVRS</div>
          </div>
          <div>
            <img src={dr_anshu} alt="dr_sonia" width={imageWidth} />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="w-[1000px]">
          Dr. Anshuman Gahlot MS, FVRS is a specialist in Vitreoretinal surgery
          who has MS Ophthalmology from Manipur University followed by long-term
          Fellowship in Vitreoretinal Surgery from Chaithanya Institute of
          Ophthalmology and Visual Sciences, Trivandrum. Besides medical
          management of various retinal diseases, he is experienced in micro
          incision vitrectomy surgeries (MIVS) for:
          <div>
            Diabetic Retinopathy Macular hole Epiretinal membrane Retinal
            detachment Scleral fixated intraocular Ienses Endophthalmitis.
          </div>
        </div>
      </div>
    </div>
  );
}
