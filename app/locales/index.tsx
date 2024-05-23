"use client"
import React from "react";
import { useTranslation } from "react-i18next";

type useProps = {
    id: string;
    className?: string;
}

const RawLocalizedText = (id: string) => {
  const {t} = useTranslation();
  return t(id);
}

function LocalizedText({ id, className }: useProps) {
  const { t } = useTranslation();

  return <span className={className}>{t(id)}</span>;
}

export { LocalizedText, RawLocalizedText };