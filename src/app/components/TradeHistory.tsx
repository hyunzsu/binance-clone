import { tradeHistoryData } from '../mocks';
import { formatNumber } from '../utils/format';

export default function TradeHistory() {
  return (
    <section className="common-bg common-border-radius flex h-full flex-col">
      {/* Header */}
      <div className="border-colorLine flex items-center justify-between border-b px-4 py-2">
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
        {tradeHistoryData.map((trade) => {
          const time = new Date(trade.time).toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });

          return (
            <div key={trade.id} className="hover:bg-background-light grid grid-cols-3 px-4 py-1 text-xs">
              <div className={`${trade.isBuyerMaker ? 'text-pink' : 'text-green'}`}>
                {formatNumber(parseFloat(trade.price), 2)}
              </div>
              <div className="text-textPrimary text-right">{trade.qty}</div>
              <div className="text-right text-textTertiary">{time}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
