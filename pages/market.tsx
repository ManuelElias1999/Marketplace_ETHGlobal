import MainButton from "@/components/buttons/MainButton";
import Header from "@/components/layout/header";
import Tip from "@/components/layout/tip";
import styles from "@/styles/Product.module.css";
import Image from "next/image";
import Card from "@/components/card/card";
import TittleHeader from "@/components/layout/tittle_header";

// array 50 Card
const cards = Array(50).fill(0);

function Market() {
    return (
        <>
            <Header />

            <TittleHeader tittle="Marketplace" />

            <div className={styles.product_container}>
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            tittle="PS5"
                            price={0.0009}
                            description={"des"}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Market;
