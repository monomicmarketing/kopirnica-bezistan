"use client";
import { useEffect } from "react";

export function DocumentLanguage({ language }: { language: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = language;
    return () => { document.documentElement.lang = previous; };
  }, [language]);
  return null;
}
