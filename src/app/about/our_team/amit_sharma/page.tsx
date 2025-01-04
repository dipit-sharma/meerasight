/* eslint-disable @next/next/no-img-element */

import { dr_anshu } from "../../../../../assets/exports";

export default function AmitSharma() {
  const imageWidth = 180;
  return (
    <div>
      <div className="center">
        <div className="flex justify-between w-[1000px]">
          <div>
            <div className="heading">Capt. Amit Sharma</div>
            <div className="sub-heading">Founder - MeeraSight</div>
            <div className="sub-heading">Managing Director,</div>
            <div className="sub-heading">
              BSc. Nautical Science, PGDBA (HRD)
            </div>
          </div>
          <div>
            <img src={dr_anshu} alt="dr_sonia" width={imageWidth} />
          </div>
        </div>
      </div>
      <div className="center">
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
    </div>
  );
}
