import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button, Drawer, Menu } from '@arco-design/web-react';
import themeConfig from '../../theme.config';
import { INavLink } from '@interface';
import ModeSwitch from '../modeSwitch';
import LocaleSwitch from '../localeSwitch';
import Image from 'next/image';
import { IconSearch, IconMenu } from '@arco-design/web-react/icon';

const { Item: MenuItem } = Menu;

/**
 * navigation links on the header
 * should match to pages under pages folder
 */
const NAV_LINKS = [
  {
    title: 'Blog',
    path: '/blogs',
  },
  {
    title: 'Tag',
    path: '/tags',
  },
];

const dumpLink = ({ title, path }: INavLink) => {
  return (
    <Link href={path} passHref key={path}>
      <Button type="text" className="text-base <sm:hidden">
        {title}
      </Button>
    </Link>
  );
};

const dumpMenu = ({ title, path }: INavLink) => {
  return (
    <MenuItem key={path}>
      <Link href={path} passHref key={path}>
        {title}
      </Link>
    </MenuItem>
  );
};

const Header = () => {
  const logo = useMemo(() => {
    const {
      site: { logo },
    } = themeConfig;
    return logo;
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = NAV_LINKS.map(dumpLink);
  const menus = NAV_LINKS.map(dumpMenu);

  return (
    <header className="py-4 flex">
      <Link href="/" passHref>
        <Image
          src={logo}
          width={40}
          height={40}
          alt="logo"
          className="rounded-full cursor-pointer"
        />
      </Link>
      <nav className="flex flex-grow justify-end items-center">
        {links}
        <LocaleSwitch className="ml-2 <sm:hidden" />
        <ModeSwitch />
        <Button type="text" className="text-base" onClick={console.log}>
          <IconSearch />
        </Button>
        <Button
          type="text"
          className="text-base sm:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <IconMenu />
        </Button>
      </nav>
      <Drawer
        width={300}
        title={null}
        footer={null}
        visible={isDrawerOpen}
        closable={false}
        onOk={() => {
          setIsDrawerOpen(false);
        }}
        onCancel={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Menu>
          {menus}
          <MenuItem key="localSwitch">
            <LocaleSwitch />
          </MenuItem>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
