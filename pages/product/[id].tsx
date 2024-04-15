import MainButton from "@/components/buttons/MainButton";
import Img from "@/components/images/Img";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import TittleHeader from "@/components/layout/tittle_header";
import { useRouter } from "next/router";
import styles from "@/styles/productPage.module.css";

function Product() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className={styles.product}>
            <Header />
            <div>
                <TittleHeader tittle={`Producto ${id}`} />
                <div className={styles.productSection}>
                    <div className={styles.productImg}>
                        <Img src="/images/stores/xbox.png" alt="Xbox image" />
                    </div>
                    <div className={styles.productText}>
                        <div className={styles.productDetails}>
                            <div className={styles.productTitles}>
                                <h4>Country</h4>
                                <h4>Language</h4>
                                <h4>Genre</h4>
                                <h4>Publication Date</h4>
                            </div>
                            <div className={styles.productValues}></div>
                        </div>
                        <div className={styles.productMain}>
                            <div className={styles.productMainText}>
                                <h1>{`Producto ${id}`}</h1>
                                <h2>3 existences</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sed error ea eos dolore,
                                    est ab! Ab fugit modi eum in illum, quaerat
                                    maxime aliquid eligendi quam ex quia, nulla
                                    assumenda.
                                </p>
                            </div>
                            <div className={styles.productButton}>
                                <MainButton>Add to Cart</MainButton>
                                <h3>Price: 0.3eth</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
