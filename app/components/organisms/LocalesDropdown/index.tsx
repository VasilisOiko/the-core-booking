"use client"

import React from 'react'
import Dropdown from '../../molecules/Dropdown/index'
import LANGUAGES from "../../../utils/constants/languages"
import { MdLanguage } from "react-icons/md";
import i18n from '../../atoms/LocalizedText/helpers';


function LocalesDropdown() {

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Dropdown
          className={"right-11 top-8"}
          onChange={(language) =>  changeLanguage(language)}
          title={<MdLanguage className={"h-8 w-8 fill-blue-600"} />}
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