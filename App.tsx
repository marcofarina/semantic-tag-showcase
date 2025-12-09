import React, { useState, useEffect } from 'react';
import SemanticBlock from './components/SemanticBlock';
import BoxModelDemo from './components/BoxModelDemo';
import Tour from './components/Tour';
import { SEMANTIC_DATA, TOUR_STEPS } from './constants';
import { Info, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  
  // Initialize state based on system preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Effect to apply class to html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Effect to listen to system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div id="root-container" className="min-h-screen bg-slate-50 dark:bg-[#191919] p-6 md:p-12 font-sans text-neutral-900 dark:text-notion-text transition-colors duration-300">
      
      {/* Controls */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-40 flex flex-col gap-3 items-end">
        <button
          onClick={() => setIsTourOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-none hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group transform hover:-translate-y-1 border border-blue-400/30"
          aria-label="Avvia Tour Guidato"
        >
          <Info size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline font-semibold">Tour Guidato</span>
        </button>

        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-notion-card text-neutral-800 dark:text-neutral-200 p-3 rounded-full shadow-lg border border-neutral-200 dark:border-notion-border hover:bg-neutral-100 dark:hover:bg-notion-hover transition-all duration-300"
          aria-label="Cambia Tema"
          title={theme === 'dark' ? 'Passa a Light Mode' : 'Passa a Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8">
        
        {/* Semantic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 min-h-[80vh]">
          
          {/* Header: Full Width */}
          <div className="col-span-1 md:col-span-4">
            <SemanticBlock data={SEMANTIC_DATA.header} isTourActive={isTourOpen} />
          </div>

          {/* Nav: Sidebar on Mobile, Top bar or Side on Desktop */}
          <div className="col-span-1 md:col-span-4">
            <SemanticBlock data={SEMANTIC_DATA.nav} isTourActive={isTourOpen} />
          </div>

          {/* Main Content Area: Spans 3 columns */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-8">
            <SemanticBlock data={SEMANTIC_DATA.main} className="flex-grow flex flex-col" isTourActive={isTourOpen}>
              
              <div className="mt-6 grid grid-cols-1 gap-6">
                {/* Article inside Main */}
                <SemanticBlock data={SEMANTIC_DATA.article} isTourActive={isTourOpen}>
                   <div className="p-6 bg-white dark:bg-notion-card rounded-lg border border-neutral-200 dark:border-notion-border mt-4 shadow-sm">
                      <p className="text-sm text-neutral-500 dark:text-notion-muted italic mb-4">"Contenuto dell'articolo..."</p>
                      
                      {/* Inline SPAN example */}
                      <p className="text-base text-neutral-600 dark:text-neutral-300">
                        Esempio di <span className="inline-block px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200 rounded border border-purple-200 dark:border-purple-500/30 font-mono text-sm cursor-help" title="<span> è un contenitore inline generico">&lt;span&gt;</span> inline nel testo.
                      </p>
                   </div>
                </SemanticBlock>

                {/* Section inside Main */}
                <SemanticBlock data={SEMANTIC_DATA.section} isTourActive={isTourOpen}>
                   {/* Box Model Demo lives inside a Section usually */}
                   <BoxModelDemo />
                </SemanticBlock>
              </div>

            </SemanticBlock>
          </div>

          {/* Aside: Spans 1 column */}
          <div className="col-span-1 md:col-span-1">
            <SemanticBlock data={SEMANTIC_DATA.aside} className="h-full" isTourActive={isTourOpen}>
               <div className="mt-6 space-y-4 opacity-50">
                 <div className="h-4 bg-violet-300 dark:bg-violet-400/20 rounded w-3/4"></div>
                 <div className="h-4 bg-violet-300 dark:bg-violet-400/20 rounded w-1/2"></div>
                 <div className="h-32 bg-violet-200 dark:bg-violet-400/10 rounded-lg w-full mt-6 border border-violet-300 dark:border-violet-500/20"></div>
               </div>
            </SemanticBlock>
          </div>

          {/* Footer: Full Width */}
          <div className="col-span-1 md:col-span-4">
            <SemanticBlock data={SEMANTIC_DATA.footer} isTourActive={isTourOpen} />
          </div>

        </div>
      </div>

      {/* Tour Component */}
      <Tour 
        steps={TOUR_STEPS} 
        isOpen={isTourOpen} 
        onClose={() => setIsTourOpen(false)} 
      />
    </div>
  );
};

export default App;