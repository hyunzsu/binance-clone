interface ErrorUIProps {
  message: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ErrorUI({ message, className = '', size = 'md' }: ErrorUIProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-24',
    lg: 'h-[400px]',
  };

  return (
    <div
      className={`common-bg common-border-radius flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <div className="text-red-500">{message}</div>
    </div>
  );
}
