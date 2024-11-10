import { orderBookData } from '../mocks';
import { formatNumber } from '../utils/format';

export default function OrderBook() {
  const currentPrice = '79,613.02';

  return (
    <section className="common-bg common-border-radius flex h-full flex-col">
      {/* Header */}
      <div className="border-inputLine flex items-center justify-between border-b px-4 py-2">
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
        {orderBookData.asks.map(([price, amount], index) => {
          const total = parseFloat(price) * parseFloat(amount);
          return (
            <div
              key={`ask-${index}`}
              className="relative grid cursor-pointer grid-cols-3 px-4 py-1 text-xs transition-all duration-300 hover:bg-gray-700"
            >
              {/* Background Bar */}
              {/* <div
                className="absolute bottom-0 right-0 top-0 bg-pink opacity-10"
                style={{ width: `${(total / 500000) * 100}%` }}
              /> */}
              {/* Content */}
              <div className="relative z-10 text-pink">{formatNumber(parseFloat(price), 2)}</div>
              <div className="relative z-10 text-right">{amount}</div>
              <div className="relative z-10 text-right">{formatNumber(total, 0)}K</div>
            </div>
          );
        })}
      </div>

      {/* Current Price */}
      <div className="flex items-center px-4 py-2">
        <span className="mr-3 text-xl font-bold text-green">{currentPrice}</span>
        <span className="ml-2 text-xs text-textTertiary">${currentPrice}</span>
      </div>

      {/* Bids (Buy Orders) */}
      <div className="h-[340px] flex-1 overflow-auto">
        {orderBookData.bids.map(([price, amount], index) => {
          const total = parseFloat(price) * parseFloat(amount);
          return (
            <div
              key={`bid-${index}`}
              className="hover:bg-background-light relative grid cursor-pointer grid-cols-3 px-4 py-1 text-xs"
            >
              {/* Background Bar */}
              {/* <div
                className="absolute bottom-0 right-0 top-0 bg-green opacity-10"
                style={{ width: `${(total / 500000) * 100}%` }}
              /> */}
              {/* Content */}
              <div className="relative z-10 text-green">{formatNumber(parseFloat(price), 2)}</div>
              <div className="relative z-10 text-right">{amount}</div>
              <div className="relative z-10 text-right">{formatNumber(total, 0)}K</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
