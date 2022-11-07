import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from 'react-i18next';

const CardDeal = () => {

  const { t, i18n } = useTranslation();

  return (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      {t('CardDeal.1')} <br className="sm:block hidden" /> {t('CardDeal.2')}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t('CardDeal.3')}
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  );
};

export default CardDeal;
