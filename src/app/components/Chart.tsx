'use client'

import { useState, useMemo } from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Bar
} from 'recharts';
import { useKlineData } from '@/app/hooks/queries/useKlineData';
import { INTERVALS } from '../constants/tab';

// Constants for colors
const UP_COLOR = '#26a69a';    // Green for price increase
const DOWN_COLOR = '#ef5350';  // Red for price decrease

// X축에 표시될 날짜를 포맷팅하는 함수
const formatXAxis = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // 날짜가 1일인 경우에만 월/일 표시
  if (day === 1) {
    return `${month}/${day}`;
  }
  return day;
};

// 가격을 소수점 2자리까지 포맷팅하는 함수
const formatPrice = (price: number) => {
  return price.toFixed(2);  
};

export default function Chart({ symbol }: { symbol: string }) {
  const [interval, setInterval] = useState('4h');  // 현재 선택된 시간 간격을 관리하는 state (기본값 '4h')
  const { data: klineData, isLoading } = useKlineData(symbol, interval);

  // klineData가 변경될 때마다 차트에 사용될 데이터 가공
  const chartData = useMemo(() => {
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

  // MA7, MA25, MA99 계산
  chartData.forEach((_, i) => {
    if (i >= 6) {
      chartData[i].MA7 = +(
        chartData.slice(i - 6, i + 1).reduce((sum, d) => sum + d.close, 0) / 7
      ).toFixed(2);
    }
    if (i >= 24) {
      chartData[i].MA25 = +(
        chartData.slice(i - 24, i + 1).reduce((sum, d) => sum + d.close, 0) / 25
      ).toFixed(2);
    }
    if (i >= 98) {
      chartData[i].MA99 = +(
        chartData.slice(i - 98, i + 1).reduce((sum, d) => sum + d.close, 0) / 99
      ).toFixed(2);
    }
  });

  // Y축 범위 계산
  const yDomain = useMemo(() => {
    if (!chartData.length) return [0, 0];
    const prices = chartData.flatMap(d => [d.high, d.low]);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    
    const roundedMin = Math.floor(min / 2000) * 2000;
    const roundedMax = Math.ceil(max / 2000) * 2000;
    
    return [roundedMin, roundedMax];
  }, [chartData]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500" />
    </div>;
  }

  return (
    <section className="common-bg common-border-radius h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-colorLine px-4 py-2">
        <div className="text-textPrimary text-sm font-bold">Chart</div>
      </div>
      
      {/* 시간 선택 버튼 */}
      <div className="flex items-center justify-between my-1">
        <div className="flex gap-2">
          {INTERVALS.map((item) => (
            <button
              key={item.value}
              onClick={() => setInterval(item.value)}
              className={`px-3 py-1 rounded text-xs font-medium ${
                interval === item.value
                  ? 'text-textPrimary'
                  : 'text-textTertiary hover:text-textPrimary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 차트 영역 */}
      <div className="h-[calc(100%-60px)] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3"
              stroke="#363c4e" 
              opacity={0.2}
            />
            <XAxis 
              dataKey="timestamp"
              tickFormatter={formatXAxis}
              tick={{fill: '#848e9c', fontSize: 11}}
              axisLine={{ stroke: '#363c4e' }}
              tickLine={{ stroke: '#363c4e' }}
              height={20}
              ticks={chartData.filter((_, index) => index % 6 === 0).map(item => item.timestamp)}
              interval={0}
            />
            <YAxis 
              orientation="right"
              domain={yDomain}
              tickFormatter={formatPrice}
              tick={{fill: '#848e9c', fontSize: 11}}
              axisLine={{ stroke: '#363c4e' }}
              tickLine={{ stroke: '#363c4e' }}
              width={60}
              interval={0}  
              tickCount={Math.floor((yDomain[1] - yDomain[0]) / 2000) + 1}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1e2329',
                border: 'none',
                borderRadius: '4px',
                padding: '8px'
              }}
              labelFormatter={(label) => {
                const date = new Date(label);
                return date.toLocaleString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  timeZone: 'UTC',
                  timeZoneName: 'short'
                });
              }}
              formatter={(value: number) => formatPrice(value)}
            />

            {/* 캔들스틱 바디 */}
            <Bar
              dataKey="candleData"
              barSize={6}
              fill={({ isUp }) => isUp ? UP_COLOR : DOWN_COLOR}
            />
            <Bar
              dataKey="wickData"
              barSize={1}
              fill={({ isUp }) => isUp ? UP_COLOR : DOWN_COLOR}
            />
            
            {/* 이동평균선 */}
            <Line 
              type="monotone"
              dataKey="MA7"
              stroke="#f0b90b"
              dot={false}
              strokeWidth={1}
            />
            <Line 
              type="monotone"
              dataKey="MA25"
              stroke="#9f31a9"
              dot={false}
              strokeWidth={1}
            />
            <Line 
              type="monotone"
              dataKey="MA99"
              stroke="#53afaf"
              dot={false}
              strokeWidth={1}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
