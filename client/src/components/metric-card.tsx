interface MetricCardProps {
  icon?: string;
  image?: string;
  value: number;
  unit: string;
  title: string;
  description: string;
  gradient: string;
  hoverGradient: string;
  testId: string;
  isPrimary?: boolean;
}

export default function MetricCard({ 
  icon,
  image, 
  value, 
  unit, 
  title, 
  description, 
  gradient, 
  hoverGradient, 
  testId 
}: MetricCardProps) {
  const formatValue = (value: number) => {
    if (value === undefined || value === null || isNaN(value)) {
      return "0";
    }
    return value.toLocaleString('de-DE');
  };

  return (
    <div 
      className="glass-card rounded-3xl border border-border hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden group flex flex-col h-full"
      data-testid={testId}
    >
      {image ? (
        <div className="w-full h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            data-testid={`${testId}-image`}
          />
        </div>
      ) : null}
      <div className="p-6 sm:p-8 text-center flex-1 flex flex-col">
        {icon && !image && (
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 animate-icon-pulse group-hover:scale-110 transition-transform duration-300" data-testid={`${testId}-icon`}>
            {icon}
          </div>
        )}
        <div className="mb-3 sm:mb-4">
          <span 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white" 
            style={{ textShadow: '0 2px 15px rgba(76, 175, 80, 0.4)' }}
            data-testid={`${testId}-value`}
          >
            {formatValue(value)}
          </span>
          <span className="text-xl sm:text-2xl font-semibold text-primary ml-2" data-testid={`${testId}-unit`}>{unit}</span>
        </div>
        <h5 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3" data-testid={`${testId}-title`}>{title}</h5>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid={`${testId}-description`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
