import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getKlineData } from '@/app/services/api';
import { KlineData } from '@/app/types/type';

const UP_COLOR = '#26a69a';    
const DOWN_COLOR = '#ef5350';

export const useChartData = (symbol: string) => {
 const [interval, setInterval] = useState('4h');

 const { data: klineData, isLoading, error } = useQuery<KlineData[]>({
   queryKey: ['kline', symbol, interval],
   queryFn: () => getKlineData(symbol, interval),
   refetchInterval: 5000,
 });

 const processedData = useMemo(() => {
   if (!klineData) return [];
   
   return klineData.map((item) => {
     const close = parseFloat(item.close);
     const open = parseFloat(item.open);
     const isUp = close >= open;

     return {
       timestamp: item.openTime,
       open,
       high: parseFloat(item.high),
       low: parseFloat(item.low),
       close,
       volume: parseFloat(item.volume),
       isUp,
       candleColor: isUp ? UP_COLOR : DOWN_COLOR,
       fill: isUp ? UP_COLOR : DOWN_COLOR,
       candleData: [open, close],
       wickData: [parseFloat(item.low), parseFloat(item.high)]
     };
   });
 }, [klineData]);

 return {
   data: processedData,
   isLoading,
   error,
   interval,
   setInterval
 };
};