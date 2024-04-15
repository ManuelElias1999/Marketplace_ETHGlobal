import Link from "next/link";
import React from "react";
import styles from "@/styles/components/page/header.module.css";
import { CartAlt } from "iconoir-react";
import ImageButton from "../buttons/ImageButton";

const Header = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ImageButton />
                <div
                    className={styles.toggle_button}
                    onClick={() => {
                        const NavLinks =
                            document.getElementsByClassName("navbar_links")[0];
                        NavLinks.classList.toggle("active");
                    }}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={styles.navbar_links}>
                    <ul>
                        <li>
                            <Link href="/home">Home</Link>
                        </li>
                        <li>
                            <Link href="/home">Pages</Link>
                        </li>
                        <li>
                            <Link href="/home">About</Link>
                        </li>
                        <li>
                            <Link href="/home">Services</Link>
                        </li>
                        <li>
                            <Link href="/market">
                                <CartAlt />
                            </Link>
                        </li>
                        <li>
                            <Link href="/signin">Log In</Link>
                        </li>
                        <li>
                            <Link href="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
