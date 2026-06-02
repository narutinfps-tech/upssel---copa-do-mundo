import React from 'react';
import { X, Check, BrainCircuit, Sparkles, Smile } from 'lucide-react';

export default function Comparison() {
  const aloneItems = [
    'Horas pesquisando ideias na internet',
    'Tempo excessivo montando e formatando atividades',
    'Design nem sempre fica amigável ou atraente para crianças',
    'Risco de repetir exercícios ou ficar sem variedade didática',
    'Mais cansaço e trabalho desnecessário para catalogar tudo'
  ];

  const packItems = [
    'Dezenas de atividades estruturadas e prontinhas',
    'Visual altamente colorido, alegre, escolar e profissional',
    'Temas festivos e engajantes (Copa e São João) que encantam',
    'PDF super organizado e catalogado em pastas',
    'Material pronto para você apenas baixar, imprimir e aplicar'
  ];

  return (
    <section className="bg-white py-16 px-6 border-b-4 border-brand-blue">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black uppercase text-brand-red bg-red-100/60 px-3.5 py-1 rounded-full border border-brand-red inline-block">
            Decisão Inteligente
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Você poderia criar tudo isso do zero...
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Compare o tempo e desgaste necessários para montar duas apostilas complexas sozinho vs. garantir o combo inteiro consolidado agora.
          </p>
        </div>

        {/* 2 Cards Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left block - Alone */}
          <div className="bg-slate-50 border-3 border-slate-300 rounded-3xl p-6 md:p-8 space-y-6 opacity-85 hover:opacity-100 transition-opacity">
            <div className="flex flex-col sm:flex-row items-center gap-3 border-b-2 border-slate-200 pb-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center font-bold shrink-0">
                ✕
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] text-slate-500 uppercase font-black">Processo Desgastante</span>
                <h3 className="text-base sm:text-lg font-black text-slate-700">Criando sozinho</h3>
              </div>
            </div>

            {/* List */}
            <ul className="space-y-4">
              {aloneItems.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-left">
                  <div className="p-0.5 bg-slate-200 text-slate-500 rounded-full shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-slate-605" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer alone note */}
            <p className="text-[11px] text-slate-500 italic pt-4 border-t border-slate-200 text-center font-medium">
              Esgote suas horas de lazer criando slides e folhas adicionais.
            </p>
          </div>

          {/* Right block - With Pack */}
          <div className="bg-brand-beige border-3 border-brand-yellow rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-md">
            
            {/* Stamp sticker */}
            <div className="absolute top-0 right-0 bg-brand-yellow text-brand-blue font-black text-[9px] uppercase px-3.5 py-1 rounded-bl-xl border-l border-b border-brand-blue flex items-center gap-1 z-10">
              <Sparkles className="w-3 h-3 fill-brand-blue" />
              Melhor Opção!
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 border-b-2 border-brand-yellow/30 pb-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">
                ✓
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] text-brand-blue uppercase font-black">Praticidade Máxima</span>
                <h3 className="text-base sm:text-lg font-black text-brand-blue">Com o pack pronto</h3>
              </div>
            </div>

            {/* List */}
            <ul className="space-y-4">
              {packItems.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-left">
                  <div className="p-0.5 bg-brand-green/20 text-brand-green rounded-full shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-green font-extrabold" />
                  </div>
                  <span className="text-xs sm:text-sm text-brand-blue font-extrabold leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer alone note */}
            <p className="text-[11px] text-brand-green font-bold pt-4 border-t border-brand-yellow/30 text-center flex items-center justify-center gap-1">
              <Smile className="w-4 h-4 text-brand-green" /> Economize tempo de final de semana com sua família!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
