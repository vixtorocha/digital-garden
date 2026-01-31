import Link from "@/components/Link";
import { getTranslations } from "next-intl/server";

export default async function AboutMePage() {
  const t = await getTranslations("about");

  return (
    <main>
      <p>{t("hi")}</p>
      <p>
        {t("myName")}{" "}
        <Link href="https://www.ufg.br/">{t("univesityName")}</Link>.
      </p>
      <p>
        {t("findMe")}{" "}
        <Link href="https://twitter.com/vixtorocha">{t("twitter")}</Link>,{" "}
        <Link href="https://www.linkedin.com/in/vixtorocha/">{t("linkedin")}</Link>,{" "}
        {t("projects")}{" "}
        <Link href="https://github.com/vixtorocha">{t("github")}</Link>.
      </p>
    </main>
  );
}