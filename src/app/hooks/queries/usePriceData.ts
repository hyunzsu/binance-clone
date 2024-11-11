import { useQuery } from '@tanstack/react-query';
import { getPriceData } from '@/app/services/api';

export const usePriceData = (symbol: string) => {
  return useQuery({
    queryKey: ['priceData', symbol],
    queryFn: () => getPriceData(symbol),
    refetchInterval: 1000, // 1초마다 갱신
    staleTime: 1000, // 1초 동안은 데이터를 fresh로 취급
  });
};
