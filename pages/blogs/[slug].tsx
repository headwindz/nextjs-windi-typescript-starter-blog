import Layout from '@components/layout';
import Mdx from '@components/mdx';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { allBlogs } from '.contentlayer/generated';

// blog detail page
const Blog = ({ blog }: any) => {
  return (
    <Layout>
      <Head>
        <title> {blog.title} </title>
      </Head>
      <Mdx mdx={blog} showBackOption={true} />
    </Layout>
  );
};

export default Blog;

type IParams = {
  slug: string;
};

export const getStaticProps: GetStaticProps<any, IParams> = async (context) => {
  const { params, locale } = context;

  const blog = allBlogs.find(
    (it) => it.slug === params!.slug && it.locale === locale
  );

  return {
    props: {
      blog: {
        ...blog,
        content: blog!.body.code,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = allBlogs.map((it) => {
    return {
      params: {
        slug: it.slug,
      },
      locale: it.locale,
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
};
