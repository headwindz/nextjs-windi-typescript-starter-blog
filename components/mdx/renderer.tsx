import { useMDXComponent } from 'next-contentlayer/hooks';

const Renderer = ({ mdxSource }: any) => {
  const Component = useMDXComponent(mdxSource);

  return <Component />;
};

export default Renderer;
