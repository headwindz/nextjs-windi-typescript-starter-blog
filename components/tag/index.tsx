import Link from 'next/link'

interface IProps {
  href: string;
  title: string;
}


const Tag = ({ href, title }: IProps) => {
  return (<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
    <Link href={href}>
      { title }
    </Link>
  </div>
  )
}

export default Tag
