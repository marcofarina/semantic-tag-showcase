import React, { useEffect, useState, useCallback } from 'react';
import { TourStep } from '../types';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { createPortal } from 'react-dom';

interface TourProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
}

const Tour: React.FC<TourProps> = ({ steps, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const updatePosition = useCallback(() => {
    const step = steps[currentStep];
    const element = document.getElementById(step.targetId);

    if (element) {
      // Calculate coordinates relative to the document, not the viewport
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      setPosition({
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: rect.width,
        height: rect.height,
      });
      
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    } else {
      // Fallback for missing elements
      setPosition(null);
    }
  }, [currentStep, steps]);

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
    } else {
      setCurrentStep(0);
    }

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, updatePosition]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  const step = steps[currentStep];

  return createPortal(
    <>
      {/* Interaction Blocker (Fixed) */}
      <div className="fixed inset-0 z-[99] cursor-default bg-transparent" aria-hidden="true" />
      
      {/* Highlight Box (Absolute - Scrolls with page) */}
      {position && (
        <div 
          className="absolute z-[100] rounded-xl border-2 border-blue-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.75)] transition-all duration-500 ease-in-out pointer-events-none"
          style={{
            top: position.top - 4,
            left: position.left - 4,
            width: position.width + 8,
            height: position.height + 8,
          }}
        />
      )}

      {/* Tooltip Card (Absolute - Scrolls with page) */}
      <div 
        className="absolute z-[101] w-full max-w-sm px-4 md:px-0 transition-all duration-500 ease-out"
        style={position ? getTooltipStyle(position, step.position) : { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'fixed' }}
      >
        <div className="bg-white dark:bg-notion-card rounded-xl shadow-2xl p-6 border border-neutral-200 dark:border-notion-border animate-in fade-in zoom-in duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{step.title}</h3>
            <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition">
              <X size={20} />
            </button>
          </div>
          
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {step.content}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex gap-1">
               {steps.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-6 bg-blue-500' : 'w-1.5 bg-neutral-200 dark:bg-neutral-700'}`} 
                 />
               ))}
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent text-neutral-500 dark:text-neutral-300 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition shadow-lg shadow-blue-500/20"
              >
                {currentStep === steps.length - 1 ? 'Fine' : 'Avanti'}
                {currentStep !== steps.length - 1 && <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

// Helper to position tooltip relative to the highlight (Document Coords)
function getTooltipStyle(rect: { top: number; left: number; width: number; height: number }, position: TourStep['position']) {
  const gap = 16;
  
  switch (position) {
    case 'top':
      return {
        top: rect.top - gap,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, -100%)'
      };
    case 'bottom':
      return {
        top: rect.top + rect.height + gap,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, 0)'
      };
    case 'left':
      return {
        top: rect.top + rect.height / 2,
        left: rect.left - gap,
        transform: 'translate(-100%, -50%)'
      };
    case 'right':
      return {
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width + gap,
        transform: 'translate(0, -50%)'
      };
    case 'center':
    default:
      return {
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, -50%)'
      };
  }
}

export default Tour;