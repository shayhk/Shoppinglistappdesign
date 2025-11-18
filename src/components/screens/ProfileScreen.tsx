import { ChevronRight, User, Settings, Bell, Users, LogOut, Shield } from 'lucide-react';
import { Avatar3D } from '../Avatar3D';

interface ProfileScreenProps {
  userName: string;
  onSettings: () => void;
}

export function ProfileScreen({ userName, onSettings }: ProfileScreenProps) {
  const stats = [
    { label: 'Lists created', value: '42' },
    { label: 'Items completed', value: '387' },
    { label: 'Coins earned', value: '245' },
  ];

  const menuItems = [
    { id: 'edit', label: 'Edit profile', icon: User, onClick: () => {} },
    { id: 'preferences', label: 'Preferences', icon: Settings, onClick: onSettings },
    { id: 'connected', label: 'Connected accounts', icon: Users, onClick: () => {} },
    { id: 'privacy', label: 'Privacy policy', icon: Shield, onClick: () => {} },
  ];

  return (
    <div className="min-h-screen pb-24 bg-[--color-bg-main]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="px-6 py-4">
          <h2 className="text-[--color-text-primary]">Profile</h2>
        </div>
      </div>
      
      <div className="px-6 py-8">
        {/* User info */}
        <div className="flex flex-col items-center mb-8">
          <Avatar3D variant={1} size="xl" className="mb-4" />
          <h2 className="text-[--color-text-primary] mb-1">{userName}</h2>
          <p className="text-sm text-[--color-text-muted]">Member since 2025</p>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-4 shadow-md text-center"
            >
              <div className="text-2xl text-[--color-primary-green] mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-[--color-text-muted]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[--color-primary-green] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="flex-1 text-left text-[--color-text-primary]">
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-[--color-text-muted]" />
              </button>
            );
          })}
          
          {/* Log out */}
          <button className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4 group border-2 border-red-100">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
              <LogOut className="w-5 h-5 text-red-500 group-hover:text-white" />
            </div>
            <span className="flex-1 text-left text-red-500">
              Log out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
