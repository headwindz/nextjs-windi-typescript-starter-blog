import themeConfig from '../../theme.config';
// https://www.figma.com/file/ozCeLuzS3zdmWGYc96Q4WQ/Social-Media-Icons-2021-by-SHOCKStudio.pl-(Community)?node-id=1%3A696
import Medium from './medium.svg';
import Figma from './figma.svg';
import Github from './github.svg';

const SOCIAL_LINKS = [
  {
    comp: Github,
    link: 'https://github.com/n0ruSh',
  },
  {
    comp: Medium,
    link: 'https://medium.com/@n0rush',
  },
  {
    comp: Figma,
    link: 'https://www.figma.com/',
  },
];

const Footer = () => {
  const {
    site: { author },
  } = themeConfig;
  const allLinks = SOCIAL_LINKS.map((sLink) => {
    const { comp: Comp, link } = sLink;
    return (
      <a
        className="flex"
        key={link}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <Comp className="w-8 h-8 opacity-60 hover:(opacity-100 transform scale-105 transition-transform)" />
      </a>
    );
  });
  return (
    <footer className="prose w-full flex flex-col items-center mt-4 p-3 border-gray-4 border-solid border-t-1 mx-auto">
      <div className="flex space-x-6 mb-4">{allLinks}</div>
      <div className="text-xs text-gray-6 font-mono">{`Copyright © ${new Date().getFullYear()} ${
        author.name
      }`}</div>
    </footer>
  );
};

export default Footer;
