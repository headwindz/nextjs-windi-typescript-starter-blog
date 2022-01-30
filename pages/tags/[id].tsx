import Layout from '../../components/layout'
import { getGroupedTagsInfo } from '../../lib/api'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next';
import MdxHeader from '../../components/mdx/header'
import { IMdx } from '../../interface';
import { BLOG_HEADER_KEYS } from '../../constants'

interface IProps {
  tagString: string;
  blogs: IMdx[];
}

const Tag = ({ tagString, blogs }: IProps) => {
  return (
    <Layout>
      <Head>
        <title>{tagString}</title>
      </Head>
      <h1 className="tw-section-title">{ tagString }</h1>
      <div className="space-y-6">
        {
          blogs.map((blog: any) => {
            const { id } = blog;
            return <MdxHeader key={id} mdx={blog} link={`/blogs/${id}`}/>
          })
        }
        </div>
    </Layout>
  )
}

export default Tag;


/**
 * It won't work with typeface declaration
 */
type IParams = {
  id: string;
}

export const getStaticProps: GetStaticProps<any, IParams> = async ({ params, locale}) => {
  const { id } = params!;
  const groupedTagsInfo = getGroupedTagsInfo(BLOG_HEADER_KEYS, locale);
  const blogs = groupedTagsInfo[id];

  return {
    props: {
      tagString: id,
      blogs
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const tagsInfo = getGroupedTagsInfo([]);
  const paths: { params: IParams, locale: string}[] = [];
  (locales || []).forEach((locale: string) => {
    Object.keys(tagsInfo).forEach((tagString: string) => {
      paths.push({
        params: {
          id: tagString
        },
        locale
      })
    })
  })
  return {
    paths: paths,
    fallback: false,
  }
}
