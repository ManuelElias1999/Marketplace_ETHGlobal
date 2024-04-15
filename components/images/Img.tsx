import Image from "next/image";
import styles from "@/styles/utils.module.css";

type ImgProps = {
    src: string;
    alt: string;
};

function Img({ src, alt }: ImgProps) {
    return (
        <div className={styles.image}>
            <Image style={{ objectFit: "cover" }} fill src={src} alt={alt} />
        </div>
    );
}

export default Img;
