import Link from "next/link"
import Image from "next/image"
import styles from './style.module.css';

export default function Other(){
    return (
        <main>
            <h1 className={styles.msg}>Other page</h1>
            <p className={styles.title}>이건 다른 페이지입니다.</p>
            <div>
                <Image src="/sample.jpg" width={200} height={200} />
            </div>
            <div>
                <Link href="/">go back!!</Link>
            </div>
        </main>
    )
}