'use client';

import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedPriceState } from '../atoms/tradingAtom';
import OrderInput from './common/OrderInput';

export default function TradingForm() {
  const selectedPrice = useRecoilValue(selectedPriceState);
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');

  useEffect(() => {
    if (selectedPrice) {
      setBuyPrice(selectedPrice);
      setSellPrice(selectedPrice);
    }
  }, [selectedPrice]);

  return (
    <section className="common-bg common-border-radius h-full max-h-[230px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-colorLine px-4 py-2">
        <div className="text-textPrimary text-sm font-bold">Spot</div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Buy form */}
        <div className="space-y-4">
          <OrderInput
            label="Price"
            value={buyPrice}
            onChange={setBuyPrice}
            unit="USDT"
            decimals={2} 
          />
          <OrderInput
            label="Amount"
            value={buyAmount}
            onChange={setBuyAmount}
            unit="BTC"
            decimals={5}  
          />
          <button className="bg-green rounded-lg hover:bg-emerald-600 w-full font-bold text-sm py-2 text-white">
            Log In
          </button>
        </div>

        {/* Sell form */}
        <div className="space-y-4">
          <OrderInput
            label="Price"
            value={sellPrice}
            onChange={setSellPrice}
            unit="USDT"
            decimals={2}
          />
          <OrderInput
            label="Amount"
            value={sellAmount}
            onChange={setSellAmount}
            unit="BTC"
            decimals={5}
          />
          <button className="w-full rounded-lg bg-pink py-2 font-bold text-sm text-white hover:bg-rose-600">
            Log In
          </button>
        </div>
      </div>
    </section>
  );
}