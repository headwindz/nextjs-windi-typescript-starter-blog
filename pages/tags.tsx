import Layout from '../components/layout'
import { getGroupedTagsInfo }  from '../lib/api';
import { GetStaticProps } from 'next';
import { Tag } from '@arco-design/web-react';
import Link from 'next/link';
import { IGroupedTagsInfo } from '../interface'

interface IProps {
  groupedTags: IGroupedTagsInfo<'tags'>;
}

const Tags = ({ groupedTags }: IProps) => {
  return <Layout>
    <h1 className="tw-section-title">All Tags</h1>
    <div className="max-w-lg flex flex-wrap space-x-5">
      {
        Object.keys(groupedTags).map(tagString => {
          const total = groupedTags[tagString].length;
          return <Link href={`/tags/${tagString}`} key={tagString}>
            <Tag size="large" className="cursor-pointer !text-xl">{`${tagString} (${total})`}</Tag>
          </Link>
        })
      }
    </div>
  </Layout>
}

export default Tags;

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const groupedTags = getGroupedTagsInfo([], locale);

  return {
    props: { groupedTags },
  }
}