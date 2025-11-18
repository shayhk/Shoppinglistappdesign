import { ButtonPrimary } from '../ui/button-primary';
import { HillsBackground } from '../HillsBackground';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OnboardingScreenProps {
  onGetStarted: () => void;
}

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <HillsBackground />
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between px-6 py-12">
        {/* Logo/App Name */}
        <div className="text-center mt-8">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-[--color-primary-green-dark]">GreenCart</h1>
        </div>
        
        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1760292421911-964db7e9fca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhc2tldCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjM0NjAzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Shopping basket"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center mb-8 max-w-sm">
          <h2 className="text-[--color-text-primary] mb-3">Make shopping fun again</h2>
          <p className="text-[--color-text-secondary] mb-8">
            Create shared shopping lists, track items, and earn rewards.
          </p>
          
          <ButtonPrimary 
            onClick={onGetStarted}
            size="lg"
            className="w-full mb-3"
          >
            Get started
          </ButtonPrimary>
          
          <button className="text-[--color-text-secondary] text-sm underline">
            I already have an account
          </button>
        </div>
        
        {/* Page indicators */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[--color-primary-green]" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
