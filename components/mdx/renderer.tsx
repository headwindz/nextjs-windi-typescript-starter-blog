import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

const Renderer = ({ mdxSource }: any) => {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <Component />;
};

export default Renderer;
