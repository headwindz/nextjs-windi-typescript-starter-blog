import Layout from '@components/layout';
import { GetStaticProps } from 'next';
import { Tag } from '@arco-design/web-react';
import Link from 'next/link';
import { allBlogs } from '.contentlayer/generated';
import type { Blogs } from '.contentlayer/generated';

const Tags = ({ groupedTags }: any) => {
  return (
    <Layout>
      <h1 className="tw-section-title">All Tags</h1>
      <div className="max-w-lg flex flex-wrap space-x-5">
        {Object.keys(groupedTags).map((tagString) => {
          const total = groupedTags[tagString].length;
          return (
            <Link href={`/tags/${tagString}`} key={tagString} passHref>
              <Tag
                size="large"
                className="cursor-pointer !text-xl"
              >{`${tagString} (${total})`}</Tag>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Tags;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;

  const blogs = allBlogs.filter((it) => it.locale === locale);
  const groupedTagsInfo = blogs.reduce(
    (grouped: Record<string, Blogs[]>, blog: Blogs) => {
      const tagsOfBlog = blog.tags || [];
      tagsOfBlog.forEach((tagOfBlog: string) => {
        if (!grouped[tagOfBlog]) {
          grouped[tagOfBlog] = [];
        }
        grouped[tagOfBlog].push(blog);
      });
      return grouped;
    },
    {} as Record<string, Blogs[]>
  );
  return {
    props: { groupedTags: groupedTagsInfo },
  };
};
