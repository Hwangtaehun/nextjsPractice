import {Inter} from 'next/font/google';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export default function Other({data}) {
    return (
        <main>
            <h1 className="header">{data.title}</h1>
            <p>{data.msg}</p>
            <div><Link href="/">Go Back!!</Link></div>
        </main>
    )
}

export function getStaticProps({params}) {
    const data = {
        title: 'Other page',
        msg: '정적 속성 예제입니다.'
    };

    return {
        props: {
            data: data
        }
    };
}