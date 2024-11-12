import { INTERVALS } from '@/app/constants/tab';

interface TimeIntervalSelectorProps {
  interval: string;
  onIntervalChange: (interval: string) => void;
}

export const TimeIntervalSelector = ({ interval, onIntervalChange }: TimeIntervalSelectorProps) => {
  return (
    <div className="flex gap-2">
      {INTERVALS.map((item) => (
        <button
          key={item.value}
          onClick={() => onIntervalChange(item.value)}
          className={`px-3 py-1 rounded text-xs font-medium ${
            interval === item.value
              ? 'text-textPrimary'
              : 'text-textTertiary hover:text-textPrimary'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};