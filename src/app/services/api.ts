import { MarketListData, OrderBookData, PriceHeaderData, TradeHistoryItem } from '../types/type';
import { formatSymbol } from '../utils/format';

const BINANCE_API_URL = 'https://api.binance.com/api/v3';

/**
 * 24시간 가격 통계 데이터 조회 - PriceHeader
 */
export const getPriceData = async (symbol: string): Promise<PriceHeaderData> => {
  const response = await fetch(`${BINANCE_API_URL}/ticker/24hr?symbol=${formatSymbol(symbol)}`);
  const data = await response.json();

  return {
    symbol,
    lastPrice: data.lastPrice,
    priceChange: data.priceChange,
    priceChangePercent: data.priceChangePercent,
    highPrice: data.highPrice,
    lowPrice: data.lowPrice,
    volume: data.volume,
    quoteVolume: data.quoteVolume,
  };
};

/**
 * 마켓 리스트 데이터 조회 - MarKetList
 * @param quoteAsset - USDT, USDC 등 기준 화폐
 */
export const getMarketList = async (quoteAsset: string): Promise<MarketListData[]> => {
  const response = await fetch(`${BINANCE_API_URL}/ticker/24hr`);
  const data = await response.json();

  return data
    .filter((item: any) => item.symbol.endsWith(quoteAsset))
    .map((item: any) => {
      const baseAsset = item.symbol.slice(0, -quoteAsset.length);

      return {
        symbol: item.symbol, // 원본 심볼 (BTCUSDT)
        displaySymbol: `${baseAsset}/${quoteAsset}`, // 표시용 심볼 (BTC/USDT)
        baseAsset, // 기준 자산 (BTC)
        quoteAsset, // 견적 자산 (USDT)
        lastPrice: item.lastPrice,
        priceChangePercent: item.priceChangePercent,
      };
    });
};

/**
 * 호가창 데이터 조회
 */
export const getOrderBook = async (symbol: string, limit: number = 20): Promise<OrderBookData> => {
  const response = await fetch(`${BINANCE_API_URL}/depth?symbol=${formatSymbol(symbol)}&limit=${limit}`);
  return await response.json();
};

/**
 * 최근 체결 내역 조회
 */
export const getRecentTrades = async (symbol: string, limit: number = 50): Promise<TradeHistoryItem[]> => {
  const response = await fetch(`${BINANCE_API_URL}/trades?symbol=${formatSymbol(symbol)}&limit=${limit}`);
  return await response.json();
};
