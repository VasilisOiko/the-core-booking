"use client"

import React from 'react';
import Dropdown from '../../../molecules/Dropdown/tailwind/index';
import LANGUAGES from "../../../../utils/constants/languages";
import { MdLanguage } from "react-icons/md";
import i18n from '../../../../locales/init';


function LocalesDropdown() {

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Dropdown
          className={"right-11 top-8"}
          onChange={(language) =>  changeLanguage(language)}
          title={<MdLanguage className={"h-10 w-10 fill-shiraz"} />}
          >
            <Dropdown.Item id={LANGUAGES.GREEK} defaultSelect={true}>
              {LANGUAGES.GREEK_TEXT}
            </Dropdown.Item>
            <Dropdown.Item id={LANGUAGES.ENGLISH}>
              {LANGUAGES.ENGLISH_TEXT}
            </Dropdown.Item>
        </Dropdown>
    </div>
  )
}

export default LocalesDropdown