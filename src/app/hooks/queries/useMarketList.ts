import { useQuery } from '@tanstack/react-query';
import { getMarketList } from '@/app/services/api';
import type { MarketListData } from '@/app/types/type';

export const useMarketList = (quoteAsset: string) => {
  return useQuery<MarketListData[]>({
    queryKey: ['marketList', quoteAsset],
    queryFn: () => getMarketList(quoteAsset),
    refetchInterval: 30000, // 30초마다 갱신
    staleTime: 30000, // 30초 동안 데이터를 fresh로 취급
  });
};
