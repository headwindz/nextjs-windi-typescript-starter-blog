import { useMDXComponent } from 'next-contentlayer/hooks';
import mdxComponents from '@components/mdxComponents';

const Renderer = ({ mdxSource }: any) => {
  const Component = useMDXComponent(mdxSource);

  return <Component components={mdxComponents} />;
};

export default Renderer;
