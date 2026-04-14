'use client';

import Link from './Link';
import { LanguageSwitcher } from '@/components/local-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations();

  return (
    <div className='py-5 md:py-10 xl:py-14 flex justify-between'>
      <div className='flex'>
        <Link href='/' className='font-bold text-xl'>
          {t('header.home')}
        </Link>
        <Link href='/about-me' className='px-5'>
          {t('header.about')}
        </Link>
      </div>
      <div className='flex items-center gap-2'>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Link href='https://github.com/vixtorocha'>Github</Link>
      </div>
    </div>
  );
};
export default Header;
