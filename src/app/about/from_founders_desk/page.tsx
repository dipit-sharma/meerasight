/* eslint-disable @next/next/no-img-element */

import { Divider } from "@mui/material";
import { amit_sharma, dr_sonia, hc_sharma, meera_sharma, sharda, vp } from "../../../../assets/exports";
import './style.css';

export default function AmitSharma() {
  const imageWidth = 180;
  return (
    <div>
      <div className="center" style={{ marginTop: 24 }}>
        <div className="main justify-between w-[1000px]">
          <div className="" >
            <img src={amit_sharma} alt="dr_sonia" width={imageWidth} />
            <div className="image-label" >
              Capt. Amit Sharma
            </div>
          </div>
          <div className="two-image-cnt">
            <div>
              <img src={meera_sharma} alt="dr_sonia" width={imageWidth} />
              <div className="image-label" >
                Lt. Smt. Meera <br />  Sharma
              </div>
              <div className="small-label" >
                (Mother)
              </div>
            </div>
            <div>
              <img src={hc_sharma} alt="dr_sonia" width={imageWidth} />
              <div className="image-label" >
                Lt. Shri H. C. <br /> Sharma
              </div>
              <div className="small-label" >
                (Father)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center p">
        <div className="w-[1000px]">
          He was born and brought up in Delhi.
          <div>
            After completion of school he went to NIPM, Chennai for Cadet course
            in Merchant Navy and started Sea career with ESSAR Shipping in 1998.
            He got command as Master (Captain) in 2011.
          </div>
          Though sailing on high seas has always been passion but keen interest
          in Home Automation lead him to start up with Home Automation
          Consultant also while ashore.
        </div>
      </div>
      <div className="p">
        <div style={{ marginTop: "24px" }}>
          The blessings of our parents (Lt. Smt. Meera Sharma and Lt. Sh. H.C. Sharma) and their loving memory inspired us to lay the foundation of MeeraSight Clinic.
          Having been elected as President of C5C Block, Janak Puri, Mr. H.C. Sharma did outstanding work that shall remain praiseworthy in hearts of residents of our block. He was the favorite among the members of welfare association and residents for his modesty and problem solving attitude.
          His wife Mrs. Meera Sharma has always been his back bone and shared equal credits for the respect he earned throughout his life. Being a home maker she took care of kids (Amit & Priya) and has given her strength to push through difficult times while he was away for social work.
          They have inspired us to pursue the objective of community service through treatment of people with utmost care. MeeraSight is an effort to inculcate same in generations to follow.
        </div>
      </div>
      <Divider style={{ height: 4, marginTop: 12 }} />

      <div className="center mt-[64px]">
        <div className="main justify-between w-[1000px]">
          <div className="" >
            <img src={dr_sonia} alt="dr_sonia" width={imageWidth} />
            <div className="image-label" >
              Dr. Sonia Sharma
            </div>
          </div>
          <div className="two-image-cnt">
            <div>
              <img src={sharda} alt="dr_sonia" width={imageWidth} />
              <div className="image-label" >
                Mrs. Sharda Gahlot
              </div>
              <div className="small-label" >
                (Mother)
              </div>
            </div>
            <div>
              <img src={vp} alt="dr_sonia" width={imageWidth} />
              <div className="image-label" >
                Shri V. P. Gahlot
              </div>
              <div className="small-label" >
                (Father)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p">
        <div style={{ marginTop: "24px" }}>
          The constant motivation of our parents Mr. Ved Prakash Gahlot and Mrs. Sharda Gahlot was instrumental in inception of MeeraSight in its present form.



          Being a Scientist and an Educator they always motivated their children (Sonia and Anshuman) to aspire for excellence and attain maximum qualification in their profession. Also guided to keep up with latest innovations in our field. It is their hard work and inspiration which has made us join medical profession and be the best in their fields.



          Their joint efforts have shown us the way we can serve the community we live in, by providing the best eye care which is affordable and easily approachable next door.
        </div>
      </div>
    </div>
  );
}
