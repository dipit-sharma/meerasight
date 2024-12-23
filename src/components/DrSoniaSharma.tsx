import Image from "next/image";
import { dr_anshu, dr_sonia } from "../../assets";

export default function DrSoniaSharma() {
    const imageWidth = 180
    return <div>
        <div className="center">
            <div className="flex justify-between w-[1000px]">
                <div>
                    <div className="heading">Dr. Sonia Sharma</div>
                    <div className="sub-heading">
                        MBBS, MS (OPHTHALMOLOGY)
                    </div>
                    <div className="sub-heading">
                        FSCEH (MICS)
                    </div>
                    <div className="sub-heading">
                        FSCEH (CORNEA & REFRACTIVE SURGERY)
                    </div>
                    <div className="sub-heading">
                        Cornea and Cataract specialist
                    </div>
                </div>
                <div>
                    <Image src={dr_sonia} alt="dr_sonia" width={imageWidth} />
                </div>
            </div>
        </div>
        <div className="center mb-[32px]">
            <div className="w-[1000px]">
                Dr. Sonia Sharma has done her MBBS from well known Lady Harding Medical College, New Delhi and her post graduation in Ophthalmology (MS Ophthalmology) from University College of Medical Sciences and GTB hospital, New Delhi. <br />
                Continuing further on her specialization she did her Fellowship in Cataract and minimally invasive cataract surgery (MICS) followed by a Fellowship in Cornea and Refractive Surgery from prestigious Dr. Shroff’s Charity Eye Hospital, Daryaganj, New Delhi.<br />
                She has also done her Observership in Cornea and Refractive surgery at LV Prasad Eye Institute, Hyderabad and Advance Corneal Transplantation Surgery course (DMEK) from Apollo hospital, Hyderabad.
                <div>
                    Apart from her more than 10 years experience in comprehensive ophthalmology, she has special training in : <br />
                    1. Minimally invasive cataract surgery (MICS) with premium IOL’s. <br />
                    2. Refractive surgery (LASIK/ PRK/ICL).<br />
                    3. Advanced Corneal Transplantation (PK/ DALK / DSAEK / DMEK).<br />
                    4. Limbal stem cell transplant for ocular surface disease.<br />
                    5. Eye trauma.<br />
                    6. Eye infections and allergies.<br />
                </div>
            </div>
        </div>
    </div>
}