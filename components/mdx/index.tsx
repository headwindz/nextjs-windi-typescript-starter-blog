import Head from 'next/head'
import { IMdx } from '../../interface';
import MdxHeader from './header';

const Mdx = ({ mdx }: { mdx: IMdx }) => {
  const { title , content } = mdx;

  return (
    <article className="mb-32 m-auto">
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <MdxHeader mdx={mdx} />
      <div className="max-w-2xl mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  )
}

export default Mdx
