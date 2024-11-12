// PriceHeader 표시되는 데이터 타입
export interface PriceHeaderData {
  symbol: string;
  lastPrice: string;
  priceChange: string;
  priceChangePercent: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
}

// MarketList 표시되는 데이터 타입
export interface MarketListData {
  symbol: string; // "BTCUSDT"
  displaySymbol: string; // "BTC/USDT"
  baseAsset: string; // "BTC"
  quoteAsset: string; // "USDT"
  lastPrice: string;
  priceChangePercent: string;
}

// 호가창(Order Book) 데이터 타입
export interface OrderBookData {
  lastUpdateId: number;
  bids: [string, string][]; // [가격, 수량]
  asks: [string, string][]; // [가격, 수량]
}

// 체결 내역(Trade History) 개별 항목 타입
export interface TradeHistoryItem {
  id: number;
  price: string;
  qty: string;
  time: number;
  isBuyerMaker: boolean;
}


export interface KlineData {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
  quoteVolume: string;
  trades: number;
  buyBaseVolume: string;
  buyQuoteVolume: string;
  ignored: string;
}