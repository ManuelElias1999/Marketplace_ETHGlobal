import styles from "@/styles/components/page/tip.module.css";

type TipProps = {
  title?: string;
  number?: string;
};

const Tip = ({ title = "Buyers:", number = "568 k" }: TipProps) => {
  return (
    <div>
      <span className={styles.circle}></span>
      <span className={styles.tittle}>{title}</span>
      <p className={styles.number}>{number}</p>
    </div>
  );
};

export default Tip;
