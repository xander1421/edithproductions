import styles from "../style";
import { useTranslation } from 'react-i18next';

const StatCard = ({ contentKey, titleKey }) => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 flex justify-start items-center flex-row m-3">
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {t(contentKey)}
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        {t(titleKey)}
      </p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { key: 'StatsCard1', content: 'StatsCards.StatsCard1.content', title: 'StatsCards.StatsCard1.title' },
    { key: 'StatsCard2', content: 'StatsCards.StatsCard2.content', title: 'StatsCards.StatsCard2.title' },
    { key: 'StatsCard3', content: 'StatsCards.StatsCard3.content', title: 'StatsCards.StatsCard3.title' },
  ];

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(({ key, content, title }) => (
        <StatCard key={key} contentKey={content} titleKey={title} />
      ))}
    </section>
  );
};

export default Stats;



