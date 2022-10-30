

import { globe } from "../assets";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";


function changeLanguage(e) {
  i18n.changeLanguage(e.target.value);
}

const Language = () => {
  const languages = [
    { name: "Romanian", code: "ro" },
    { name: "English", code: "en" },
    { name: "Russian", code: "ru" },
  ];

  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {i18n.changeLanguage(lng);};

  const currentLocale = Cookies.get("i18next") || "en";

  const [language, setLanguage] = useState(currentLocale);

  const handleChangeLocale = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const currentLangObj = languages.find((lang) => lang.code === currentLocale);

  useEffect(() => {
    document.body.dir = currentLangObj.dir || "ltr";
  }, [currentLangObj, t]);

  return (
    <div className="flex top-0 mr-6 text-white" >
        <img src={globe} className="w-[22px] h-[22px]"/>
        <div className="switcher">
          {/* Language switch dropdown here */}
          

          <select className="bg-primary w-full font-poppins font-normal cursor-pointer text-[16px] text-white" onChange={handleChangeLocale} value={language}>
              <option key="ro" value="ro">
                RO
              </option>
              <option key="en" value="en">
              EN
            </option>
              <option key="ru" value="ru">
              RU
            </option>
          </select>
        </div>
    </div>
  );
};

export default Language;
