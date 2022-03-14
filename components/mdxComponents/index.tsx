import CustomImage from './customImage';
import CustomLink from './customLink';
import Code from './code';

const mdxComponents = {
  Image: CustomImage,
  a: CustomLink,
  pre: Code,
};

export default mdxComponents;
