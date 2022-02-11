import Layout from '@components/layout';
import Mdx from '@components/mdx';
import { getAllBlogs, getBlogById } from '@lib/api';
import Head from 'next/head';
import markdownToHtml from '@lib/mdToHtml';
import { GetStaticProps, GetStaticPaths } from 'next';
import { BLOG_HEADER_KEYS } from '@constants';

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
  id: string;
};

export const getStaticProps: GetStaticProps<any, IParams> = async (context) => {
  const { params, locale } = context;
  const blog = getBlogById(
    params!.id,
    [...BLOG_HEADER_KEYS, 'content'],
    locale
  );

  const content = await markdownToHtml(blog.content || '');

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const blogs = getAllBlogs(['id']);
  const paths: { params: { id: string }; locale: string }[] = [];
  (locales || []).forEach((locale: string) => {
    blogs.forEach((blog) => {
      paths.push({
        params: {
          id: blog.id,
        },
        locale,
      });
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
};
