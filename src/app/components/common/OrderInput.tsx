import { formatPrice } from '@/app/utils/format';

interface OrderInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit: string;
  decimals: number;  // optional 제거, 기본값을 컴포넌트에서 설정
}

export default function OrderInput({ label, value, onChange, unit, decimals = 2 }: OrderInputProps) {  // 기본값 설정
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // 빈 값, 숫자, 소수점만 허용
    if (inputValue === '' || /^\d*\.?\d*$/.test(inputValue)) {
      // 소수점 자릿수 제한
      const parts = inputValue.split('.');
      if (parts[1] && parts[1].length > decimals) return;
      
      onChange(inputValue);
    }
  };

  // 표시할 때는 숫자 포맷팅 적용
  const displayValue = value ? formatPrice(value) : '';

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-textTertiary">
        {label}
      </span>
      <input
        type="text"
        value={displayValue}
        onChange={handleChange}
        className="common-bg text-textPrimary w-full rounded-lg border border-inputLine py-2 pl-14 pr-14 text-sm font-bold text-right transition-all duration-300 hover:border-yellow"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-textPrimary font-bold">
        {unit}
      </span>
    </div>
  );
}