import { Typography } from "antd";

const { Title } = Typography

//import all project images
import { imageAssets } from "../data/imageAssets";

export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    longer_desc: React.ReactNode;
    responsibilities: string[];
    key_achievements: string[];
    technology?: string[];
    img?: string;
    sub_img?: string;
    direct_link?: { label: string, link: string };
}

export const experienceList: Experience[] = [
    {
        title: "Product Designer at GIC",
        company: "GIC",
        period: "May 2024 - Sep 2024",
        location: "Singapore",
        description: "Worked as a Product Designer Intern in the Business Process Services (BPS) department, contributing to GIC’s internal design system and enhancing UX standards.",
        longer_desc: <>hihi</>,
        responsibilities: [
            "Designed high-fidelity prototypes for components such as Anchor, Alert, and Search in Figma.",
            "Collaborated with developers and introduced design standards into the internal design system.",
            "Led user research and collected feedback to refine component usability.",
        ],
        key_achievements: [
            "Integrated 3 new components into GIC’s internal design system.",
            "Presented designs at weekly stand-ups and received approval from senior designers.",
        ],
        technology: ["Figma", "Design Systems", "Prototyping"],
        img: imageAssets.portfolio,
        direct_link: { label: "asdasd", link: "https://google.com" }
    }
];