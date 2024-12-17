import Image from "next/image";
import { meeralogo } from '../../assets/exports'
import { Box } from "@mui/material";

export default function MeeraLogo() {
    return (
        <Box sx={{ display: "grid", placeItems: "center" }}>
            <Image src={meeralogo} alt="MeeraSight Logo" style={{ width: "173px", height: "79px", objectFit: "contain", objectPosition: "center center" }} width="173" height="79" fetchPriority="low" loading="lazy" decoding="async" />
        </Box>
    );
}
