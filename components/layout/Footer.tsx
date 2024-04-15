import Link from "next/link";
import ImageButton from "../buttons/ImageButton";
import { Facebook, Twitter, Instagram, LinkedIn } from "iconoir-react";
import styles from "@/styles/components/page/footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContainer}>
                <div className={styles.left}>
                    <ImageButton />
                    <div className={styles.icons}>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <LinkedIn />
                    </div>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li>
                            <Link href={"/home"}>Home</Link>
                        </li>

                        <li>
                            <Link href={"/signin"}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/signup"}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.text}>© Claymore - 2023 </div>
        </footer>
    );
}

export default Footer;
