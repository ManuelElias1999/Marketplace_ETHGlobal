import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/page/header.module.css";

function ImageButton() {
    return (
        <Link href={"/home"} className={styles.brand_title}>
            <Image src="/images/logo.png" alt="Logo" width={70} height={100} />
            Claymore
        </Link>
    );
}

export default ImageButton;
