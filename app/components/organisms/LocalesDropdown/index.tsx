"use client"

import React from 'react'
import Dropdown from '../../molecules/Dropdown/index'
import { MdLanguage } from "react-icons/md";


function LocalesDropdown() {
  return (
    <div>
      <Dropdown
          className={"right-11 top-8"}
          title={<MdLanguage className={"h-8 w-8 fill-blue-600"} />}
          >
            <Dropdown.Item>
              ελληνικά
            </Dropdown.Item>
            <Dropdown.Item>
              english
            </Dropdown.Item>
        </Dropdown>
    </div>
  )
}

export default LocalesDropdown