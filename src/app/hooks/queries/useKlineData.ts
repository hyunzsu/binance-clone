import { useQuery } from '@tanstack/react-query';
import { getKlineData } from '@/app/services/api';

export const useKlineData = (symbol: string, interval: string) => {
  return useQuery({
    queryKey: ['klineData', symbol, interval],
    queryFn: () => getKlineData(symbol, interval),
    // refetchInterval: 5000, 
  });
};