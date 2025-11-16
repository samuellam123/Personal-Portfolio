export interface Experience {
    company: string;
    role: string;
    period: string;
    bullet_points: string[];
    technology?: string[];
    img?: string;
    sub_img?: string;
    direct_link?: { label: string, link: string };
    sub_link?: { label: string, link: string };
}

export const experienceList: Experience[] = [
    {
        company: "GIC",
        role: "Product Designer Intern",
        period: "August 2024 - December 2024",
        bullet_points: [
            "Led end-to-end product design for Automation Launchpad and FCC/Declarations portals: workshops, IA, user flows, wireframes, and design QA.",
            "Balanced 4-6 week sprints by aligning feasibility, business priorities, and engineering bandwidth through frequent reviews.",
            "Extended the Cosmos design system by documenting component guidelines (Alert, Anchor, Search) and pairing with developers for handoff.",
            "Improved compliance task completion by clarifying multi-step workflows.",
            "Unlocked faster developer handoff through detailed specs and QA walkthroughs.",
        ],
        technology: ["Figma", "Design Systems", "Workshop Facilitation"],
        direct_link: { label: "Recommendation Letter", link: "https://drive.google.com/file/d/1wbFC2lbAWlQs3jYJxg-wdmVc7OcSoq0m/view?usp=sharing" },
    },
    {
        company: "pQCee Pte Ltd",
        role: "Software Engineer Intern",
        period: "June 2025 - September 2025",
        bullet_points: [
            "Built a Teams message extension that encrypts attachments on the client using Web Crypto API before SharePoint upload (Node.js, Express, PQC libraries).",
            "Integrated Microsoft Graph API and Teams SSO to authenticate recipients and manage file storage permissions end-to-end.",
            "Delivered the project as a production-ready workflow covering architecture, Azure deployment, monitoring, and documentation.",
            "Enabled secure collaboration for regulated clients exploring PQC readiness.",
            "Reduced manual key management by automating recipient permission checks via Graph API.",
        ],
        technology: ["Node.js", "Express", "Web Crypto API", "Microsoft Teams", "Azure"],
    },

    {
        company: "ObstaX Pte Ltd",
        role: "Co-Founder",
        period: "April 2023 - April 2026",
        bullet_points: [
            "Led end-to-end product development from market validation and prototyping to user testing with over 50 SAVH clients.",
            "Managed go-to-market strategy, securing more than SGD 80,000 in grants and sponsorships and coordinating showcases with President Tharman and InspireCon 2025.",
            "Built the pre-order platform (Next.js, Supabase) and directed the landing page/UI design to collect testimonials and demand.",
            "Managed an 8-person cross-functional team overseeing finance, fundraising, manufacturing partners, and strategic collaborations.",
            "Represented ObstaX at AISDC 2025 and InspireCon 2025, pitching directly to industry leaders.",
            "Closed institutional partnerships that unlocked testing access and hardware subsidies.",
        ],
        technology: ["Next.js", "Supabase", "Entrepreneurship", "AI"],
        direct_link: { label: "ObstaX LinkedIn", link: "https://www.linkedin.com/company/obstax" },
        sub_link: { label: "Referral Letter", link: "https://drive.google.com/file/d/1GiyAGouISofJm1_CvhrY38ozxNMK5Q5Q/view?usp=sharing" },
    },
    {
        company: "ObstaX Pte Ltd",
        role: "Web Developer",
        period: "April 2023 - April 2026",
        bullet_points: [
            "Led end-to-end product development from market validation and prototyping to user testing with over 50 SAVH clients.",
            "Managed go-to-market strategy, securing more than SGD 80,000 in grants and sponsorships and coordinating showcases with President Tharman and InspireCon 2025.",
            "Built the pre-order platform (Next.js, Supabase) and directed the landing page/UI design to collect testimonials and demand.",
            "Managed an 8-person cross-functional team overseeing finance, fundraising, manufacturing partners, and strategic collaborations.",
            "Represented ObstaX at AISDC 2025 and InspireCon 2025, pitching directly to industry leaders.",
            "Closed institutional partnerships that unlocked testing access and hardware subsidies.",
        ],
        technology: ["Next.js", "Supabase", "Entrepreneurship", "AI"],
        direct_link: { label: "ObstaX LinkedIn", link: "https://www.linkedin.com/company/obstax" },
        sub_link: { label: "Referral Letter", link: "https://drive.google.com/file/d/1GiyAGouISofJm1_CvhrY38ozxNMK5Q5Q/view?usp=sharing" },
    },
    {
        company: "SUTD",
        role: "Undergraduate Teaching Assistant",
        period: "September 2023 - December 2023",
        bullet_points: [
            "Tutored lab sessions on Python scripting and parametric modeling (Rhino, Grasshopper).",
            "Held weekly consultations to unblock assignments and ensure on-time submissions.",
            "Coordinated with faculty on rubric design and provided feedback to improve lecture material.",
            "Achieved a 100% submission rate for the cohort by proactively flagging blockers early.",
            "Earned positive feedback scores for clarity and responsiveness.",
        ],
        technology: ["Python", "Rhino", "Grasshopper", "Teaching"],
    },
];
