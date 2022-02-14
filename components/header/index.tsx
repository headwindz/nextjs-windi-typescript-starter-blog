import { useMemo } from 'react';
import Link from 'next/link';
import { Button, Avatar } from '@arco-design/web-react';
import themeConfig from '../../theme.config';
import { INavLink } from '@interface';
import ModeSwitch from '../modeSwitch';
import LocaleSwitch from '../localeSwitch';
import Image from 'next/image';

const dumpLink = ({ title, path }: INavLink) => {
  return (
    <Link href={path} passHref key={path}>
      <Button type="text" className="text-base">
        {title}
      </Button>
    </Link>
  );
};

const Header = () => {
  const [logo, NAV_LINKS] = useMemo(() => {
    const {
      navLinks,
      site: { logo },
    } = themeConfig;
    return [logo, navLinks];
  }, []);

  const links = NAV_LINKS.map(dumpLink);

  return (
    <header className="py-4 flex justify-between">
      <Link href="#" passHref>
        <Image
          src={logo}
          width={40}
          height={40}
          alt="logo"
          className="rounded-full"
        />
      </Link>
      <nav className="flex align-center items-center space-x-2">
        <div>
          {links}
          <ModeSwitch />
        </div>
        <LocaleSwitch />
      </nav>
    </header>
  );
};

export default Header;
