import { imageAssets } from "./imageAssets";

export interface Award {
    title: string;
    issuer: string;
    period: string;
    description: string;
    img?: string;
    link?: { label: string; url: string };
}

export const awards: Award[] = [
    {
        title: "National Youth Entrepreneurship Awards (NYEA) - Finalist",
        issuer: "NYEA, Singapore",
        period: "Oct 2025",
        description: "Recognised among top youth-led startups for ObstaX's AI-powered wearables and real-world testing with the visually impaired community.",
        img: imageAssets.nyea,
    },
    {
        title: "PwC Whole Leadership Award - Awardee",
        issuer: "PwC Singapore",
        period: "Jul 2025",
        description: "Awarded for demonstrating holistic leadership across technical delivery, stakeholder communication, and mentorship during PwC-led initiatives.",
        img: imageAssets.pwc,
    },
    {
        title: "SUTD Entrepreneur Spirit Award - Awardee",
        issuer: "SUTD Student Achievement Award 2025",
        period: "Mar 2025",
        description: "Acknowledged for spearheading ObstaX from concept to funded startup, securing over SGD 80K and partnerships with SAVH and industry mentors.",
        img: imageAssets.saa,
    },
    {
        title: "Create4Good Innovation Fund - Awardee",
        issuer: "C4G, Singapore",
        period: "Jan 2023",
        description: "Received S$50,000 funding to develop innovative solutions addressing social challenges through technology and design.",
        img: imageAssets.c4g,
    },
    {
        title: "USM International UI/UX Hackathon - 4th Place",
        issuer: "USM, Malaysia",
        period: "Mar 2023",
        description: "Placed 4th globally for building an end-to-end UI/UX prototype tackling real-world accessibility challenges within 48 hours.",
        img: imageAssets.usm,
    },
    {
        title: "ASEAN Scholar - Awardee",
        issuer: "ASEAN Scholarship, Singapore",
        period: "Sept 2022",
        description: "Honoured as an ASEAN Scholar for academic excellence and leadership potential prior to joining SUTD.",
        img: imageAssets.asean,
    },
];
