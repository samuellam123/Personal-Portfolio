import { Typography } from "antd"

const { Text } = Typography

export const name = "Samuel Lam Yu En (林宇恩)";

export default function HomeText() {
    return (
        <Text style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            <span style={{ display: 'block', marginBottom: 12 }}>
                Hello! I'm Samuel Lam, a final-year Computer Science and Design student at the SUTD, specialising in Financial Technology and Data Analytics, graduating in April 2026.
            </span>
            <span style={{ display: 'block' }}>
                I love building products at the intersection of software engineering and product design, and I'm actively exploring graduate <b>software/product roles</b> starting in May 2026.
            </span>
        </Text>
    )
}

export const profilebanner = "/images/profile.jpeg";
export const profilepic = "/images/profilepic.jpg";
