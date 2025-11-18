import { Coins, Trophy, Target, Sparkles, Lock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function RewardsScreen() {
  const dailyGoals = [
    { id: '1', title: 'Complete 1 list today', reward: 20, completed: false, icon: Target },
    { id: '2', title: 'Buy all fruits on your list', reward: 10, completed: true, icon: Sparkles },
    { id: '3', title: 'Share a list with someone', reward: 15, completed: false, icon: Trophy },
  ];

  const achievements = [
    { id: '1', title: 'First List', description: 'Created your first shopping list', unlocked: true, icon: '🎯' },
    { id: '2', title: 'Shopping Streak', description: 'Completed 7 lists in a row', unlocked: true, icon: '🔥' },
    { id: '3', title: 'Budget Master', description: 'Stayed under budget 10 times', unlocked: false, icon: '💰' },
    { id: '4', title: 'Early Bird', description: 'Completed shopping before 9 AM', unlocked: true, icon: '🌅' },
    { id: '5', title: 'List Champion', description: 'Created 50 shopping lists', unlocked: false, icon: '👑' },
    { id: '6', title: 'Team Player', description: 'Shared 20 lists', unlocked: false, icon: '🤝' },
  ];

  return (
    <div className="min-h-screen pb-24 bg-[--color-bg-main]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="text-[--color-text-primary]">Rewards</h2>
          <Coins className="w-6 h-6 text-[--color-primary-yellow]" />
        </div>
      </div>
      
      <div className="px-6 py-6 space-y-6">
        {/* Coins balance card */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1554134449-8ad2b1dea29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY29pbnMlMjByZXdhcmR8ZW58MXx8fHwxNzYzNDYwMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coins"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Coins className="w-8 h-8 text-white" />
              <p className="text-white/90">Your Balance</p>
            </div>
            <div className="text-5xl text-white mb-2">245</div>
            <p className="text-white/80 text-sm">Earn more by completing lists and tasks</p>
          </div>
        </div>
        
        {/* Daily Goals */}
        <div>
          <h3 className="text-[--color-text-primary] mb-4">Daily Goals</h3>
          <div className="space-y-3">
            {dailyGoals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div 
                  key={goal.id}
                  className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all ${
                    goal.completed 
                      ? 'border-[--color-primary-green] bg-green-50' 
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      goal.completed 
                        ? 'bg-[--color-primary-green] text-white' 
                        : 'bg-gray-100 text-[--color-text-muted]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={goal.completed ? 'text-[--color-primary-green-dark]' : 'text-[--color-text-primary]'}>
                        {goal.title}
                      </h4>
                      <p className="text-sm text-[--color-text-muted]">
                        +{goal.reward} coins
                      </p>
                    </div>
                    
                    {goal.completed && (
                      <div className="text-2xl">✓</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Achievements */}
        <div>
          <h3 className="text-[--color-text-primary] mb-4">Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`rounded-2xl p-4 shadow-md border-2 transition-all ${
                  achievement.unlocked 
                    ? 'bg-white border-transparent' 
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="text-4xl mb-3 relative">
                  {achievement.icon}
                  {!achievement.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 rounded-lg backdrop-blur-sm">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <h4 className="text-sm mb-1 text-[--color-text-primary]">
                  {achievement.title}
                </h4>
                <p className="text-xs text-[--color-text-muted]">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
