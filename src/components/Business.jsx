import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from 'react-i18next';
import { star, shield, send   } from "../assets";


const FeatureCard1 = () => {
  const { t, i18n } = useTranslation();
  return (
  <div className={`flex flex-row p-6 rounded-[20px] "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={star} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {t('FeatureCard.FeatureCard1.title')}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {t('FeatureCard.FeatureCard1.content')}
      </p>
    </div>
  </div>
  );
};

const FeatureCard2 = () => {
  const { t, i18n } = useTranslation();
  return (
  <div className={`flex flex-row p-6 rounded-[20px] "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={shield} alt="shield" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {t('FeatureCard.FeatureCard2.title')}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {t('FeatureCard.FeatureCard2.content')}
      </p>
    </div>
  </div>
  );
};

const FeatureCard3 = () => {
  const { t, i18n } = useTranslation();
  return (
  <div className={`flex flex-row p-6 rounded-[20px] "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={send} alt="send" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {t('FeatureCard.FeatureCard3.title')}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {t('FeatureCard.FeatureCard3.content')}
      </p>
    </div>
  </div>
  );
};

const Business = () =>  {

  const { t, i18n } = useTranslation();
  
  return(
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      {t('BusinessCard.title')} <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t('BusinessCard.content')}
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
        <FeatureCard1 key="feature-1"/>
        <FeatureCard2 key="feature-2"/>
        <FeatureCard3 key="feature-3"/>


    </div>
  </section>
  );
};
export default Business;
