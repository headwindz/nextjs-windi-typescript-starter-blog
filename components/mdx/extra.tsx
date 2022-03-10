import { parseISO, format } from 'date-fns';
import type { Blog } from '.contentlayer/generated';

const MdxExtra = ({ date, readingTime }: Blog) => {
  const hasDuration = readingTime != null;
  const hasDate = date != null;
  return (
    <div className="flex space-x-1 items-center text-sm text-gray-400 dark:text-gray-200">
      {hasDate ? (
        <time dateTime={date}>{format(parseISO(date), 'LLL d, yyyy')}</time>
      ) : null}
      {hasDuration ? <div>- 🍸 {readingTime}</div> : null}
    </div>
  );
};

export default MdxExtra;
