import { getOrderBook } from '@/app/services/api';
import { useQuery } from '@tanstack/react-query';

export const useOrderBook = (symbol: string) => {
  return useQuery({
    queryKey: ['orderBook', symbol],
    queryFn: () => getOrderBook(symbol),
    refetchInterval: 1000, // 1초마다 갱신
  });
};
