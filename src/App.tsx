import { useState } from 'react';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { MyListsScreen } from './components/screens/MyListsScreen';
import { ListDetailsScreen } from './components/screens/ListDetailsScreen';
import { RewardsScreen } from './components/screens/RewardsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { SettingsScreen } from './components/screens/SettingsScreen';
import { AddItemModal } from './components/modals/AddItemModal';
import { CreateListModal } from './components/modals/CreateListModal';
import { BottomNav } from './components/BottomNav';

type Screen = 
  | 'onboarding' 
  | 'home' 
  | 'lists' 
  | 'list-details' 
  | 'rewards' 
  | 'profile' 
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [activeTab, setActiveTab] = useState<'home' | 'lists' | 'rewards' | 'profile'>('home');
  const [selectedListId, setSelectedListId] = useState<string | null>(null);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);

  const userName = 'Alex';

  // Navigation handlers
  const handleGetStarted = () => {
    setCurrentScreen('home');
    setActiveTab('home');
  };

  const handleTabChange = (tab: 'home' | 'lists' | 'rewards' | 'profile') => {
    setActiveTab(tab);
    
    switch (tab) {
      case 'home':
        setCurrentScreen('home');
        break;
      case 'lists':
        setCurrentScreen('lists');
        break;
      case 'rewards':
        setCurrentScreen('rewards');
        break;
      case 'profile':
        setCurrentScreen('profile');
        break;
    }
  };

  const handleListClick = (listId: string) => {
    setSelectedListId(listId);
    setCurrentScreen('list-details');
  };

  const handleBackToLists = () => {
    setCurrentScreen('lists');
    setActiveTab('lists');
  };

  const handleBackToProfile = () => {
    setCurrentScreen('profile');
    setActiveTab('profile');
  };

  const handleCreateList = () => {
    setShowCreateListModal(true);
  };

  const handleAddItem = () => {
    setShowAddItemModal(true);
  };

  const handleSaveItem = (item: any) => {
    console.log('New item:', item);
    // In a real app, this would save to state/backend
  };

  const handleCreateNewList = (list: any) => {
    console.log('New list:', list);
    // In a real app, this would save to state/backend
    setCurrentScreen('lists');
    setActiveTab('lists');
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onGetStarted={handleGetStarted} />;
      
      case 'home':
        return (
          <HomeScreen
            userName={userName}
            onNavigateToLists={() => handleTabChange('lists')}
            onCreateList={handleCreateList}
            onListClick={handleListClick}
          />
        );
      
      case 'lists':
        return (
          <MyListsScreen
            onCreateList={handleCreateList}
            onListClick={handleListClick}
          />
        );
      
      case 'list-details':
        return (
          <ListDetailsScreen
            listId={selectedListId || ''}
            onBack={handleBackToLists}
            onAddItem={handleAddItem}
          />
        );
      
      case 'rewards':
        return <RewardsScreen />;
      
      case 'profile':
        return (
          <ProfileScreen
            userName={userName}
            onSettings={() => setCurrentScreen('settings')}
          />
        );
      
      case 'settings':
        return <SettingsScreen onBack={handleBackToProfile} />;
      
      default:
        return <HomeScreen 
          userName={userName}
          onNavigateToLists={() => handleTabChange('lists')}
          onCreateList={handleCreateList}
          onListClick={handleListClick}
        />;
    }
  };

  return (
    <div className="relative min-h-screen max-w-md mx-auto bg-[--color-bg-main] shadow-2xl">
      {renderScreen()}
      
      {/* Bottom navigation - hide on onboarding, settings, and list details */}
      {!['onboarding', 'settings', 'list-details'].includes(currentScreen) && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
      
      {/* Modals */}
      <AddItemModal
        isOpen={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
        onSave={handleSaveItem}
      />
      
      <CreateListModal
        isOpen={showCreateListModal}
        onClose={() => setShowCreateListModal(false)}
        onCreate={handleCreateNewList}
      />
    </div>
  );
}
