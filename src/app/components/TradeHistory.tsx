'use client';

import { useTradeHistory } from '@/app/hooks/queries/useTradeHistory';
import { formatAmount, formatPrice } from '../utils/format';
import { LoadingUI } from './common/LoadingUI';
import { ErrorUI } from './common/ErrorUI';

export default function TradeHistory() {
  const { data, isPending, isError, error } = useTradeHistory('BTCUSDT');

  if (isPending) {
    return <LoadingUI size="lg" />;
  }

  if (isError) {
    return <ErrorUI  message={`Error: ${error instanceof Error ? error.message : 'Failed to fetch tradeHistory data'}`}
    size="lg" />;
  }

  return (
    <section className="common-bg common-border-radius flex h-full max-h-[344px] flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-colorLine px-4 py-2">
        <div className="text-textPrimary text-sm font-bold">Market Trades</div>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-3 px-4 py-2 text-xs text-textTertiary">
        <div>Price(USDT)</div>
        <div className="text-right">Amount(BTC)</div>
        <div className="text-right">Time</div>
      </div>

      {/* Trade List */}
      <div className="flex-1 overflow-auto">
        {data.trades.map((trade) => {
          const time = new Date(trade.time).toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });

          return (
            <div key={trade.id} className="hover:bg-background-light grid grid-cols-3 px-4 py-1 text-xs">
              <div className={`font-medium ${trade.isBuyerMaker ? 'text-pink' : 'text-green'}`}>
                {formatPrice(trade.price)}
              </div>
              <div className="text-textPrimary text-right font-medium">{formatAmount(trade.qty)}</div>
              <div className="text-right font-medium">{time}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
