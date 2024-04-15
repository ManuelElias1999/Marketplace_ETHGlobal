import React from "react";
import styles from "@/styles/Product.module.css";

type TittleProps = {
  tittle?: string;
};

const TittleHeader = ({ tittle = "Tittle" }: TittleProps) => {
  return (
    <div className={styles.title_header_container}>
      <div className={styles.title_header}>
        <h1>{tittle}</h1>
        <p className={styles.red_line}></p>
      </div>
    </div>
  );
};

export default TittleHeader;
