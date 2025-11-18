import { Plus, Filter } from 'lucide-react';
import { ButtonPrimary } from '../ui/button-primary';
import { ShoppingListCard } from '../ShoppingListCard';
import { useState } from 'react';

interface MyListsScreenProps {
  onCreateList: () => void;
  onListClick: (listId: string) => void;
}

export function MyListsScreen({ onCreateList, onListClick }: MyListsScreenProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');
  
  const lists = [
    { id: '1', title: 'Weekly Groceries', itemsCount: 7, boughtCount: 3, category: 'Home', emoji: '🛒', color: 'bg-gradient-to-br from-green-100 to-emerald-100' },
    { id: '2', title: 'Party Supplies', itemsCount: 12, boughtCount: 0, category: 'Party', emoji: '🎉', color: 'bg-gradient-to-br from-purple-100 to-pink-100' },
    { id: '3', title: 'Pharmacy Run', itemsCount: 5, boughtCount: 5, category: 'Health', emoji: '💊', color: 'bg-gradient-to-br from-blue-100 to-cyan-100' },
    { id: '4', title: 'Home Essentials', itemsCount: 8, boughtCount: 2, category: 'Home', emoji: '🧼', color: 'bg-gradient-to-br from-blue-100 to-indigo-100' },
    { id: '5', title: 'Birthday Cake', itemsCount: 3, boughtCount: 3, category: 'Party', emoji: '🎂', color: 'bg-gradient-to-br from-pink-100 to-rose-100' },
  ];

  const filteredLists = lists.filter(list => {
    if (activeFilter === 'active') return list.boughtCount < list.itemsCount;
    if (activeFilter === 'completed') return list.boughtCount === list.itemsCount;
    return true;
  });

  return (
    <div className="min-h-screen pb-24 bg-[--color-bg-main]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[--color-text-primary]">My Lists</h2>
            <ButtonPrimary variant="icon" onClick={onCreateList}>
              <Plus className="w-5 h-5" />
            </ButtonPrimary>
          </div>
          
          {/* Filter tabs */}
          <div className="flex gap-2">
            {(['all', 'active', 'completed'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-[--color-primary-green] text-white'
                    : 'bg-gray-100 text-[--color-text-secondary] hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lists */}
      <div className="px-6 py-6">
        {filteredLists.length > 0 ? (
          <div className="space-y-4">
            {filteredLists.map((list) => (
              <ShoppingListCard
                key={list.id}
                {...list}
                onClick={() => onListClick(list.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-[--color-text-primary] mb-2">No lists found</h3>
            <p className="text-[--color-text-muted] mb-6">
              {activeFilter === 'all' 
                ? "Create your first shopping list" 
                : `No ${activeFilter} lists`}
            </p>
            <ButtonPrimary onClick={onCreateList}>
              <Plus className="w-5 h-5" />
              Create List
            </ButtonPrimary>
          </div>
        )}
      </div>
    </div>
  );
}
