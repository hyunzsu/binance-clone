'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// React Query는 내부적으로 queryClient를 사용하여
// 각종 상태를 저장하고, 부가 기능을 제공함
export const queryClient = new QueryClient({});

export default function ReactQueryClientProvider({ children }: React.PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
