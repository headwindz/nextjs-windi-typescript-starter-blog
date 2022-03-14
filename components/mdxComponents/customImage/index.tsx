import Image from 'next/image';
import { ImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

const CustomImage = (props: PropsWithChildren<ImageProps>) => {
  const { alt = 'image', ...restProps } = props;
  return <Image alt={alt} className="rounded-lg" {...restProps} />;
};

export default CustomImage;
