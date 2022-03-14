import { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { IconCopy } from '@arco-design/web-react/icon';
import { Message } from '@arco-design/web-react';

const Code = (props: PropsWithChildren<any>) => {
  const { children } = props;
  const preRef = useRef<HTMLPreElement>(null);

  const onCopy = async () => {
    if (preRef && preRef.current) {
      await navigator.clipboard.writeText(preRef.current.textContent!);
      Message.success('Copied to clipboard!');
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={onCopy}
        className="absolute right-2 top-2 h-8 w-8 rounded opacity-60 text-gray-400 hidden hover:(opacity-100) group-hover:(block)"
      >
        <IconCopy />
      </button>

      <pre ref={preRef}>{children}</pre>
    </div>
  );
};

export default Code;
