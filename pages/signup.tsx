import styles from "@/styles/signin.module.css";
import MainButton from "@/components/buttons/MainButton";
import Img from "@/components/images/Img";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import Metamask from "../components/icons/metamask";
import TittleHeader from "@/components/layout/tittle_header";
import Link from "next/link";
import SignUpForm from "@/components/forms/signup/form";
import { connectWallet, initialize } from "@/ethereum/web3";

function signup() {
    return (
        <div className={styles.loginPage}>
            <Header />
            <div className={styles.container}>
                <TittleHeader tittle="Sign Up" />
                <div className={styles.login}>
                    <div className={styles.image}>
                        <Img src="/images/signup.png" alt="Sign Up Image" />
                    </div>
                    <div className={styles.loginImage}>
                        {/* <Img
                            src="/images/metamask_poly.png"
                            alt="Login Image"
                        /> */}
                        <Metamask />
                        <div className={styles.loginButtons}>
                            <MainButton
                                handleClick={() => {
                                    initialize();
                                    connectWallet();
                                }}
                                type="button"
                            >
                                <Metamask />
                                Sign up with Metamask
                            </MainButton>

                            <SignUpForm />
                            {/* <MainButton type="button">
                                Sign in with Email
                            </MainButton> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default signup;
