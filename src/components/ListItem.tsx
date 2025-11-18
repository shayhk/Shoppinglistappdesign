import { Checkbox } from './ui/checkbox';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ListItemProps {
  id: string;
  name: string;
  quantity?: string;
  checked: boolean;
  imageUrl?: string;
  onToggle: (id: string) => void;
}

export function ListItem({ id, name, quantity, checked, imageUrl, onToggle }: ListItemProps) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
      checked ? 'opacity-50 bg-gray-50' : 'bg-white'
    }`}>
      <Checkbox 
        id={id}
        checked={checked}
        onCheckedChange={() => onToggle(id)}
        className="w-6 h-6 rounded-lg border-2"
      />
      
      {imageUrl && (
        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
          <ImageWithFallback 
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <p className={`${checked ? 'line-through text-[--color-text-muted]' : 'text-[--color-text-primary]'}`}>
          {name}
        </p>
        {quantity && (
          <p className="text-sm text-[--color-text-muted]">{quantity}</p>
        )}
      </div>
    </div>
  );
}
