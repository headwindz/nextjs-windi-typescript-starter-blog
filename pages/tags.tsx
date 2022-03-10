import Layout from '@components/layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { allBlogs } from '.contentlayer/generated';
import type { Blog } from '.contentlayer/generated';

const Tags = ({ groupedTags }: any) => {
  return (
    <Layout>
      <h1 className="tw-section-title">Tags</h1>
      <ul className="max-w-lg">
        {Object.keys(groupedTags).map((tagString) => {
          const total = groupedTags[tagString].length;
          return (
            <li key={tagString}>
              <Link href={`/tags/${tagString}`} passHref>
                <span className="cursor-pointer !text-xl">{`${tagString} (${total})`}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Tags;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;

  const blogs = allBlogs.filter((it) => it.locale === locale);
  const groupedTagsInfo = blogs.reduce(
    (grouped: Record<string, Blog[]>, blog: Blog) => {
      const tagsOfBlog = blog.tags || [];
      tagsOfBlog.forEach((tagOfBlog: string) => {
        if (!grouped[tagOfBlog]) {
          grouped[tagOfBlog] = [];
        }
        grouped[tagOfBlog].push(blog);
      });
      return grouped;
    },
    {} as Record<string, Blog[]>
  );
  return {
    props: { groupedTags: groupedTagsInfo },
  };
};
