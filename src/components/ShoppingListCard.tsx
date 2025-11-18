import { ShoppingCart, Calendar } from 'lucide-react';

interface ShoppingListCardProps {
  id: string;
  title: string;
  itemsCount: number;
  boughtCount: number;
  category: string;
  emoji?: string;
  color?: string;
  onClick?: () => void;
}

export function ShoppingListCard({
  title,
  itemsCount,
  boughtCount,
  category,
  emoji = '🛒',
  color = 'bg-gradient-to-br from-green-100 to-emerald-100',
  onClick
}: ShoppingListCardProps) {
  return (
    <div
      onClick={onClick}
      className={`${color} rounded-3xl p-5 shadow-md hover:shadow-lg transition-all cursor-pointer border border-white/50`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl">{emoji}</div>
        <span className="px-3 py-1 bg-white/80 rounded-full text-xs text-[--color-text-secondary]">
          {category}
        </span>
      </div>
      
      <h3 className="text-[--color-text-primary] mb-2">{title}</h3>
      
      <div className="flex items-center gap-2 text-sm text-[--color-text-secondary]">
        <ShoppingCart className="w-4 h-4" />
        <span>{itemsCount} items • {boughtCount} bought</span>
      </div>
      
      {/* Progress bar */}
      <div className="mt-3 h-2 bg-white/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[--color-primary-green] rounded-full transition-all"
          style={{ width: `${itemsCount > 0 ? (boughtCount / itemsCount) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
}
