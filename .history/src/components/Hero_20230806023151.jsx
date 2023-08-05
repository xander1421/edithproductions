import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";
import { useTranslation } from 'react-i18next';

const Hero = () => {


  const { t, i18n } = useTranslation();

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[42px] text-white ss:leading-[40.8px] leading-[65px]">
          {t('hero.1')} <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{t('hero.2')}</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[32px] text-[42px] text-white ss:leading-[40.8px] leading-[65px] w-full hover:after:">
        {t('hero.3')}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t('hero.4')}
        </p>
      <div className="">
        <GetStarted/>
      </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="z-[5] relative ss:leading-[40.8px] leading-[75px]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>


    </section>
  );
};

export default Hero;
