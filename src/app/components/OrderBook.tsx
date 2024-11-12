'use client';

// import { orderBookData } from '../mocks';
import { useOrderBook } from '../hooks/queries/useOrderBook';
import { useTradeHistory } from '../hooks/queries/useTradeHistory';
import { formatAmount, formatPrice, formatTotal } from '../utils/format';
import { ErrorUI } from './common/ErrorUI';
import { LoadingUI } from './common/LoadingUI';

export default function OrderBook() {
  const { data: orderBook, isPending, isError, error } = useOrderBook('BTCUSDT');
  const { data: tradeHistory } = useTradeHistory('BTCUSDT');

  // 최근 거래가격 (중앙에 표시될 가격)
  const lastTrade = tradeHistory?.lastPrice;
  const currentPrice = lastTrade?.price || '';
  const isBuyerMaker = lastTrade?.isBuyerMaker;

  if (isPending) {
    return <LoadingUI size="lg" />;
  }

  if (isError) {
    return (
      <ErrorUI
        message={`Error: ${error instanceof Error ? error.message : 'Failed to fetch orderBook data'}`}
        size="lg"
      />
    );
  }

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
          const total = Number(price) * Number(amount);
          return (
            <div
              key={`ask-${index}`}
              className="relative grid cursor-pointer grid-cols-3 px-4 py-0.5 text-xs transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative z-10 font-medium text-pink">{formatPrice(price)}</div>
              <div className="relative z-10 text-right font-medium">{formatAmount(amount)}</div>
              <div className="relative z-10 text-right font-medium">{formatTotal(total)}</div>
            </div>
          );
        })}
      </div>

      {/* Current Price */}
      <div className="flex items-center px-4 py-2">
        <span className={`mr-3 text-xl font-bold ${isBuyerMaker ? 'text-pink' : 'text-green'}`}>
          {formatPrice(currentPrice)}
        </span>
        <span className="ml-2 text-xs text-textTertiary">${formatPrice(currentPrice)}</span>
      </div>

      {/* Bids (Buy Orders) */}
      <div className="h-[340px] flex-1 overflow-auto">
        {orderBook.bids.map(([price, amount], index) => {
          const total = Number(price) * Number(amount);
          return (
            <div
              key={`bid-${index}`}
              className="relative grid cursor-pointer grid-cols-3 px-4 py-0.5 text-xs transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative z-10 font-medium text-green">{formatPrice(price)}</div>
              <div className="relative z-10 text-right font-medium">{formatAmount(amount)}</div>
              <div className="relative z-10 text-right font-medium">{formatTotal(total)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
