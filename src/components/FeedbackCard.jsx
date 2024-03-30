// FeedbackCard.js
import React from 'react';
import { quotes } from "../assets";
import { useTranslation } from 'react-i18next';

const FeedbackCard = ({ id, img }) => {
  const { t } = useTranslation();

  return (
    <div className="feedback-card max-w-[370px] my-5 mx-3 px-10 py-12 rounded-[20px]">
      <img src={quotes} alt="quotes" className="w-[42px] h-[42px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {t(`FeedbackCard.${id}.content`)}
      </p>
      <div className="flex flex-row items-center">
        <img src={img} alt={t(`FeedbackCard.${id}.name`)} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {t(`FeedbackCard.${id}.name`)}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {t(`FeedbackCard.${id}.title`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
