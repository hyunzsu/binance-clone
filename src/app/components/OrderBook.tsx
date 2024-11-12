'use client';

// import { orderBookData } from '../mocks';
import { useOrderBook } from '../hooks/queries/useOrderBook';
import { useTradeHistory } from '../hooks/queries/useTradeHistory';
import { formatNumber } from '../utils/format';

export default function OrderBook() {
  const { data: orderBook } = useOrderBook('BTCUSDT');
  const { data: tradeHistory } = useTradeHistory('BTCUSDT');

  // 최근 거래가격 (중앙에 표시될 가격)
  const lastTrade = tradeHistory?.lastPrice;
  const currentPrice = lastTrade?.price || '';
  const isBuyerMaker = lastTrade?.isBuyerMaker;

  if (!orderBook) return null;

  return (
    <section className="common-bg common-border-radius flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-inputLine px-4 py-2">
        <div className="text-textPrimary text-sm font-bold">Order Book</div>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-3 px-4 py-2 text-xs text-textTertiary">
        <div>Price(USDT)</div>
        <div className="text-right">Amount(BTC)</div>
        <div className="text-right">Total</div>
      </div>

      {/* Asks (Sell Orders) */}
      <div className="h-[340px] flex-1 overflow-auto">
        {orderBook.asks.map(([price, amount], index) => {
          const total = parseFloat(price) * parseFloat(amount);
          return (
            <div
              key={`ask-${index}`}
              className="relative grid cursor-pointer grid-cols-3 px-4 py-0.5 text-xs transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative z-10 font-medium text-pink">{formatNumber(parseFloat(price), 2)}</div>
              <div className="relative z-10 text-right font-medium">{amount}</div>
              <div className="relative z-10 text-right font-medium">{formatNumber(total, 0)}K</div>
            </div>
          );
        })}
      </div>

      {/* Current Price */}
      <div className="flex items-center px-4 py-2">
        <span className={`mr-3 text-xl font-bold ${isBuyerMaker ? 'text-pink' : 'text-green'}`}>
          {formatNumber(parseFloat(currentPrice), 2)}
        </span>
        <span className="ml-2 text-xs text-textTertiary">${formatNumber(parseFloat(currentPrice), 2)}</span>
      </div>

      {/* Bids (Buy Orders) */}
      <div className="h-[340px] flex-1 overflow-auto">
        {orderBook.bids.map(([price, amount], index) => {
          const total = parseFloat(price) * parseFloat(amount);
          return (
            <div
              key={`bid-${index}`}
              className="relative grid cursor-pointer grid-cols-3 px-4 py-0.5 text-xs transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative z-10 font-medium text-green">{formatNumber(parseFloat(price), 2)}</div>
              <div className="relative z-10 text-right font-medium">{amount}</div>
              <div className="relative z-10 text-right font-medium">{formatNumber(total, 0)}K</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
