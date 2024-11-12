'use client';

import { atom } from 'recoil';

export const selectedPriceState = atom({
  key: 'selectedPriceState',
  default: '',
});
