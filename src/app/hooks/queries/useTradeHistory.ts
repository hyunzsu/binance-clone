import { getRecentTrades } from '@/app/services/api';
import { useQuery } from '@tanstack/react-query';

export const useTradeHistory = (symbol: string) => {
  return useQuery({
    queryKey: ['tradeHistory', symbol],
    queryFn: () => getRecentTrades(symbol),
    refetchInterval: 1000,
    // 최신 거래가격을 별도로 뽑아내기
    select: (data) => ({
      lastPrice: data[0], // 가장 최근 거래 (OrderBook 중앙에 표시될 가격)
      trades: data, // 전체 거래내역
    }),
  });
};
