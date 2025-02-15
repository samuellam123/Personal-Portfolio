import { Flex, Image, Timeline, Tooltip, Typography, } from "antd";

const { Title, Text } = Typography

const fintech_link = "https://www.sutd.edu.sg/istd/education/undergraduate/specialisation-tracks/financial-technology/"

// Timeline Item
const items = [
    {
        children: (
            <>
                <Title level={5}>Singapore University of Technology and Design (SUTD)</Title>
                <p>Computer Science and Design (CSD), Specialising in <a target="__blank" href={fintech_link}>FinTech</a> (in progress)</p>
                <p><b>Completed Course:</b> Algorithms, Data Structures, Computation Structures, Java Android App
                    Development, UML, Operating Systems</p>
                <p><b>Ongoing Course:</b> Database and Big Data, ML, Introduction to Investment, MicroEconomics</p>
                <p>September 2022 - May 2026</p>
            </>
        ),
    },
]

// Skills List
const skills = [
    { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png" },
    { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" },
    { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "SQLite3", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1024px-Sqlite-square-icon.svg.png" },
    { name: "MongoDB", img: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { name: "ExpressJS", img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
    { name: "React", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "NodeJS", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Vite", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" },
    { name: "Microsoft Visual Basic", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png" },
];


// Contact Information
const contactLinks = [
    { name: "WhatsApp", url: "https://wa.me/6588508275", img: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
    { name: "Email", url: "mailto:yuen_lam@mymail.sutd.edu.sg", img: "https://cdn-icons-png.flaticon.com/512/732/732200.png" },
    { name: "LinkedIn", url: "https://linkedin.com/in/lam-yu-en/", img: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
    { name: "GitHub", url: "https://github.com/samuellam123", img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
];

export default function About() {
    return (
        <>
            <Flex gap={"large"} vertical style={{ backgroundColor: "#f0f0f0", padding: "5%" }}>
                <Title >About</Title>

                <Title level={4}>Education</Title>
                <Timeline
                    items={items}
                />

                <Title level={4}>Skills</Title>
                <Flex wrap gap="large">
                    {skills.map((skill, index) => (
                        <Tooltip key={index} title={skill.name}>
                            <Image
                                width={50}
                                height={50}
                                src={skill.img}
                                alt={skill.name}
                                preview={false}
                            />
                        </Tooltip>
                    ))}
                </Flex>

                <Title level={4}>Contact</Title>
                <Flex wrap gap="large" >
                    {contactLinks.map((contact, index) => (
                        <Tooltip key={index} title={contact.name}>
                            <a href={contact.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={40}
                                    height={40}
                                    src={contact.img}
                                    alt={contact.name}
                                    preview={false}
                                />
                            </a>
                        </Tooltip>
                    ))}
                </Flex>

            </Flex >
        </>
    )
}