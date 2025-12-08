import React, { useState } from 'react';
import { Maximize2, Minimize2, Box } from 'lucide-react';

const BoxModelDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="box-model-trigger" className="mt-8 w-full">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2 text-lg">
          <Box size={20} />
          Demo: CSS Box Model
        </h4>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 transition font-medium"
        >
          {isOpen ? (
            <><Minimize2 size={14} /> Chiudi</>
          ) : (
            <><Maximize2 size={14} /> Ispeziona <span className="font-mono">&lt;div&gt;</span></>
          )}
        </button>
      </div>

      <div 
        onClick={() => !isOpen && setIsOpen(true)}
        className={`
          relative transition-all duration-700 ease-in-out cursor-pointer overflow-hidden
          ${isOpen ? 'h-auto bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg dark:shadow-inner' : 'h-32 bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl flex items-center justify-center'}
        `}
      >
        {!isOpen ? (
           <div className="text-center">
             <span className="font-mono text-blue-500 dark:text-blue-400 font-bold text-xl block mb-2">&lt;div&gt;</span>
             <p className="text-base text-slate-500 dark:text-slate-400">Clicca per rivelare il Box Model</p>
           </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 text-center max-w-lg mb-2">
              Il Box Model definisce come viene calcolata la dimensione di un elemento.
              <br/>
              <span className="inline-block mt-2">
                <span className="text-orange-600 dark:text-orange-400 font-bold mx-1">Margin</span> (esterno),
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mx-1">Border</span> (il bordo),
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mx-1">Padding</span> (interno) e
                <span className="text-blue-600 dark:text-blue-400 font-bold mx-1">Content</span>.
              </span>
            </p>

            {/* Visual Representation */}
            <div className="relative text-xs font-mono font-bold select-none w-full max-w-3xl aspect-square sm:aspect-video flex items-center justify-center py-4">
              
              {/* Margin Area (Outer Space) */}
              <div className="w-full h-full bg-orange-100 dark:bg-orange-950/40 border-2 border-dashed border-orange-300 dark:border-orange-700/50 rounded-2xl relative flex items-center justify-center p-8 sm:p-14 shadow-sm transition-all hover:bg-orange-200 dark:hover:bg-orange-900/40 group/margin">
                <span className="absolute top-2 left-3 text-orange-600 dark:text-orange-500 uppercase tracking-wider text-[11px]">Margin</span>
                <span className="absolute top-2 right-3 text-orange-600 dark:text-orange-400 group-hover/margin:opacity-100 opacity-0 transition-opacity bg-orange-100 dark:bg-orange-950 px-2 rounded">Spazio esterno</span>
                
                {/* Border Area (Solid Thickness) */}
                <div className="w-full h-full bg-yellow-400 dark:bg-yellow-600/80 rounded-xl relative flex items-center justify-center p-4 sm:p-5 shadow-sm transition-all hover:bg-yellow-500 dark:hover:bg-yellow-600 group/border">
                  <span className="absolute top-0 left-2 text-yellow-900 dark:text-yellow-100 uppercase tracking-wider text-[10px] -translate-y-full pb-1">Border</span>
                  <span className="absolute top-1 right-2 text-yellow-900 dark:text-yellow-100 text-[10px] opacity-0 group-hover/border:opacity-100 transition-opacity">Spessore Bordo</span>

                  {/* Padding Area */}
                  <div className="w-full h-full bg-emerald-100 dark:bg-emerald-950/60 rounded-lg relative flex items-center justify-center p-8 sm:p-14 shadow-inner transition-all hover:bg-emerald-200 dark:hover:bg-emerald-900/60 group/padding border border-emerald-300/30">
                    <span className="absolute top-2 left-3 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-[11px]">Padding</span>
                    <span className="absolute top-2 right-3 text-emerald-700 dark:text-emerald-400 group-hover/padding:opacity-100 opacity-0 transition-opacity bg-emerald-100 dark:bg-emerald-950 px-2 rounded">Distanza interna</span>

                    {/* Content Area */}
                    <div className="w-full h-full bg-blue-200 dark:bg-blue-900/40 border border-blue-400/30 relative flex flex-col items-center justify-center text-center shadow-sm group/content transition-all hover:bg-blue-300 dark:hover:bg-blue-900/50 min-h-[60px] min-w-[120px] rounded">
                      <div className="flex flex-col items-center justify-center z-10">
                        <span className="text-blue-800 dark:text-blue-300 font-bold text-sm">Content</span>
                        <span className="text-[10px] text-blue-700/70 dark:text-blue-300/70 font-normal px-2 block mt-1">
                          width x height
                        </span>
                      </div>
                      <div className="absolute -bottom-6 text-[10px] text-slate-500 font-normal opacity-0 group-hover/content:opacity-100 transition-opacity whitespace-nowrap bg-white dark:bg-slate-800 px-2 py-0.5 rounded shadow">
                         Il contenuto vero e proprio
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="flex gap-4 sm:gap-6 text-sm flex-wrap justify-center text-slate-600 dark:text-slate-400">
               <div className="flex items-center gap-2"><div className="w-4 h-4 bg-orange-100 dark:bg-orange-900/50 border border-orange-400 dark:border-orange-700 rounded"></div> Margin</div>
               <div className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-400 dark:bg-yellow-600 rounded"></div> Border</div>
               <div className="flex items-center gap-2"><div className="w-4 h-4 bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-400 dark:border-emerald-600 rounded"></div> Padding</div>
               <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-200 dark:bg-blue-900/50 border border-blue-400 dark:border-blue-600 rounded"></div> Content</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxModelDemo;