import React from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ReferenceLine } from 'recharts';
import { formatPrice } from '@/app/utils/format';
import { CustomTooltip } from './CustomTooltip';

const UP_COLOR = '#26a69a';
const DOWN_COLOR = '#ef5350';

interface CandlestickChartProps {
  data: any[];
  yDomain: [number, number];
}

export const CandlestickChart = ({ data, yDomain }: CandlestickChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3"
          stroke="#363c4e" 
          opacity={0.2}
        />
        <XAxis 
          dataKey="timestamp"
          tickFormatter={(timestamp) => {
            const date = new Date(timestamp);
            return date.getDate();
          }}
          tick={{fill: '#848e9c', fontSize: 11}}
          axisLine={{ stroke: '#363c4e' }}
          tickLine={{ stroke: '#363c4e' }}
        />
        <YAxis 
          orientation="right"
          domain={yDomain}
          tickFormatter={formatPrice}
          tick={{fill: '#848e9c', fontSize: 11}}
          axisLine={{ stroke: '#363c4e' }}
          tickLine={{ stroke: '#363c4e' }}
          width={60}
        />
        <Tooltip content={<CustomTooltip />} />

        {/* 캔들스틱 렌더링 */}
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {/* 캔들 심지 */}
            <ReferenceLine
              segment={[
                { x: index, y: item.low },
                { x: index, y: item.high }
              ]}
              stroke={item.isUp ? UP_COLOR : DOWN_COLOR}
              strokeWidth={1}
            />
            {/* 캔들 바디 */}
            <ReferenceLine
              segment={[
                { x: index, y: item.open },
                { x: index, y: item.close }
              ]}
              stroke={item.isUp ? UP_COLOR : DOWN_COLOR}
              strokeWidth={6}
            />
          </React.Fragment>
        ))}

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
          stroke="#eda432"
          dot={false}
          strokeWidth={1}
        />
        <Line 
          type="monotone"
          dataKey="MA99"
          stroke="#96a3b6"
          dot={false}
          strokeWidth={1}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
