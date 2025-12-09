import React, { useState } from 'react';
import { SemanticElementData } from '../types';
import { Copy, Check } from 'lucide-react';

interface SemanticBlockProps {
  data: SemanticElementData;
  className?: string;
  children?: React.ReactNode;
  isTourActive?: boolean;
}

const SemanticBlock: React.FC<SemanticBlockProps> = ({ data, className = '', children, isTourActive }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(data.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={data.id}
      className={`
        relative group rounded-xl border p-6 md:p-8 transition-all duration-300
        ${data.colorClass} ${data.borderColorClass} ${className}
        ${isTourActive ? '' : 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50'}
      `}
    >
      <div className="flex justify-between items-start mb-5">
        {/* Enhanced Tag Visibility */}
        <span className={`font-mono text-2xl md:text-3xl font-black tracking-tight ${data.textColorClass} drop-shadow-sm`}>
          {data.tag}
        </span>
      </div>
      
      <h3 className={`font-bold text-xl mb-3 ${data.textColorClass}`}>{data.title}</h3>
      <p className={`text-base mb-6 opacity-90 ${data.textColorClass} leading-relaxed`}>{data.description}</p>
      
      <div className="bg-neutral-100 dark:bg-[#191919] rounded-lg p-4 mb-4 backdrop-blur-md border border-neutral-200 dark:border-white/10 relative group/code shadow-sm">
        <pre className={`text-sm font-mono overflow-x-auto whitespace-pre-wrap ${data.textColorClass}`}>
          {data.code}
        </pre>
        
        {/* Copy Button */}
        <button 
          onClick={handleCopy}
          className={`
            absolute top-2 right-2 p-1.5 rounded-md 
            transition-all duration-200
            ${copied 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
              : 'bg-neutral-200 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-white/20 hover:text-neutral-800 dark:hover:text-white opacity-0 group-hover/code:opacity-100'}
          `}
          title="Copia codice"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      {children}
    </div>
  );
};

export default SemanticBlock;