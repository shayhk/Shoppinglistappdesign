import { Plus, Scan, TrendingUp } from 'lucide-react';
import { Avatar3D } from '../Avatar3D';
import { HillsBackground } from '../HillsBackground';
import { ButtonPrimary } from '../ui/button-primary';
import { ShoppingListCard } from '../ShoppingListCard';

interface HomeScreenProps {
  userName: string;
  onNavigateToLists: () => void;
  onCreateList: () => void;
  onListClick: (listId: string) => void;
}

export function HomeScreen({ userName, onNavigateToLists, onCreateList, onListClick }: HomeScreenProps) {
  const recentLists = [
    { id: '1', title: 'Weekly Groceries', itemsCount: 7, boughtCount: 3, category: 'Home', emoji: '🛒', color: 'bg-gradient-to-br from-green-100 to-emerald-100' },
    { id: '2', title: 'Party Supplies', itemsCount: 12, boughtCount: 0, category: 'Party', emoji: '🎉', color: 'bg-gradient-to-br from-purple-100 to-pink-100' },
    { id: '3', title: 'Pharmacy Run', itemsCount: 5, boughtCount: 5, category: 'Health', emoji: '💊', color: 'bg-gradient-to-br from-blue-100 to-cyan-100' },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header with hills */}
      <div className="relative h-64 mb-6">
        <HillsBackground />
        
        <div className="relative z-10 px-6 pt-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[--color-text-primary] mb-1">Good morning, {userName} 👋</h2>
              <p className="text-[--color-text-secondary]">Ready for today's shopping?</p>
            </div>
            <Avatar3D variant={1} size="lg" />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="px-6 space-y-6">
        {/* Today's card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg -mt-12 relative z-20">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-[--color-primary-green]/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[--color-primary-green]" />
            </div>
            <div>
              <p className="text-sm text-[--color-text-muted]">Today's list</p>
              <h3 className="text-[--color-text-primary]">Groceries – 7 items</h3>
            </div>
          </div>
          <div className="mt-3 text-[--color-text-secondary]">
            3 items bought, 4 remaining
          </div>
        </div>
        
        {/* Quick Actions */}
        <div>
          <h3 className="mb-4 text-[--color-text-primary]">Quick Actions</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              onClick={onCreateList}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all min-w-[100px]"
            >
              <div className="w-12 h-12 rounded-full bg-[--color-primary-green] text-white flex items-center justify-center">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm text-[--color-text-primary]">New List</span>
            </button>
            
            <button className="flex-shrink-0 flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all min-w-[100px]">
              <div className="w-12 h-12 rounded-full bg-[--color-secondary-teal] text-white flex items-center justify-center">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm text-[--color-text-primary]">Add Item</span>
            </button>
            
            <button className="flex-shrink-0 flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all min-w-[100px]">
              <div className="w-12 h-12 rounded-full bg-[--color-secondary-orange] text-white flex items-center justify-center">
                <Scan className="w-6 h-6" />
              </div>
              <span className="text-sm text-[--color-text-primary]">Scan</span>
            </button>
          </div>
        </div>
        
        {/* This Week Stats */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 shadow-md border border-yellow-200/50">
          <h3 className="text-[--color-text-primary] mb-4">This Week</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-1">5</div>
              <p className="text-xs text-[--color-text-secondary]">Lists created</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">24</div>
              <p className="text-xs text-[--color-text-secondary]">Items bought</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🪙 85</div>
              <p className="text-xs text-[--color-text-secondary]">Coins earned</p>
            </div>
          </div>
        </div>
        
        {/* Recent Lists */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[--color-text-primary]">Recent Lists</h3>
            <button 
              onClick={onNavigateToLists}
              className="text-sm text-[--color-primary-green] hover:text-[--color-primary-green-dark]"
            >
              View all
            </button>
          </div>
          
          <div className="space-y-3">
            {recentLists.map((list) => (
              <ShoppingListCard
                key={list.id}
                {...list}
                onClick={() => onListClick(list.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
