import { ImageWithFallback } from './figma/ImageWithFallback';

interface Avatar3DProps {
  variant?: 1 | 2 | 3 | 4;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar3D({ variant = 1, size = 'md', className = '' }: Avatar3DProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  const avatarColors = [
    'bg-gradient-to-br from-green-400 to-emerald-600',
    'bg-gradient-to-br from-blue-400 to-cyan-600',
    'bg-gradient-to-br from-purple-400 to-pink-600',
    'bg-gradient-to-br from-orange-400 to-red-600'
  ];

  return (
    <div className={`${sizeClasses[size]} rounded-full ${avatarColors[variant - 1]} shadow-lg ring-4 ring-white flex items-center justify-center overflow-hidden ${className}`}>
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1740252117012-bb53ad05e370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGF2YXRhciUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NjM0NjAzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="User avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
