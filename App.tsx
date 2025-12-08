import React, { useState, useEffect } from 'react';
import SemanticBlock from './components/SemanticBlock';
import BoxModelDemo from './components/BoxModelDemo';
import Tour from './components/Tour';
import { SEMANTIC_DATA, TOUR_STEPS } from './constants';
import { Info, Code2, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Handle Theme Switch
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div id="root-container" className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 font-sans text-slate-900 dark:text-slate-200 transition-colors duration-300">
      
      {/* Controls */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-40 flex flex-col gap-3 items-end">
        <button
          onClick={() => setIsTourOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 hover:shadow-blue-500/40 dark:hover:shadow-blue-900/40 transition-all duration-300 flex items-center gap-2 group transform hover:-translate-y-1 border border-blue-400/30"
          aria-label="Avvia Tour Guidato"
        >
          <Info size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline font-semibold">Tour Guidato</span>
        </button>

        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
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
                   <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-emerald-500/20 mt-4 shadow-sm">
                      <p className="text-sm text-emerald-700 dark:text-emerald-300 italic mb-4">"Contenuto dell'articolo..."</p>
                      
                      {/* Inline SPAN example */}
                      <p className="text-base text-slate-600 dark:text-slate-400">
                        Esempio di <span className="inline-block px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200 rounded border border-purple-200 dark:border-purple-500/40 font-mono text-sm cursor-help" title="<span> è un contenitore inline generico">&lt;span&gt;</span> inline nel testo.
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
                 <div className="h-4 bg-violet-300 dark:bg-violet-400/30 rounded w-3/4"></div>
                 <div className="h-4 bg-violet-300 dark:bg-violet-400/30 rounded w-1/2"></div>
                 <div className="h-32 bg-violet-200 dark:bg-violet-400/20 rounded-lg w-full mt-6 border border-violet-300 dark:border-violet-500/20"></div>
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