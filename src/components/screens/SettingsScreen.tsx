import { ArrowLeft, Moon, Sun, Monitor, Bell, Globe, Info, FileText, Shield } from 'lucide-react';
import { Switch } from '../ui/switch';
import { useState } from 'react';

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState({
    shoppingReminder: true,
    sharedListUpdate: false,
  });

  return (
    <div className="min-h-screen pb-24 bg-[--color-bg-main]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="px-6 py-4 flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6 text-[--color-text-primary]" />
          </button>
          <h2 className="text-[--color-text-primary]">Settings</h2>
        </div>
      </div>
      
      <div className="px-6 py-6 space-y-6">
        {/* Appearance */}
        <div>
          <h3 className="text-[--color-text-primary] mb-3">Appearance</h3>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Sun className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <span className="flex-1 text-left text-[--color-text-primary]">Light</span>
              <div className="w-5 h-5 rounded-full border-2 border-[--color-primary-green] bg-[--color-primary-green] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Moon className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <span className="flex-1 text-left text-[--color-text-primary]">Dark</span>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <span className="flex-1 text-left text-[--color-text-primary]">System</span>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
            </button>
          </div>
        </div>
        
        {/* Notifications */}
        <div>
          <h3 className="text-[--color-text-primary] mb-3">Notifications</h3>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 flex items-center gap-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Bell className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <div className="flex-1">
                <h4 className="text-[--color-text-primary]">Shopping reminders</h4>
                <p className="text-sm text-[--color-text-muted]">Get notified before shopping day</p>
              </div>
              <Switch 
                checked={notifications.shoppingReminder}
                onCheckedChange={(checked) => setNotifications({...notifications, shoppingReminder: checked})}
              />
            </div>
            
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Bell className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <div className="flex-1">
                <h4 className="text-[--color-text-primary]">Shared list updates</h4>
                <p className="text-sm text-[--color-text-muted]">When someone updates a shared list</p>
              </div>
              <Switch 
                checked={notifications.sharedListUpdate}
                onCheckedChange={(checked) => setNotifications({...notifications, sharedListUpdate: checked})}
              />
            </div>
          </div>
        </div>
        
        {/* App */}
        <div>
          <h3 className="text-[--color-text-primary] mb-3">App</h3>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[--color-text-primary]">Language</h4>
                <p className="text-sm text-[--color-text-muted]">English</p>
              </div>
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Info className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <span className="flex-1 text-left text-[--color-text-primary]">About</span>
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <span className="flex-1 text-left text-[--color-text-primary]">Privacy policy</span>
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[--color-text-secondary]" />
              </div>
              <span className="flex-1 text-left text-[--color-text-primary]">Terms of service</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
