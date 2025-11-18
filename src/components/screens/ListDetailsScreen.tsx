import { ArrowLeft, MoreVertical, Plus, Share2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ListItem } from '../ListItem';
import { ButtonPrimary } from '../ui/button-primary';

interface ListDetailsScreenProps {
  listId: string;
  onBack: () => void;
  onAddItem: () => void;
}

export function ListDetailsScreen({ listId, onBack, onAddItem }: ListDetailsScreenProps) {
  const [items, setItems] = useState([
    { id: '1', name: 'Tomatoes', quantity: '1kg', checked: false, imageUrl: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzYzNDA5Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: '2', name: 'Milk', quantity: '2L', checked: true },
    { id: '3', name: 'Bread', quantity: '1 loaf', checked: false },
    { id: '4', name: 'Eggs', quantity: '12 pcs', checked: true },
    { id: '5', name: 'Chicken breast', quantity: '500g', checked: false },
    { id: '6', name: 'Pasta', quantity: '2 packs', checked: false },
    { id: '7', name: 'Olive oil', quantity: '1 bottle', checked: true },
  ]);

  const handleToggle = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const activeItems = items.filter(item => !item.checked);
  const completedItems = items.filter(item => item.checked);
  const totalItems = items.length;
  const boughtItems = completedItems.length;

  return (
    <div className="min-h-screen pb-24 bg-[--color-bg-main]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6 text-[--color-text-primary]" />
            </button>
            <h2 className="flex-1 text-center text-[--color-text-primary]">Weekly Groceries</h2>
            <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-6 h-6 text-[--color-text-primary]" />
            </button>
          </div>
          
          {/* Tags and summary */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-green-100 text-[--color-primary-green-dark] rounded-full text-xs">
              Supermarket
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
              Family
            </span>
          </div>
          
          <div className="text-sm text-[--color-text-secondary]">
            {totalItems} items • {boughtItems} bought
          </div>
          
          {/* Progress bar */}
          <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[--color-primary-green] rounded-full transition-all duration-300"
              style={{ width: `${(boughtItems / totalItems) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Items list */}
      <div className="px-6 py-6">
        {/* Active items */}
        {activeItems.length > 0 && (
          <div className="mb-6">
            <h3 className="text-[--color-text-primary] mb-3">To Buy ({activeItems.length})</h3>
            <div className="space-y-2">
              {activeItems.map(item => (
                <ListItem
                  key={item.id}
                  {...item}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Completed items */}
        {completedItems.length > 0 && (
          <div>
            <h3 className="text-[--color-text-muted] mb-3">Bought ({completedItems.length})</h3>
            <div className="space-y-2">
              {completedItems.map(item => (
                <ListItem
                  key={item.id}
                  {...item}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom action bar */}
      <div className="fixed bottom-20 left-0 right-0 px-6 pb-4 bg-gradient-to-t from-white via-white to-transparent pt-6">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="p-4 bg-white border-2 border-[--color-primary-green] rounded-full shadow-lg hover:shadow-xl transition-all">
            <Share2 className="w-6 h-6 text-[--color-primary-green]" />
          </button>
          
          <ButtonPrimary 
            onClick={onAddItem}
            className="flex-1"
          >
            <Plus className="w-5 h-5" />
            Add Item
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
