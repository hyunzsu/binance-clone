// @ts-nocheck
'use client'

import { RecoilRoot } from 'recoil'
import type { ReactNode } from 'react'

interface RecoilProviderProps {
  children: ReactNode
}

export default function RecoilProvider({ children }: RecoilProviderProps) {
  return <RecoilRoot>{children}</RecoilRoot>
}