import { clients } from "../constants";
import styles from "../style";
import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';

const Clients = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <LazyImage src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients;
