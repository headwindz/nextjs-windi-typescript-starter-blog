import Layout from '@components/layout';
import MdxHeader from '@components/mdx/header';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import type { Blogs } from '.contentlayer/generated';
import { allBlogs } from '.contentlayer/generated';

interface IProps {
  tagString: string;
  blogs: Blogs[];
}

const Tag = ({ tagString, blogs }: IProps) => {
  return (
    <Layout>
      <Head>
        <title>{tagString}</title>
      </Head>
      <h1 className="tw-section-title">{tagString}</h1>
      <div className="space-y-6">
        {blogs.map((blog: any) => {
          const { slug } = blog;
          return <MdxHeader key={slug} mdx={blog} link={`/blogs/${slug}`} />;
        })}
      </div>
    </Layout>
  );
};

export default Tag;

/**
 * It won't work with typeface declaration
 */
type IParams = {
  slug: string;
};

export const getStaticProps: GetStaticProps<any, IParams> = async ({
  params,
  locale,
}) => {
  const { slug } = params!;
  const blogs = allBlogs.filter(
    (it) => it.locale === locale && it.tags.includes(slug)
  );

  return {
    props: {
      tagString: slug,
      blogs,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allPaths = allBlogs
    .map((it) => {
      const tags = it.tags;
      return tags.map((tag: string) => ({
        params: {
          slug: tag,
        },
        locale: it.locale,
      }));
    })
    .flat();
  return {
    paths: allPaths,
    fallback: false,
  };
};
