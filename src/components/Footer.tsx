'use client';

import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();
  return <div className='text-center mt-30 mb-5'>{t('footer.text')}</div>;
};
export default Footer;
