import { parseISO, format } from 'date-fns';
import type { Blog } from '.contentlayer/generated';

const MdxExtra = ({ date, readingTime }: Blog) => {
  const hasDuration = readingTime != null;
  const isoDateString = parseISO(date!);
  return (
    <div className="flex space-x-1 items-center text-sm text-gray-400 dark:text-gray-200">
      <time dateTime={date}>{format(isoDateString, 'LLL d, yyyy')}</time>
      {hasDuration ? <div>- 🍸 {readingTime}</div> : null}
    </div>
  );
};

export default MdxExtra;
