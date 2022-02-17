import { useCallback } from 'react';
import Head from 'next/head';
import { IMdx } from '@interface';
import Renderer from './renderer';
import Header from './header';
import { useRouter } from 'next/router';
interface IProps {
  mdx: IMdx;
  showBackOption: boolean;
}

const Mdx = ({ mdx, showBackOption = true }: IProps) => {
  const { title, content } = mdx;
  const router = useRouter();

  const back = useCallback(
    (e) => {
      e.preventDefault();
      router.back();
    },
    [router]
  );

  return (
    <article className="mb-32 m-auto">
      <Head>
        <title>{title}</title>
      </Head>
      <Header mdx={mdx} />
      <Renderer mdxSource={content} />
      {showBackOption ? (
        <a className="!no-underline italic !font-bold text-3xl" onClick={back}>
          cd ..
        </a>
      ) : null}
    </article>
  );
};

export default Mdx;
