import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {

  const { t } = useTranslation();

    return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          {t('TestimonialsCard.1')} <br className="sm:block hidden" /> {t('TestimonialsCard.2')}
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          {t('TestimonialsCard.3')}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map(({ id, name, img }) => (
          <FeedbackCard key={id} id={id} img={img} t={t} />
        ))}      </div>
    </section>
  );
};
export default Testimonials;
