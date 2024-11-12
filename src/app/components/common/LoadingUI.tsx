interface LoadingUIProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingUI({ className = '', size = 'md' }: LoadingUIProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-full',
    lg: 'h-full',
  };

  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2',
  };

  return (
    <div
      className={`common-bg common-border-radius flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <div className="flex items-center gap-1">
        <div className={`${dotSizes[size]} animate-loading-dot rounded-full bg-gray-500`} />
        <div className={`${dotSizes[size]} animation-delay-200 animate-loading-dot rounded-full bg-gray-500`} />
        <div className={`${dotSizes[size]} animation-delay-400 animate-loading-dot rounded-full bg-gray-500`} />
      </div>
    </div>
  );
}
