import { X } from 'lucide-react';
import { useState } from 'react';
import { ButtonPrimary } from '../ui/button-primary';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface CreateListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (list: { title: string; category: string; emoji: string }) => void;
}

export function CreateListModal({ isOpen, onClose, onCreate }: CreateListModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Home');
  const [selectedEmoji, setSelectedEmoji] = useState('🛒');

  const emojis = ['🛒', '🎉', '💊', '🧼', '🎂', '🍎', '🥖', '🏠', '🎁', '🌟'];
  const categories = ['Home', 'Party', 'Health', 'Groceries', 'Personal', 'Work'];

  if (!isOpen) return null;

  const handleCreate = () => {
    if (title.trim()) {
      onCreate({ title, category, emoji: selectedEmoji });
      onClose();
      // Reset form
      setTitle('');
      setCategory('Home');
      setSelectedEmoji('🛒');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h3 className="text-[--color-text-primary]">Create New List</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[--color-text-secondary]" />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* List name */}
          <div className="space-y-2">
            <Label htmlFor="list-title">List name *</Label>
            <Input
              id="list-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Weekly Groceries"
              className="rounded-xl"
              autoFocus
            />
          </div>
          
          {/* Emoji selection */}
          <div className="space-y-2">
            <Label>Choose an emoji</Label>
            <div className="grid grid-cols-5 gap-2">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-4xl p-3 rounded-xl transition-all ${
                    selectedEmoji === emoji
                      ? 'bg-[--color-primary-green] scale-110 shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          
          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    category === cat
                      ? 'bg-[--color-primary-green] text-white'
                      : 'bg-gray-100 text-[--color-text-secondary] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <ButtonPrimary 
            onClick={handleCreate}
            className="w-full"
            disabled={!title.trim()}
          >
            Create List
          </ButtonPrimary>
          
          <button 
            onClick={onClose}
            className="w-full py-3 text-[--color-text-secondary] hover:bg-gray-100 rounded-full transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
