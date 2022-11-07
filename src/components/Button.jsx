import React from "react";
import { useTranslation } from 'react-i18next';

const Button = ({ styles }) => {

  const { t, i18n } = useTranslation();
  return (
  
  <button type="button"  onClick={() => window.location.replace("/#contacts")} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {t('Button.1')}
  </button>
  );
};
export default Button;
