"use client";

import { usePathname } from "next/navigation";
import { locales } from "@/i18n/locales";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  return (
    <nav>
      {locales
        .filter(locale => locale !== currentLocale)
        .map(locale => {
          const newPath = pathname.replace(/^\/(en|pt)/, `/${locale}`);

          return (
            <a key={locale} href={newPath} className="pr-2">
              {locale.toUpperCase()}
            </a>
          );
        })}
    </nav>
  );
}