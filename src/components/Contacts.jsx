import styles from "../style";
import { useTranslation } from 'react-i18next';


const Contacts = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="contacts" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{t('Contacts.1')}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t('Contacts.2')}
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
};

export default Contacts;
