/**
 * 심볼 문자열에서 '/' 제거
 * formatSymbol('BTC/USDT') => 'BTCUSDT'
 */
export const formatSymbol = (symbol: string): string => {
  return symbol.replace('/', '');
};

/**
 * 일반 가격 포맷팅
 * - 천 단위 콤마(,) 적용
 * - 소수점 2자리 고정
 */
export const formatPrice = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

/**
 * 24시간 변화율(%) 포맷팅
 * - 소수점 2자리 고정
 * - 양수일 경우 '+' 부호 추가
 * - 음수는 자동으로 '-' 부호 표시
 * - 퍼센트(%) 기호 추가
 */
export const formatPercentage = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  const sign = num >= 0 ? '+' : '';

  return `${sign}${num.toFixed(2)}%`;
};

/**
 * 주문 수량 포맷팅
 * - 소수점 5자리 고정
 */
export const formatAmount = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  return num.toFixed(5); // 콤마 없이 소수점 5자리
};

/**
 * 총량 포맷팅
 * - 1,000 미만: 그대로 표시 (예: 5.33, 8.41)
 * - 1,000 이상 ~ 1,000,000 미만: K 단위 사용 (예: 19.97K, 152.25K)
 * - 1,000,000 이상: M 단위 사용 (해당되는 경우)
 */
export const formatTotal = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(2)}K`;
  }
  return value.toFixed(5);
};
