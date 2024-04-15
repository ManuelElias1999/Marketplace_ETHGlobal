import MainButton from "@/components/buttons/MainButton";
import Header from "@/components/layout/header";
import Tip from "@/components/layout/tip";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { RemoveMediaImage } from "iconoir-react";
import Card from "@/components/card/card";
import Footer from "@/components/layout/Footer";

function Home() {
    return (
        <>
            <Header />
            <div className={styles.home_conatiner}>
                <div className={styles.home_conatiner_left}>
                    <div>
                        <span className={styles.red_line}></span>
                        Claymore
                    </div>
                    <h1>
                        Our platform is like a superhero - it's always on guard,
                        protecting you from harm!
                    </h1>
                    <div>
                        With this platform, we have created an ecosystem where
                        buyers and sellers can transact in a secure,
                        transparent, and efficient manner.
                    </div>
                    <div className={styles.home_container_buttons}>
                        <MainButton color="var(--secondary)">
                            Get Started
                        </MainButton>
                        <MainButton color="var(--primary)">
                            <span className={styles.underline}>About Us</span>
                        </MainButton>
                    </div>
                    <div className={styles.home_container_tips}>
                        <Tip />
                        <Tip title="Products:" number="10 M" />
                        <Tip title="Ratings" number="4.5/5" />
                    </div>
                </div>
                <div className={styles.home_conatiner_right}>
                    <Image
                        src="/images/pages/home/homeImage.jpeg"
                        alt="HomeImage"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div className={styles.featured_products}>
                <h2 className={styles.featured_products_title}>
                    Featured Products
                </h2>
                <p className={styles.center}>
                    <span className={styles.red_line}></span>
                </p>

                <div className={styles.card_container}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.about_left}>
                    <Image
                        width={500}
                        height={600}
                        src="/images/pages/home/aboutImage.jpeg"
                        alt="AboutImage"
                    />
                </div>
                <div className={styles.about_right}>
                    <h2>About "Claymore"</h2>
                    <p className={styles.red_line}></p>
                    What makes “Claymore” marketplace unique is that it is built
                    on the foundation of blockchain technology, which provides
                    an unalterable and trustless ledger that ensures the
                    security and authenticity of all transactions. With
                    Claymore, buyers and sellers can rest assured that they are
                    dealing with a platform that is immune to hacking, fraud, or
                    other security breaches.
                    <div className={styles.home_container_tips}>
                        <Tip />
                        <Tip title="Products:" number="10 M" />
                        <Tip title="Ratings" number="4.5/5" />
                    </div>
                </div>
            </div>

            <div className={styles.trusted}>
                <h2 className={styles.trusted_title}>Trusted by the Best</h2>
                <p className={styles.red_line}></p>

                <div className={styles.trusted_container}>
                    <Image
                        src="/images/pages/home/logo1.jpg"
                        alt="Trusted1"
                        width={100}
                        height={150}
                    />
                    <Image
                        src="/images/pages/home/logo2.jpg"
                        alt="Trusted2"
                        width={100}
                        height={150}
                    />
                    <Image
                        src="/images/pages/home/logo3.jpg"
                        alt="Trusted3"
                        width={100}
                        height={150}
                    />
                    <Image
                        src="/images/pages/home/logo4.jpg"
                        alt="Trusted4"
                        width={100}
                        height={150}
                    />
                </div>
            </div>

            <div className={styles.started}>
                <div className={styles.started_left}>
                    <h2>
                        Ready to get started? Join thousands of others today.
                    </h2>
                    <p className={styles.red_line}></p>
                    <MainButton color="var(--primary)">Sign Up</MainButton>
                </div>
                <div className={styles.started_left}>
                    <Image
                        src="/images/pages/home/startedImage.jpeg"
                        alt="StartedImage"
                        width={500}
                        height={300}
                    />
                </div>
            </div>

            <div className={styles.benefits}>
                <h2 className={styles.benefits_title}>
                    Benefits of using Claymore
                </h2>
                <p className={styles.red_line}></p>
                <div className={styles.benefits_container}>
                    <div className={styles.benefits_left}>
                        <div className={styles.benefits_card}>
                            <div className={styles.circle_number}>01</div>
                            Safe, secure, and efficient marketplace.
                        </div>
                        <div className={styles.benefits_card}>
                            <div className={styles.circle_number}>02</div>
                            Claymore is not just secure, it is also
                            user-friendly.
                        </div>
                        <div className={styles.benefits_card}>
                            <div className={styles.circle_number}>02</div>
                            We have created a vibrant ecosystem of buyers,
                            sellers, and service providers.
                        </div>
                        <div className={styles.benefits_card}>
                            <div className={styles.circle_number}>02</div>
                            We have created a vibrant ecosystem of buyers,
                            sellers, and service providers.
                        </div>
                    </div>
                    <div className={styles.benefits_right}>
                        <Image
                            src="/images/pages/home/benefitsImage.jpg"
                            alt="BenefitsImage"
                            width={400}
                            height={500}
                        />
                    </div>
                </div>

                <div className={styles.quote}>
                    <div className={styles.quote_card}>
                        <h2>
                            We're the marketplace that's so safe, it's
                            practically like shopping in a panic room!
                        </h2>
                        <p className={styles.white_line}></p>

                        <MainButton
                            txtColor="var(--secondary)"
                            color="var(--tertiary)"
                        >
                            Sign Up
                        </MainButton>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
