import styles from "./style";
import { Billing, Business, CardDeal, Contacts, Footer, Navbar, Stats, Testimonials, Hero, Language } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="m-2 mt-4 flex justify-end">
        <Language/>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar /> 
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
        
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Contacts />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
