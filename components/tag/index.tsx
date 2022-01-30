import Link from 'next/link'

interface IProps {
  href: string;
  title: string;
}


const Tag = ({ href, title }: IProps) => {
  // const [logo, NAV_LINKS] = useMemo(() => {
  //   const { navLinks, site: { logo } } = themeConfig;
  //   return [logo, navLinks];
  // }, []);

  // const links = NAV_LINKS.map(dumpLink);

  return (<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
    <Link href={href}>
      { title }
    </Link>
  </div>
  )
}

export default Tag
