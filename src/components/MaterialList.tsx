import React, { useState } from 'react';
import { Check, Search, FileCode, Filter, BookOpen } from 'lucide-react';

export default function MaterialList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<'all' | 'english' | 'portuguese'>('all');

  const items = [
    { name: 'Vocabulary activities', tag: 'english' },
    { name: 'Word search', tag: 'english' },
    { name: 'Crossword', tag: 'english' },
    { name: 'Match the pictures', tag: 'english' },
    { name: 'Reading comprehension', tag: 'english' },
    { name: 'True or False', tag: 'english' },
    { name: 'Color by code', tag: 'english' },
    { name: 'Maze activities', tag: 'english' },
    { name: 'Memory cards', tag: 'english' },
    { name: 'Bingo cards', tag: 'english' },
    { name: 'Board game', tag: 'english' },
    { name: 'Cut and paste', tag: 'english' },
    { name: 'Draw and write', tag: 'english' },
    { name: 'Complete the sentences', tag: 'english' },
    { name: 'Festival vocabulary', tag: 'english' },
    { name: 'Soccer vocabulary', tag: 'english' },
    { name: 'Atividades de colorir', tag: 'portuguese' },
    { name: 'Atividades criativas para sala', tag: 'portuguese' }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || 
                       (selectedTag === 'english' && item.tag === 'english') ||
                       (selectedTag === 'portuguese' && item.tag === 'portuguese');
    return matchesSearch && matchesTag;
  });

  return (
    <section className="bg-brand-beige/40 py-16 px-6 border-b-4 border-brand-blue">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border-3 border-brand-blue p-6 md:p-10 shadow-lg relative">
        
        {/* Binder circles simulation for notebook aesthetic */}
        <div className="absolute left-1/2 -top-4 -translate-x-1/2 flex gap-4 bg-transparent">
          {[1, 2, 3, 4, 5].map((c) => (
            <div key={c} className="w-6 h-6 rounded-full bg-brand-blue border-4 border-slate-300 shadow-sm" />
          ))}
        </div>

        {/* Notebook Margins */}
        <div className="absolute left-6 top-0 bottom-0 w-[1.5px] bg-red-300" />

        <div className="pl-6 md:pl-10 space-y-8">
          
          {/* Section title */}
          <div className="space-y-2">
            <span className="text-[10px] bg-brand-blue text-white rounded px-2.5 py-0.5 font-bold uppercase tracking-wider inline-block">
              Índice de Recursos
            </span>
            <h2 className="text-xl sm:text-2.5xl font-extrabold text-brand-blue tracking-tight">
              Dentro do pack você encontra atividades como:
            </h2>
            <p className="text-xs text-slate-500">
              Explore o currículo completo das atividades de Copa do Mundo e São João traduzidas metodologicamente.
            </p>
          </div>

          {/* Clean Interactive search and mini-filter */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar atividade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-xs bg-white text-slate-800 font-medium focus:outline-brand-blue"
              />
            </div>

            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                  selectedTag === 'all' ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
              >
                Todas ({items.length})
              </button>
              <button
                onClick={() => setSelectedTag('english')}
                className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                  selectedTag === 'english' ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
              >
                Em Inglês ({items.filter(i => i.tag === 'english').length})
              </button>
              <button
                onClick={() => setSelectedTag('portuguese')}
                className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                  selectedTag === 'portuguese' ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
              >
                Instruções ({items.filter(i => i.tag === 'portuguese').length})
              </button>
            </div>
          </div>

          {/* Activities Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 py-2 px-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-colors"
              >
                <div className="w-5 h-5 rounded-full border-2 border-brand-green/70 bg-green-50 flex items-center justify-center text-brand-green font-bold shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {item.name}
                </span>
                {item.tag === 'portuguese' && (
                  <span className="text-[9px] bg-brand-yellow/15 text-brand-blue/90 border border-brand-yellow/30 font-bold px-1.5 py-0.5 rounded uppercase">
                    Didática
                  </span>
                )}
              </div>
            ))}
            
            {filteredItems.length === 0 && (
              <div className="col-span-2 py-8 text-center text-xs text-slate-400 font-medium">
                Nenhuma atividade localizada com os termos pesquisados. Tente outro nome!
              </div>
            )}
          </div>

          {/* Bottom highlight text */}
          <div className="p-4 bg-brand-yellow/10 rounded-xl border-2 border-dashed border-brand-yellow/40 text-xs text-slate-700 flex gap-3 items-center">
            <BookOpen className="w-6 h-6 text-brand-blue shrink-0" />
            <p className="font-semibold leading-relaxed">
              Dica: As atividades vêm em duas versões separadas (Colorida para aulas digitais e em Projetor, e Preto e Branco inteligente para impressão econômica de alta tiragem).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
