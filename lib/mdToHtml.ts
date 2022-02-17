import { join } from 'path';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';

import rehypePrismPlus from 'rehype-prism-plus';

const root = process.cwd();
// https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = join(
    root,
    'node_modules',
    'esbuild',
    'esbuild.exe'
  );
} else {
  process.env.ESBUILD_BINARY_PATH = join(
    root,
    'node_modules',
    'esbuild',
    'bin',
    'esbuild'
  );
}

export default async function mdToHtml(rawContent: string) {
  const result = await bundleMDX({
    source: rawContent,
    xdmOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrismPlus, { ignoreMissing: true }],
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      };
      return options;
    },
  });
  return result?.code;
  // return rawContent;
}
