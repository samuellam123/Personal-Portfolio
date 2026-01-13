// Source for icons: https://github.com/marwin1991/profile-technology-icons/tree/main/icons, https://www.flaticon.com/free-icons/cdn

import { Typography } from "antd";
const fintech_link = "https://www.sutd.edu.sg/istd/education/undergraduate/specialisation-tracks/financial-technology/"

const { Title } = Typography;

// Education Timeline Item (used in About timeline)
export const timelineItems = [
    {
        children: (
            <>
                <Title level={5}>Singapore University of Technology and Design (SUTD)</Title>
                <p>Computer Science and Design (CSD), Specialising in <a target="__blank" href={fintech_link}>FinTech</a> (in progress)</p>
                <p><b>Completed Course:</b> Algorithms, Data Structures, Computation Structures, Java Android App Development, UML, Operating Systems</p>
                <p><b>Ongoing Course:</b> Database and Big Data, ML, Introduction to Investment, MicroEconomics</p>
                <p>September 2022 - May 2026</p>
            </>
        ),
    },
];

export const educationDetails = [
    {
        institution: "Singapore University of Technology and Design (SUTD)",
        program: "Bachelor of Engineering, Computer Science & Design",
        period: "Sep 2022 - Apr 2026",
        highlights: [
            "Expected graduation with Second Upper Honours, Current GPA: 4.03/5.0",
            "CS Core Modules: Algorithms, Data Structures, OS, Network, Android App Dev, UIUX, Cloud Computing and IoT, Distributed Systems.",
            "Financial Technology Specialisation: Microeconomics, Introduction to Investment",
            "Data Analytics Specialisation: Machine Learning, Database and Big Data",
            "ASEAN Scholar"
        ],
    },
];

// Skills List
// export const skills = [
//     { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png" },
//     { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
//     { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
//     { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
//     { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" },
//     { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
//     { name: "MySQL", img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png" },
//     { name: "SQLite3", img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png" },
//     { name: "MongoDB", img: "https://www.svgrepo.com/show/331488/mongodb.svg" },
//     { name: "ExpressJS", img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
//     { name: "React", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
//     { name: "NodeJS", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
//     { name: "Vite", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" },
//     { name: "Microsoft Visual Basic", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png" },
// ];

export const skills = [
    // Languages
    { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png" },
    { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    { name: "SQL", img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
    { name: "Ruby", img: "https://cdn-icons-png.flaticon.com/512/919/919842.png" },
    { name: "Markdown", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },

    // Frontend Tools
    { name: "React", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Vitest", img: "https://vitest.dev/logo.svg" },
    { name: "Figma", img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },

    // Backend & APIs
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Express.js", img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
    { name: "FastAPI", img: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
    { name: "Ruby on Rails", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },

    // Databases
    { name: "MySQL", img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png" },
    { name: "DynamoDB", img: "https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg" },
    { name: "MongoDB", img: "https://www.svgrepo.com/show/331488/mongodb.svg" },

    // DevOps & Cloud
    { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", img: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },

    // Miscellaneous
    { name: "Git", img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
    { name: "GitHub", img: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
    { name: "Microsoft Visual Basic", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png" }
];



// Contact Information
export const contactLinks = [
    { name: "My Resume", url: "https://tinyurl.com/LamYuEnResume", img: "https://cdn-icons-png.flaticon.com/512/724/724933.png" },
    { name: "LinkedIn", url: "https://linkedin.com/in/lam-yu-en/", img: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
    { name: "GitHub", url: "https://github.com/samuellam123", img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    { name: "Email", url: "mailto:yuen_lam@mymail.sutd.edu.sg", img: "https://cdn-icons-png.flaticon.com/512/732/732200.png" },
    { name: "WhatsApp", url: "https://wa.me/6588508275", img: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
];
