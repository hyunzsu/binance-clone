import { useMemo } from 'react';

const calculateMA = (data: any[], period: number, key: string) => {
  for(let i = period - 1; i < data.length; i++) {
    const slice = data.slice(i - (period - 1), i + 1);
    const ma = slice.reduce((sum, item) => sum + item.close, 0) / period;
    data[i][key] = +ma.toFixed(2);
  }
};

export const useChartData = (klineData: any[] | undefined) => {
  return useMemo(() => {
    if (!klineData) return [];
    
    // 기본 데이터 변환
    const data = klineData.map((item) => ({
      timestamp: item.openTime,
      open: parseFloat(item.open),
      high: parseFloat(item.high),
      low: parseFloat(item.low),
      close: parseFloat(item.close),
      volume: parseFloat(item.volume),
      // 상승/하락 여부
      isUp: parseFloat(item.close) >= parseFloat(item.open)
    }));

    // 이동평균선 계산
    calculateMA(data, 7, 'MA7');
    calculateMA(data, 25, 'MA25');
    calculateMA(data, 99, 'MA99');

    return data;
  }, [klineData]);
};
