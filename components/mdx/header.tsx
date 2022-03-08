import { Tag } from '@arco-design/web-react';
import Link from 'next/link';
import MdxExtra from './extra';
import type { Blog } from '.contentlayer/generated';

interface IProps {
  mdx: Blog;
  // link to redirect to when title is clicked
  link?: string;
}

const dumpTag = (tag: string) => {
  return (
    <Link key={tag} href={`/tags/${tag}`} passHref>
      <Tag color="cyan" className="cursor-pointer">
        {tag}
      </Tag>
    </Link>
  );
};

const Header = ({ mdx, link }: IProps) => {
  const { title, date, tags, readingTime } = mdx;
  const showDateOrDuration = date != null || readingTime != null;
  const hasTags = tags && tags.length > 0;

  const _title = link ? <Link href={link}>{title}</Link> : title;

  const _tags = hasTags ? (
    <div className="space-x-2 mt-2">{tags.map(dumpTag)}</div>
  ) : null;

  const header = (
    <section>
      <div className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        {_title}
      </div>
      {showDateOrDuration && <MdxExtra {...mdx} />}
      {_tags}
    </section>
  );

  return header;
};

export default Header;
