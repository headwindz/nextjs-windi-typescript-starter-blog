import { useMemo } from 'react';
import Link from 'next/link';
import { Button, Avatar } from '@arco-design/web-react';
import themeConfig from '../../theme.config';
import { INavLink } from '@interface';
import ModeSwitch from '../modeSwitch';
import LocaleSwitch from '../localeSwitch';

const dumpLink = ({ title, path }: INavLink) => {
  return (
    <Link href={path} passHref>
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
        <Avatar>
          <img src={logo} width={36} height={36} alt="logo" />
        </Avatar>
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
