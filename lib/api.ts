import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { IMdx } from '@interface';
import themeConfig from '../theme.config';
import readingTime from 'reading-time';

type MdxKeys = Array<keyof IMdx>;

const MD_ROOT_DIR = join(process.cwd(), 'markdown');

/** blogs directory */
const BLOG_ROOT_DIRECTORY = join(MD_ROOT_DIR, 'blogs');

/** notes directory */
// const NOTES_ROOT_DIRECTORY = join(MD_ROOT_DIR, 'notes')

/**
 *
 * @param the path of the directory that contains the markdowns
 * @param locale
 * @returns full path of the markdown file with locale logic
 */
const getFullPathWithLocale = (dirPath: string, locale?: string) => {
  const fileName =
    locale && locale !== themeConfig?.i18n?.defaultLocale
      ? `index.${locale}.md`
      : 'index.md';
  const targetFullPath = join(dirPath, fileName);
  // find the translation
  if (fs.existsSync(targetFullPath)) {
    return targetFullPath;
  }

  // otherwise get default locale
  return join(dirPath, 'index.md');
};

const getItemById =
  (rootDir: string) =>
  (id: string, fields: MdxKeys = [], locale?: string) => {
    const fullPath = getFullPathWithLocale(join(rootDir, id), locale);
    const info = getMdxByPath(fullPath, fields);

    return {
      ...info,
      id,
    };
  };

export const getBlogById = getItemById(BLOG_ROOT_DIRECTORY);
// export const getNoteById = getItemById(NOTES_ROOT_DIRECTORY);

const getAllList =
  (rootDir: string) =>
  (fields: MdxKeys = [], locale?: string) => {
    const listPaths = fs.readdirSync(rootDir);
    const blogs = listPaths
      .map((id) => getItemById(rootDir)(id, fields, locale))
      // sort posts by date in descending order
      .sort((blog1, blog2) => (blog1.date! > blog2.date! ? -1 : 1));
    return blogs;
  };

export const getAllBlogs = getAllList(BLOG_ROOT_DIRECTORY);
// export const getAllNotes = getAllList(NOTES_ROOT_DIRECTORY);

export const getGroupedTagsInfo = (fields: MdxKeys = [], locale?: string) => {
  const allBlogs = getAllBlogs(['tags', ...fields], locale);

  const groupedTagsInfo = allBlogs.reduce(
    (grouped: Record<string, IMdx[]>, blog: IMdx) => {
      const tagsOfBlog = blog.tags || [];
      tagsOfBlog.forEach((tagOfBlog) => {
        if (!grouped[tagOfBlog]) {
          grouped[tagOfBlog] = [];
        }
        grouped[tagOfBlog].push(blog);
      });
      return grouped;
    },
    {} as Record<string, IMdx[]>
  );

  return groupedTagsInfo;
};

export function getIntro(fields: MdxKeys = [], locale?: string) {
  const introDirtPath = getFullPathWithLocale(
    join(MD_ROOT_DIR, 'intro'),
    locale
  );
  return getMdxByPath(introDirtPath, fields);
}

export function getMdxByPath(fileFullPath: string, fields: MdxKeys = []): IMdx {
  const fileContents = fs.readFileSync(fileFullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const info = {} as IMdx;

  fields.forEach((field) => {
    if (field === 'content') {
      info[field] = content;
    }
    if (field === 'duration') {
      const timeStats = readingTime(content, {
        wordsPerMinute: 40,
      });
      info[field] = `${timeStats.minutes.toFixed(0)}min`;
    }
    if (data[field] != null) {
      info[field] = data[field];
    }
  });

  return info;
}
