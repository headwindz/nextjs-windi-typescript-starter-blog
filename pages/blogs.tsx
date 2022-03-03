import Layout from '@components/layout';
import MdxHeader from '@components/mdx/header';
import { GetStaticProps } from 'next';
import { allBlogs } from '.contentlayer/generated';
import type { Blogs } from '.contentlayer/generated';

// https://dev.to/shakyshane/2-ways-to-create-a-union-from-an-array-in-typescript-1kd6#:~:text=First%20way%20to%20create%20a%20union%20from%20an%20array&text=By%20restricting%20the%20type%20with,derive%20a%20union%20from%20this.&text=It%20turns%20out%20that%20using,of%20all%20possible%20types%20within.
interface IProps {
  blogs: Blogs[];
}

const Blogs = ({ blogs }: IProps) => {
  return (
    <Layout>
      <h1 className="windi-section-title">Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => {
          const { slug } = blog;
          return <MdxHeader key={slug} mdx={blog} link={`/blogs/${slug}`} />;
        })}
      </div>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;

  const blogs = allBlogs.filter((it) => it.locale === locale);
  return {
    props: { blogs },
  };
};
