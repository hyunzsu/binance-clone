import { MarketListData, OrderBookData, PriceHeaderData, TradeHistoryItem, KlineData, BinanceTickerResponse, Binance24hrTickerResponse, BinanceKlineResponse } from '../types/type'
import { formatSymbol } from '../utils/format'

const BINANCE_API_URL = 'https://api.binance.com/api/v3'

/**
 * 24시간 가격 통계 데이터 조회 - PriceHeader
 */
export const getPriceData = async (symbol: string): Promise<PriceHeaderData> => {
  const response = await fetch(`${BINANCE_API_URL}/ticker/24hr?symbol=${formatSymbol(symbol)}`)
  const data: BinanceTickerResponse = await response.json()

  return {
    symbol,
    lastPrice: data.lastPrice,
    priceChange: data.priceChange,
    priceChangePercent: data.priceChangePercent,
    highPrice: data.highPrice,
    lowPrice: data.lowPrice,
    volume: data.volume,
    quoteVolume: data.quoteVolume,
  }
}

/**
 * 마켓 리스트 데이터 조회 - MarKetList
 * @param quoteAsset - USDT, USDC 등 기준 화폐
 */
export const getMarketList = async (quoteAsset: string): Promise<MarketListData[]> => {
  const response = await fetch(`${BINANCE_API_URL}/ticker/24hr`)
  const data: Binance24hrTickerResponse[] = await response.json()

  return data
    .filter((item) => item.symbol.endsWith(quoteAsset))
    .map((item) => {
      const baseAsset = item.symbol.slice(0, -quoteAsset.length)

      return {
        symbol: item.symbol,
        displaySymbol: `${baseAsset}/${quoteAsset}`,
        baseAsset,
        quoteAsset,
        lastPrice: item.lastPrice,
        priceChangePercent: item.priceChangePercent,
      }
    })
}

/**
 * 호가창 데이터 조회 - OrderBook
 */
export const getOrderBook = async (symbol: string, limit: number = 20): Promise<OrderBookData> => {
  const response = await fetch(`${BINANCE_API_URL}/depth?symbol=${symbol}&limit=${limit}`)
  return await response.json()
}

/**
 * 최근 체결 내역 조회 - TradeHistory
 */
export const getRecentTrades = async (symbol: string, limit: number = 50): Promise<TradeHistoryItem[]> => {
  const response = await fetch(`${BINANCE_API_URL}/trades?symbol=${symbol}&limit=${limit}`)
  return await response.json()
}

/**
 * K라인 데이터 조회
 */
export const getKlineData = async (
  symbol: string,
  interval: string = '1d',
  limit: number = 100
): Promise<KlineData[]> => {
  const response = await fetch(
    `${BINANCE_API_URL}/klines?symbol=${formatSymbol(symbol)}&interval=${interval}&limit=${limit}`
  )
  const data: BinanceKlineResponse = await response.json()
  
  return data.map((item) => ({
    openTime: item[0],
    open: item[1],
    high: item[2],
    low: item[3],
    close: item[4],
    volume: item[5],
    closeTime: item[6]
  }))
}