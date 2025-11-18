import { X, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { ButtonPrimary } from '../ui/button-primary';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: { name: string; quantity: number; category: string; important: boolean }) => void;
  editItem?: { name: string; quantity: number; category: string; important: boolean };
}

export function AddItemModal({ isOpen, onClose, onSave, editItem }: AddItemModalProps) {
  const [name, setName] = useState(editItem?.name || '');
  const [quantity, setQuantity] = useState(editItem?.quantity || 1);
  const [category, setCategory] = useState(editItem?.category || 'Other');
  const [important, setImportant] = useState(editItem?.important || false);

  if (!isOpen) return null;

  const handleSave = () => {
    if (name.trim()) {
      onSave({ name, quantity, category, important });
      onClose();
      // Reset form
      setName('');
      setQuantity(1);
      setCategory('Other');
      setImportant(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h3 className="text-[--color-text-primary]">{editItem ? 'Edit Item' : 'Add Item'}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[--color-text-secondary]" />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Item name */}
          <div className="space-y-2">
            <Label htmlFor="item-name">Item name *</Label>
            <Input
              id="item-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Tomatoes"
              className="rounded-xl"
            />
          </div>
          
          {/* Quantity */}
          <div className="space-y-2">
            <Label>Quantity</Label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Minus className="w-5 h-5 text-[--color-text-secondary]" />
              </button>
              
              <div className="flex-1 text-center text-2xl text-[--color-text-primary]">
                {quantity}
              </div>
              
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-[--color-primary-green] hover:bg-[--color-primary-green-dark] flex items-center justify-center transition-colors"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[--color-text-primary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-green]"
            >
              <option value="Other">Other</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Dairy">Dairy</option>
              <option value="Meat">Meat</option>
              <option value="Bakery">Bakery</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          
          {/* Important toggle */}
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div>
              <h4 className="text-[--color-text-primary] mb-1">Important item</h4>
              <p className="text-sm text-[--color-text-muted]">Mark this item as priority</p>
            </div>
            <Switch 
              checked={important}
              onCheckedChange={setImportant}
            />
          </div>
          
          {/* Image placeholder */}
          <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
            <div className="text-4xl mb-2">📸</div>
            <p className="text-sm text-[--color-text-muted]">
              Image will be fetched automatically
            </p>
          </div>
        </div>
        
        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <ButtonPrimary 
            onClick={handleSave}
            className="w-full"
            disabled={!name.trim()}
          >
            {editItem ? 'Save Changes' : 'Add Item'}
          </ButtonPrimary>
          
          {editItem && (
            <button className="w-full py-3 text-red-500 hover:bg-red-50 rounded-full transition-colors">
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
