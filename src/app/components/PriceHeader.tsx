'use client';

import { usePriceData } from '@/app/hooks/queries/usePriceData';
import { TOKEN_TAGS } from '../constants/tab';
import { LoadingUI } from './common/LoadingUI';
import { ErrorUI } from './common/ErrorUI';

export default function PriceHeader() {
  const { data: priceData, isPending, isError, error } = usePriceData('BTC/USDT');

  if (isPending) {
    return <LoadingUI />;
  }

  if (isError) {
    return (
      <ErrorUI message={`Error: ${error instanceof Error ? error.message : 'Failed to fetch price data'}`} size="md" />
    );
  }

  if (!priceData) return null;

  const isPriceUp = parseFloat(priceData.priceChange) >= 0;

  return (
    <section className="common-bg common-border-radius flex h-full items-center gap-4 px-2 py-1">
      {/* Symbol Section */}
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="hover:text-yellow-400 cursor-pointer text-gray-400 transition-colors"
        >
          <path
            fill="currentColor"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
        <div className="flex flex-col">
          <div className="text-xl font-bold">{priceData.symbol}</div>
          <div className="text-xs text-textTertiary underline underline-offset-1">Bitcoin Price</div>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col">
        <div className="text-xl font-bold text-pink">{priceData.lastPrice}</div>
        <div className="text-xs">${priceData.lastPrice}</div>
      </div>

      {/* 24h Stats */}
      <div className="flex items-center gap-4 text-xs">
        <div className="flex flex-col">
          <span className="mb-1 text-textTertiary">24h Change</span>
          <div className={`flex gap-1 ${isPriceUp ? 'text-green' : 'text-pink'}`}>
            <span>{priceData.priceChange}</span>
            <span>
              {isPriceUp ? '+' : ''}
              {priceData.priceChangePercent}%
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="mb-1 text-textTertiary">24h High</span>
          <span>{priceData.highPrice}</span>
        </div>
        <div className="flex flex-col">
          <span className="mb-1 text-textTertiary">24h Low</span>
          <span>{priceData.lowPrice}</span>
        </div>
        <div className="flex flex-col">
          <span className="mb-1 whitespace-nowrap text-textTertiary">24h Volume(BTC)</span>
          <span>{priceData.volume}</span>
        </div>
        <div className="flex flex-col">
          <span className="mb-1 whitespace-nowrap text-textTertiary">24h Volume(USDT)</span>
          <span>{priceData.quoteVolume}</span>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-col text-xs">
        <span className="mb-1 text-textTertiary">Token Tags</span>
        <div className="flex gap-0.5">
          {TOKEN_TAGS.map((tag) => (
            <div key={tag} className="cursor-pointer rounded bg-customYellow px-1 text-xs text-yellow">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
