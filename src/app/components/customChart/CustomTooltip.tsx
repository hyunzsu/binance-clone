import { formatPrice } from '@/app/utils/format';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-[#1e2329] p-2 rounded shadow-lg border-none">
      <p className="text-xs text-gray-400">
        {new Date(label).toLocaleString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC',
          timeZoneName: 'short'
        })}
      </p>
      <p className="text-xs">
        <span>Open: {formatPrice(payload[0]?.payload.open)}</span>
        <span className="ml-2">Close: {formatPrice(payload[0]?.payload.close)}</span>
      </p>
      <p className="text-xs">
        <span>High: {formatPrice(payload[0]?.payload.high)}</span>
        <span className="ml-2">Low: {formatPrice(payload[0]?.payload.low)}</span>
      </p>
    </div>
  );
};