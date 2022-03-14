import Link from 'next/link';
import { PropsWithChildren } from 'react';

const CustomLink = (props: PropsWithChildren<{ href: string }>) => {
  const { href } = props;
  const isInternalLink = ['/', '#'].some((prefix) => href.startsWith(prefix));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default CustomLink;
