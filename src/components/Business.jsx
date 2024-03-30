import React from 'react';
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from 'react-i18next';
import { star, shield, send } from "../assets";

// Create a single FeatureCard component
const FeatureCard = ({ icon, titleKey, contentKey }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt={t(titleKey)} className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {t(titleKey)}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(contentKey)}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  const { t } = useTranslation();
  const features = [
    { id: 'feature-1', icon: star, titleKey: 'FeatureCard.FeatureCard1.title', contentKey: 'FeatureCard.FeatureCard1.content' },
    { id: 'feature-2', icon: shield, titleKey: 'FeatureCard.FeatureCard2.title', contentKey: 'FeatureCard.FeatureCard2.content' },
    { id: 'feature-3', icon: send, titleKey: 'FeatureCard.FeatureCard3.title', contentKey: 'FeatureCard.FeatureCard3.content' },
  ];
  
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
        {features.map(feature => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            titleKey={feature.titleKey}
            contentKey={feature.contentKey}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
