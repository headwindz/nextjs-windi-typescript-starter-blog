export interface INavLink {
  title?: string;
  path: string;
}

export interface IMdx {
  id: string;
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
  duration: string;
}

export type IGroupedTagsInfo<T extends keyof IMdx> = Record<
  string,
  Pick<IMdx, T>[]
>;
