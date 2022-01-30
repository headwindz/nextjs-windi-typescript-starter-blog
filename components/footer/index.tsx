import Link from 'next/link';
import themeConfig from '../../theme.config';
// https://www.figma.com/file/ozCeLuzS3zdmWGYc96Q4WQ/Social-Media-Icons-2021-by-SHOCKStudio.pl-(Community)?node-id=1%3A696
import Github from './github.svg';
import Medium from './medium.svg';
import Figma from './figma.svg';

const SOCIAL_LINKS = [{
  comp: Github,
  link: 'https://github.com/n0ruSh'
}, {
  comp: Medium,
  link: 'https://medium.com/@n0rush'
}, {
  comp: Figma,
  link: 'https://www.figma.com/'
}]

const Footer = () => {
  const { site: { author }} = themeConfig;
  const allLinks = SOCIAL_LINKS.map(sLink => {
    const { comp: Comp, link } = sLink;
    return <a href={link} target='blank'>
      <Comp />
    </a>;
  });
  return (
    <footer className="flex flex-col items-center">
      <div className="flex space-x-4 mb-4">{ allLinks }</div>
      <div className="text-base text-md font-bold">{`Copyright © ${new Date().getFullYear()} ${author.name}`} </div>
    </footer>
  )
}

export default Footer
