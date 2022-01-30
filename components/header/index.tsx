import { useMemo } from 'react';
import Link from 'next/link'
import themeConfig from '../../theme.config';
import { INavLink } from '../../interface';
import ModeSwitch from '../modeSwitch';
import LocaleSwitch from '../localeSwitch';

const dumpLink = ({ title, path }: INavLink) => {
  return <Link href={path}>
    <a className='text-base'>{title}</a>
  </Link>
}

const Header = () => {
  const [logo, NAV_LINKS] = useMemo(() => {
    const { navLinks, site: { logo } } = themeConfig;
    return [logo, navLinks];
  }, []);

  const links = NAV_LINKS.map(dumpLink);

  return (<header className="py-4 flex justify-between">
    <Link href="#">
      <img src={logo} width={36} height={36} />
    </Link>
    <nav className='flex align-center items-center space-x-5'>
      { links }
      <ModeSwitch/>
      <LocaleSwitch />
    </nav>
  </header>
  )
}

export default Header
