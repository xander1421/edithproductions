import { stats } from "../constants";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const Stats = () => {

  const { t } = useTranslation();

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        <div key="stats-1" className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {t('StatsCards.StatsCard1.content')}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {t('StatsCards.StatsCard1.title')}
          </p>
        </div>
        <div key="stats-2" className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {t('StatsCards.StatsCard2.content')}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {t('StatsCards.StatsCard2.title')}
          </p>
        </div>
        <div key="stats-3" className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {t('StatsCards.StatsCard3.content')}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {t('StatsCards.StatsCard3.title')}
          </p>
        </div>
    </section>

  );
};
export default Stats;
