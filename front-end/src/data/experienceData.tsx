//import all project images
import { imageAssets } from "../data/imageAssets";

export interface Experience {
    title: string;
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
    sub_link?: { label: string, link: string };
}

export const experienceList: Experience[] = [
    {
        title: "Product Designer Intern at GIC",
        period: "August 2024 - December 2024 (4 months)",
        location: "Singapore",
        description: "Interned as a Product Designer in the Business Process Services (BPS) department, contributing to GIC's internal design system and leading the design for two key projects.",
        longer_desc: (
            <>
                <p>As a Product Designer Intern at GIC, I contributed to the Cosmos internal design system and led the design for the Automation Launchpad and Compliance Portal Revamp projects.
                    My role involved designing UI components, improving user workflows, and collaborating with stakeholders to refine product usability.</p>
                <p>Through this experience, I enhanced my UX design skills, deepened my understanding of design systems, and developed strong stakeholder management abilities. Additionally,
                    I worked closely with developers to bridge the gap between design and implementation.</p>
            </>
        ),
        responsibilities: [
            "🎨 Designed and refined UI components for the Cosmos internal design system, including the Anchor, Alert, and Search components.",
            "📊 Led the design for the Automation Launchpad project, creating user workflows, wireframes, and prototypes to enhance automation tracking.",
            "🛠️ Acted as the lead designer for the Compliance Portal Revamp, improving workflows for financial crime compliance and declarations processes.",
            "🤝 Conducted stakeholder meetings and design reviews to align design solutions with business and user needs.",
            "📑 Developed comprehensive design documentation and guidelines to ensure consistency and scalability across projects."
        ],
        key_achievements: [
            "🚀 Successfully led the design for two major product initiatives within GIC.",
            "🔍 Conducted extensive research and user interviews to refine component and workflow designs.",
            "📈 Improved alignment between design and development teams, ensuring seamless implementation of UI components.",
            "📑 Established clear design guidelines for multiple UI components, contributing to the scalability of the Cosmos design system."
        ],
        technology: ["Figma", "Design System", "Vitest",],
        direct_link: { label: "Recommendation Letter", link: "https://drive.google.com/file/d/1wbFC2lbAWlQs3jYJxg-wdmVc7OcSoq0m/view?usp=sharing" },
        img: imageAssets.gic,
    }
    ,
    {
        title: "Co-founder at ObstaX",
        period: "April 2023 - Present (~2 years)",
        location: "SUTD, Singapore",
        description: "Co-founded ObstaX, leading business operations, product development, and funding efforts to create smart glasses and wristbands that enhance navigation for blind and visually impaired users.",
        longer_desc: (<p></p>),
        responsibilities: [
            "📊 Managed finances, HR, and daily operations to ensure smooth business functioning.",
            "🦾 Oversaw product development of smart glasses and wristbands designed to improve navigation for visually impaired users.",
            "🔧 Coordinated with engineering and design teams to align product features with user needs and technical specifications.",
            "📝 Conducted market research and prototype testing with the visually impaired community to gather feedback and iterate on product designs.",
            "💰 Secured SGD 72,000 in initial funding within 9 months through strategic financial planning and investor presentations.",
            "🌐 Currently developing a landing page to showcase user testimonials and enable pre-orders."
        ],
        key_achievements: [
            "💰 Raised SGD 72,000 in funding within 9 months.",
            "🎯 Conducted extensive prototype testing with the visually impaired community.",
        ],
        technology: ["Social Startup", "Entrepreneurship", "MERN Stack"],
        direct_link: { label: "ObstaX LinkedIn", link: "https://www.linkedin.com/company/obstax" },
        sub_link: { label: "Referral Letter", link: "https://drive.google.com/file/d/1GiyAGouISofJm1_CvhrY38ozxNMK5Q5Q/view?usp=sharing" },
        img: imageAssets.obstax,
    },
    {
        title: "Undergraduate Teaching Assistant",
        period: "September 2023 - December 2023 (4 months)",
        location: "SUTD, Singapore",
        description: "Assisted in teaching Computational Thinking for Design, supporting students in 3D modeling with Rhino and Grasshopper, as well as Python programming.",
        longer_desc: (
            <>
                <p>As an Undergraduate Teaching Assistant for the Computational Thinking for Design course, I supported over 50 students in learning 3D modeling with <b>Rhino and Grasshopper</b> and
                    programming in <b>Python</b>. I provided one-on-one guidance, assisted with assignments, and conducted additional consultations to reinforce course material.</p>
                <p>My efforts contributed to a <b>100% assignment submission rate</b> and positive student feedback for effective support and teaching methods.</p>
            </>
        ),
        responsibilities: [
            "📚 Assisted in teaching 3D Modeling with Rhino and Grasshopper, as well as Python programming.",
            "👨‍🏫 Provided one-on-one guidance to clarify course materials for over 50 students.",
            "📑 Guided students in completing two major assignments through consultations and additional support.",
            "📝 Ensured a 100% assignment submission rate by proactively addressing student challenges.",
        ],
        key_achievements: [
            "✅ Achieved a 100% assignment submission rate through student engagement and consultations.",
            "💡 Received positive feedback from students for effective teaching methods and support.",
            "🎓 Helped students develop fundamental skills in 3D modeling and Python programming."
        ],
        technology: ["Python", "Rhino 3D", "Grasshopper", "TA"],
        img: imageAssets.ta,
    },
    {
        title: "Gaming Support Agent at Epic Games",
        period: "July 2020 - May 2021 (11 months)",
        location: "Remote",
        description: "Provided technical and gameplay support for Epic Games players, resolving account issues and technical difficulties while maintaining high customer service standards.",
        longer_desc: (
            <p>As a Gaming Support Agent at Epic Games, I provided direct assistance to players, troubleshooting account issues, technical problems, and gameplay-related queries.
                Working in a fast-paced environment, I managed high email and live chat volumes while maintaining service quality. I also contributed to team engagement by
                hosting daily huddles and was recognized as 'Support Agent of the Month' for outstanding performance.</p>
        ),
        responsibilities: [
            "🎮 Resolved various player issues, including account problems, technical difficulties, and gameplay queries.",
            "📩 Managed an average of 64 email and live chat tickets daily while maintaining high service quality.",
            "🤝 Facilitated team-building activities and daily huddles to improve team engagement.",
            "👥 Collaborated with support agents and the Team Lead to ensure consistent, high-quality player support."
        ],
        key_achievements: [
            "🏆 Awarded 'Support Agent of the Month' in the English-Mandarin support team.",
            "📈 Maintained high customer satisfaction scores while handling high ticket volumes.",
            "🤝 Enhanced team collaboration through daily huddles and engagement activities."
        ],
        technology: ["Communication", "Live Chat Support", "Email Support"],
        img: imageAssets.epicgames,
        sub_img: imageAssets.fortnite,
    },
];