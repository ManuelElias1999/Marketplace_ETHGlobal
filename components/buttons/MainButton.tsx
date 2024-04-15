import { MouseEventHandler, ReactNode } from "react";
import styles from "@/styles/utils.module.css";

type MainButtonProps = {
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    color?: string;
    txtColor?: string;
};

function MainButton({
    type = "button",
    handleClick = () => console.log("Button clicked"),
    children,
}: // color = "var(--primary)",
MainButtonProps) {
    return (
        <button onClick={handleClick} type={type} className={styles.mainButton}>
            {children}
        </button>
    );
}

export default MainButton;
