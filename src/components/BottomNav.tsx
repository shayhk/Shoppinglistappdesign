import { Home, ShoppingCart, Award, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'lists' | 'rewards' | 'profile';
  onTabChange: (tab: 'home' | 'lists' | 'rewards' | 'profile') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lists', label: 'Lists', icon: ShoppingCart },
    { id: 'rewards', label: 'Rewards', icon: Award },
    { id: 'profile', label: 'Profile', icon: User }
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div className="max-w-md mx-auto flex items-center justify-around px-4 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all ${
                isActive 
                  ? 'bg-[--color-primary-green] text-white' 
                  : 'text-[--color-text-muted] hover:text-[--color-text-secondary]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
