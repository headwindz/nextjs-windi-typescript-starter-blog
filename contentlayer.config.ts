import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
// TODO: use default locale from theme config
// import themeConfig from './theme.config.js'

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  readingTime: {
    type: 'string',
    resolve: (doc) => readingTime(doc.body.raw).minutes.toFixed(0),
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileDir.replace(/.*\//g, ''),
  },
  locale: {
    type: 'string',
    resolve: (doc) => {
      const sourceFileName = doc._raw.sourceFileName;
      const matches = sourceFileName.match(/.*\.(.*).mdx?$/);
      // return matches ? matches[1] : themeConfig.i18n.defaultLocale;
      return matches ? matches[1] : 'en-US';
    },
  },
};

const REQUIRED_FIELD: any = {
  title: { type: 'string', required: true },
};

const COMMON_FIELDS: any = {
  tags: { type: 'json' },
  date: { type: 'string' },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blogs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...REQUIRED_FIELD,
    ...COMMON_FIELDS,
  },
  computedFields,
}));

const Intro = defineDocumentType(() => ({
  name: 'Intro',
  filePathPattern: 'intro/*.mdx',
  contentType: 'mdx',
  fields: {
    ...REQUIRED_FIELD,
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Intro],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
