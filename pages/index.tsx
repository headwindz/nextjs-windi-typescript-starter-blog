import Layout from '@components/layout';
import Mdx from '@components/mdx';
import { IMdx } from '@interface';
import { GetStaticProps } from 'next';
import { allIntros } from '.contentlayer/generated';
import mdToHtml from '@lib/mdToHtml';

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
  const intro = allIntros.filter((it) => it.locale === locale)[0];
  // const intro = getIntro(['title', 'date', 'content'], locale);
  return {
    props: {
      intro: {
        ...intro,
        content: await mdToHtml(intro.body.raw),
      },
    },
  };
};
