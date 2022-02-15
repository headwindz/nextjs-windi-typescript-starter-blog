import { Select } from '@arco-design/web-react';
import { useRouter } from 'next/router';
import themeConfig from '../../theme.config';

const LocaleSwitch = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { locale, asPath } = router;
  const locales = themeConfig.i18n.locales;
  const options = locales.map((lcs) => {
    return {
      ...lcs,
      label: lcs.title,
    };
  });

  const onLocaleChange = (newLocale: string) => {
    router.push(asPath, asPath, {
      locale: newLocale,
    });
  };

  return (
    <Select
      className={`!w-24 ${className}`}
      options={options}
      value={locale}
      onChange={onLocaleChange}
    />
  );
};

export default LocaleSwitch;
