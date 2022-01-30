
import { parseISO, format } from 'date-fns'
import { IMdx } from '../../interface'

interface IProps {
  date: IMdx['date'];
  duration?: IMdx['duration'];
}

const MdxExtra = ({ date, duration }: IProps) => {
  const hasDuration = duration != null;
  const isoDateString = parseISO(date); 
  return <div className="flex space-x-1 items-center text-sm">
    <time dateTime={date} className="text-pink-500">
      {format(isoDateString, 'LLL d, yyyy')}
    </time>
    { hasDuration ? <div className='text-gray-400'>
      - {duration}
      </div> : null
    }
  </div>
  
}

export default MdxExtra
