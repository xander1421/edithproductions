import styles from "../style";
import Button from "./Button";

const Contacts = () => (
  <section id="contacts" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Get in touch with us</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get an free estimate as a first time customer!!
      </p>
    </div>
    <div className="flex items-stretch">
      <ul >
        <h3 className={styles.heading2_smaller}>John smith</h3>
        <h3 className={styles.heading2_smaller}>987654321</h3>
        <h3 className={styles.heading2_smaller}>example@example.com</h3>
      </ul>
    </div>
  </section>
);

export default Contacts;
