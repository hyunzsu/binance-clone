export interface Market {
  symbol: string; // 거래 쌍 (예: "BTCUSDT")
  lastPrice: string; // 마지막 거래 가격
  priceChange: string; // 가격 변동
  priceChangePercent: string; // 가격 변동 퍼센트
  volume: string; // 24시간 거래량
  quoteVolume: string; // 24시간 거래대금
}

// types/orderbook.ts
export interface OrderBookData {
  lastUpdateId: number;
  bids: [string, string][]; // [price, quantity][]
  asks: [string, string][]; // [price, quantity][]
}

// types/trade.ts
export interface TradeHistoryData {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

// 가격 헤더에 표시되는 데이터 타입
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

// 마켓 리스트에 표시되는 개별 항목 타입
export interface MarketListItem {
  symbol: string;
  lastPrice: string;
  priceChange: string;
  priceChangePercent: string;
  volume: string;
  quoteVolume: string;
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
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}
