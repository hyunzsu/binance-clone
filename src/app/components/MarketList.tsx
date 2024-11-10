'use client';

import { useState } from 'react';
import { MARKET_TABS } from '@/app/constants/tab';
import { Market } from '@/app/types/type';

// mocks/marketData.ts
export const mockMarkets: Market[] = [
  {
    symbol: '1000SATS/USDT',
    lastPrice: '0.0002737',
    priceChange: '0.0000187',
    priceChangePercent: '7.38',
    volume: '123456.78',
    quoteVolume: '34.56',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1000SATS/USDC',
    lastPrice: '0.0002737',
    priceChange: '0.0000187',
    priceChangePercent: '7.38',
    volume: '123456.78',
    quoteVolume: '34.56',
  },
  {
    symbol: '1000SATS/USDT',
    lastPrice: '0.0002737',
    priceChange: '0.0000187',
    priceChangePercent: '7.38',
    volume: '123456.78',
    quoteVolume: '34.56',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1000SATS/USDC',
    lastPrice: '0.0002737',
    priceChange: '0.0000187',
    priceChangePercent: '7.38',
    volume: '123456.78',
    quoteVolume: '34.56',
  },
  {
    symbol: '1000SATS/USDT',
    lastPrice: '0.0002737',
    priceChange: '0.0000187',
    priceChangePercent: '7.38',
    volume: '123456.78',
    quoteVolume: '34.56',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1INCH/USDT',
    lastPrice: '0.2874',
    priceChange: '0.0138',
    priceChangePercent: '5.04',
    volume: '2345678.90',
    quoteVolume: '678.90',
  },
  {
    symbol: '1000SATS/USDC',
    lastPrice: '0.0002737',
    priceChange: '0.0000187',
    priceChangePercent: '7.38',
    volume: '123456.78',
    quoteVolume: '34.56',
  },
];

export default function MarketList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<(typeof MARKET_TABS)[number]>('USDT');

  const filteredMarkets = mockMarkets.filter((market) => {
    const matchesSearch = market.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = market.symbol.endsWith(activeTab);
    return matchesSearch && matchesTab;
  });

  return (
    <div className="common-bg common-border-radius flex h-full max-h-[420px] flex-col">
      {/* Search Section */}
      <div className="px-4 pt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="common-bg border-inputLine text-textPrimary w-full rounded-lg border py-2 pl-10 pr-4 text-sm font-bold transition-all duration-300 hover:border-yellow"
          />
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-textTertiary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-colorLine flex items-center gap-6 border-b px-4">
        <button className="text-textTertiary hover:text-yellow">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              fill="currentColor"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </button>
        {MARKET_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-2 text-sm font-bold ${activeTab === tab ? 'text-textPrimary' : 'text-textTertiary'}`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-1/2 h-1 w-4 -translate-x-1/2 transform bg-yellow" />
            )}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 px-4 py-2 text-xs text-textTertiary">
        <div>Pair</div>
        <div className="text-right">Last Price</div>
        <div className="text-right">24h Change</div>
      </div>

      {/* Market List */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {filteredMarkets.map((market) => (
          <div
            key={market.symbol}
            className="grid cursor-pointer grid-cols-3 px-4 py-1 text-xs transition-all duration-300 hover:bg-gray-700"
          >
            <div className="flex items-center gap-2">
              <button className="hover:text-yellow-400 text-textTertiary">
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </button>
              <span className="text-textPrimary">{market.symbol}</span>
            </div>
            <div className="text-textPrimary text-right">{market.lastPrice}</div>
            <div className={`text-right ${parseFloat(market.priceChangePercent) >= 0 ? 'text-green' : 'text-pink'}`}>
              {parseFloat(market.priceChangePercent) >= 0 ? '+' : ''}
              {market.priceChangePercent}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
