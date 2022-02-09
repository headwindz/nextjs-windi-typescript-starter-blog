import Layout from '../components/layout';
import Mdx from '../components/mdx';
import { getIntro } from '../lib/api';
import mdToHtml from '../lib/mdToHtml';
import { IMdx } from '../interface';
import { GetStaticProps } from 'next';

const Index = ({ intro }: { intro: IMdx }) => {
  return (
    <Layout>
      <Mdx mdx={intro} showBackOption={false} />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const intro = getIntro(['title', 'date', 'content'], locale);

  return {
    props: {
      intro: {
        ...intro,
        content: await mdToHtml(intro.content!),
      },
    },
  };
};
