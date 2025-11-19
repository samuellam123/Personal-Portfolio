import WebLayout from "../../src/components/WebLayout";

interface FocusPageProps {
    params: {
        focus: string;
    };
}

export default function FocusPage({ params }: FocusPageProps) {
    return <WebLayout focus={params.focus} />;
}
