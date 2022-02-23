import Layout from '@components/layout';
import Mdx from '@components/mdx';
import { IMdx } from '@interface';
import { GetStaticProps } from 'next';
import { allIntros } from '.contentlayer/generated';

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
  return {
    props: {
      intro: {
        ...intro,
        content: intro.body.code,
      },
    },
  };
};
