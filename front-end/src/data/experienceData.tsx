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
            "Revamped UI/UX for Automation Launchpad and Declarations portals within the Compliance (COS) system.",
            "Delivered end-to-end product design: ran Crazy 8s workshops, defined information architecture (IA), crafted user flows and wireframes, conducted design QA with developers, and prepared handoff decks for developers and stakeholders.",
            "Navigated tight 4-6 week timelines, balancing design feasibility, business priorities, and engineering bandwidth.",
            "Extended the Cosmos internal design system by documenting component guidelines (Alert, Anchor, Search).",
            "Unlocked faster developer handoff through detailed specs and QA walkthroughs."
        ],
        technology: ["Figma", "UIUX Design", "User Research", "Design Systems", "Product"],
        direct_link: { label: "Recommendation Letter", link: "https://drive.google.com/file/d/1wbFC2lbAWlQs3jYJxg-wdmVc7OcSoq0m/view?usp=sharing" },
    },
    {
        company: "pQCee Pte Ltd",
        role: "Software Engineer Intern",
        period: "June 2025 - September 2025",
        bullet_points: [
            "Built a Teams message extension that encrypt sensitive messages and attachments using post-quantum cryptography (PQC) on the client side before uploading to SharePoint(Node.js, Express.js, Web Crypto API).",
            "Implemented Teams SSO integration with Microsoft Graph API to resolve recipients and manage file storage/ sharing permissions.",
            "Delivered as an end-to-end product, including user-system workflow design, Azure deployment, and final documentation."
        ],
        technology: ["Node.js", "Express.js", "Web Crypto API", "Microsoft Teams", "Azure", "Software"],
        direct_link: { label: "Recommendation Letter", link: "https://drive.google.com/file/d/1-da8lJCqJ3huAbEZWnULeJEBJZuCZHu1/view?usp=sharing" },
        sub_link: { label: "Blog", link: "https://qcve.org/blog/end-to-end-post-quantum-cryptography-messaging-teams-extension" },
    },
    {
        company: "ESGpedia Pte Ltd",
        role: "Final Year Capstone Project",
        period: "September 2025 - April 2026",
        bullet_points: [
            "Led the data extraction and preprocessing pipeline for ESG reports, developing a Python-based system using text, table and OCR extraction to automatically detect and extract Scope 1-3 emissions, energy, and waste metrics from complex PDF reports.",
            "Designed a streamlined data pipeline for Databricks to automate PDF ingestion, ESG metric detection, and structured JSON output for downstream analytics.",
            "Presented progress and research insights to ESGpedia mentors and SUTD faculty, focusing on the scalability of AI-driven ESG intelligence for corporate sustainability benchmarking.",
        ],
        technology: ["Python", "OCR", "Databricks", "Software"],
    },
    {
        company: "ObstaX Pte Ltd",
        role: "Co-Founder",
        period: "April 2023 - April 2026",
        bullet_points: [
            "ObstaX is an assistive tech startup developing affordable AI-powered wearables for blind and visually impaired.",
            "Co-founded and scaled ObstaX from idea to funded startup, securing over S$80,000 from grants and sponsorship.",
            "Managed cross-functional team of 8, overseeing finance, fundraising, and strategic partnerships with SAVH and SUTD VIE.",
            "Represented at showcases and pitch events, including AISDC 2025, and a product demonstration to President Tharman."
        ],
        technology: ["Startup", "Entrepreneurship", "Product"],
        sub_link: { label: "LinkedIn", link: "https://www.linkedin.com/company/obstax" },
        direct_link: { label: "Recommendation Letter", link: "https://drive.google.com/file/d/1GiyAGouISofJm1_CvhrY38ozxNMK5Q5Q/view?usp=sharing" },
    },
    {
        company: "ObstaX Pte Ltd",
        role: "Web Developer",
        period: "April 2023 - April 2026",
        bullet_points: [
            "Currently developing landing page and pre-order system to showcase user testimonials and collect interest (Next.js, Node.js, Supabase).",
            "Currently developing web integration with ESP32 systems via port forwarding to enable real-time HTTP-based interaction for remote logging and manual control — deployed for SUTD Open House 2026, where ObstaX was featured."

        ],
        technology: ["Next.js", "Supabase", "Web Development", "Software"],
        sub_link: { label: "Landing Page", link: "https://www.obstax.sg" },
    },
    {
        company: "SUTD",
        role: "Undergraduate Teaching Assistant",
        period: "September 2023 - December 2023",
        bullet_points: [
            "10.014: Tutored 50 students on Python programming and 3D modeling (Rhino & Grasshopper), achieving 100% pass rate.",
        ],
        technology: ["Python", "Rhino", "Grasshopper", "Software"],
    },
];