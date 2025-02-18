import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import {
    vaibhavi,
    rajkumar,
    rajkumarsharma,
    sunil,
    pradeep2,
    trinabh,
    nirmal,
    jitendra,
    vanshika,
    retina_services,
    refractive_services,
    pediatric_eye_diseases,
    ocular_surface_diseases_management,
    keratoconous,
    glaucoma_services,
    cornea_services,
    contact_lens_clinic,
    comprehensive_eye_examination,
    cataract,
    welcome1,
    welcome2,
    welcome3,
    welcome4,
    welcome5,
    welcome6,
    welcome7,
} from "../../assets/exports";

const welcomeSection = {
    title: "Welcome to MEERASIGHT",
    subtitle: "Expert Eye Care Solutions",
    images: [
        welcome1,
        welcome2,
        welcome3,
        welcome4,
        welcome5,
        welcome6,
        welcome7,
    ],
};

const services = {
    title: "Services",
    images: [
        {
            image: retina_services,
            link: "/services/retina_services",
        },
        {
            image: refractive_services,
            link: "/services/refractive_services",
        },
        {
            image: pediatric_eye_diseases,
            link: "/services/pediatric_eye_diseases",
        },
        {
            image: ocular_surface_diseases_management,
            link: "/services/ocular_surface_diseases_management",
        },
        {
            image: keratoconous,
            link: "/services/keratoconous",
        },
        {
            image: glaucoma_services,
            link: "/services/glaucoma_services",
        },
        {
            image: cornea_services,
            link: "/services/cornea_services",
        },
        {
            image: contact_lens_clinic,
            link: "/services/contact_lens_clinic",
        },
        {
            image: comprehensive_eye_examination,
            link: "/services/comprehensive_eye_examination",
        },
        {
            image: cataract,
            link: "/services/cataract",
        },
    ],
    visits: {
        title: "Opening Hours",
        subtitle: "Come Visit",
        time: [
            {
                day: "Weekdays",
                slots: ["9:00am - 1:30pm", "6:00pm - 8:00pm"],
            },
            {
                day: "Sunday",
                slots: ["9:00am - 12:00noon"],
            },
            {
                day: "Thursday",
                slots: ["CLOSED"],
            },
        ],
    },
};

const testimonials = {
    title: "Testimonials",
    data: [
        {
            name: "Ms. Vanshika Yadav",
            description:
                "I was facing problems in vision in Classroom. Dr. Sonia Sharma treated me successfully. She is very soft spoken and treated me politely.",
            image: vanshika,
            link: "https://www.youtube.com/watch?v=CqwCe2H6ves&feature=youtu.be",
        },
        {
            name: "Ms. Vaibhavi Sathi",
            description:
                "I got my treatment of Accute dryness & itching in my eyes by Dr Sonia Sharma. I found her to be extremely patient & humble which helped me massively in the treatment process. Would highly recommend her for any eye treatment.",
            image: vaibhavi,
            link: "https://www.youtube.com/watch?v=xQY2NiGshgg&feature=youtu.be",
        },
        {
            name: "Mr. Jitendra Malik",
            description:
                "I  had a commendable experience. It was nice meeting Dr Sonia Sharma. I am highly satisfied with treatment offered.",
            image: jitendra,
            link: "",
        },
        {
            name: "Mr. Sunil Bhalla",
            description:
                "I got my both eyes operated for Cataract and my daughter's cosmetic surgery from Dr. Sonia Sharma. She answered all my queries and eased my anxiety during surgery and made me comfortable. I am very satisfied the way she does her job and would recommend to others as well.",
            image: sunil,
        },
        {
            name: "Mr. Raj Kumar",
            description:
                "I got my treatment done by Dr Sonia Sharma. She gave me proper treatment & guidance to resolve my problems. She is highly softspoken & gives very good guidance.",
            image: rajkumar,
            link: "https://www.youtube.com/watch?v=RTN3gTFsEEo&feature=youtu.be",
        },
        {
            name: "Mr. Raj Kumar Sharma",
            description:
                "I got my Eye treatment & operation done by Dr Sonia Sharma. She performed my surgery successfully & also gave me proper treatment. I would highly recommend her for any Eye treatment.",
            image: rajkumarsharma,
            link: "https://www.youtube.com/watch?v=ICYH9s-h2ws&feature=youtu.be",
        },
        {
            name: "Mrs. Nirmal",
            description:
                "I got my Glucoma treatment done by Dr Sonia Sharma and am highly satisfied from her treatment methodologies.",
            image: nirmal,
            link: "https://www.youtube.com/watch?v=ktb0-iVkEQU",
        },
        {
            name: "Mr. Pradeep Mathur",
            description:
                "I got my Eye-Irritation treatment done by Dr Sonia Sharma. The diagnosis done was perfect & treatment has worked wonders. I would like to recommend my friends and relatives to refer her for any eye treatment.",
            image: pradeep2,
            link: "https://www.youtube.com/watch?v=HlwEAQkXh-c&feature=youtu.be",
        },
        {
            name: "Mr. Trinabh Singh",
            description:
                "Underwent treatment of Ocular hypertension. Dr Sonia Sharma's clinic is very well equipped, very clean and she cleared all my queries.",
            image: trinabh,
            link: "https://www.youtube.com/watch?v=sIysnikDtTk&feature=youtu.be",
        },
    ],
};

const footer = {
    links: [
        {
            icon: (
                <img
                    alt="twitter"
                    src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Fwhatsapp.png?alt=media&token=db9e624c-2dc1-424b-8c67-def8db5952b9"
                />
            ),
            link: "https://api.whatsapp.com/send/?phone=917428728458&text&type=phone_number&app_absent=0", // whatsapp
        },
        {
            icon: (
                <img
                    alt="fb"
                    src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Ffacebook.png?alt=media&token=58e269fb-ee74-4713-b0f4-80bca71bc629"
                />
            ),
            link: "https://www.facebook.com/MeeraSighteyeclinic/", //fb
        },
        {
            icon: (
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Finstagram.png?alt=media&token=24e6d584-b93a-45e0-91d3-6d286c923a41"
                    alt="instagram"
                />
            ),
            link: "https://www.instagram.com/meera_sight/", // insta
        },
        {
            icon: (
                <img
                    alt="twitter"
                    src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Fsocial-media.png?alt=media&token=aa880916-4a65-4c16-9277-bf6d615a702c"
                />
            ),
            link: "https://twitter.com/MeeraSight", // twitter
        },
        {
            icon: (
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Flinkedin.png?alt=media&token=236103b8-6c59-4b99-b542-9155ca207cc1"
                    alt="linkedin"
                />
            ),
            link: "https://www.linkedin.com/in/meerasight/", // linkedin
        },
        {
            icon: (
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/meerasight-acf91.firebasestorage.app/o/images%2Fyoutube.png?alt=media&token=43af0628-2744-4b6f-96a5-4f7883b574e2"
                    alt="youtube"
                />
            ),
            link: "https://www.youtube.com/channel/UCoEM8sMaNUdwedYXpOQDY_A", // youtube
        },
    ],
    text: "©2020 by MeeraSight. All Right Reserved.",
};

export { welcomeSection, services, testimonials, footer };
