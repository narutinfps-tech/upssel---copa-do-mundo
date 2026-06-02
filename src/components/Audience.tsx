import React from 'react';
import { UserCheck, Sparkles, Star, Quote } from 'lucide-react';

export default function Audience() {
  const targets = [
    { title: 'Professor(a) de inglês', desc: 'Quer poupar tempo no planejamento e surpreender seus alunos de diversas faixas etárias.' },
    { title: 'Professor(a) de reforço escolar', desc: 'Precisa de materiais dinâmicos e ilustrados para prender a atenção em aulas individuais ou pequenos grupos.' },
    { title: 'Dono(a) de perfil educativo', desc: 'Busca materiais bonitos, limpos e de alto padrão para divulgar didáticas excelentes.' },
    { title: 'Criador(a) de atividades para crianças', desc: 'Quer inspiração pedagógica de qualidade para enriquecer sua própria grade infantil.' },
    { title: 'Pai ou mãe que quer praticar inglês', desc: 'Deseja ensinar inglês de forma leve, divertida e totalmente lúdica em casa durante as férias e feriados.' },
    { title: 'Professor(a) com aulas temáticas prontas', desc: 'Deseja focar apenas na aplicação e diversão, sem precisar gastar finais de semana criando slides.' }
  ];

  return (
    <section className="bg-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase text-brand-blue bg-brand-yellow px-3.5 py-1 rounded-full border border-brand-blue inline-block animate-bounceY">
            Público-Alvo
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Esse pack é ideal para você que é:
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Desenvolvemos a linguagem didática de forma modular, permitindo ser adaptado tanto para salas de aula tradicionais quanto para o aprendizado familiar.
          </p>
        </div>

        {/* 3x2 Grid for target audiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, idx) => (
            <div 
              key={idx}
              className="bg-brand-beige/25 p-5 rounded-xl border-2 border-dashed border-slate-200 hover:border-brand-blue hover:bg-white transition-all space-y-3 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-extrabold text-brand-blue">{target.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">{target.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big visual block for the reinforcement phrase */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-brand-blue to-indigo-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-md relative overflow-hidden">
          
          {/* Subtle backgrounds */}
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 translate-y-10" />
          
          <div className="bg-brand-yellow text-brand-blue p-3.5 rounded-full shrink-0">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          <div className="space-y-2 text-center md:text-left flex-1">
            <p className="text-sm sm:text-base font-bold italic leading-relaxed text-brand-yellow">
              "Se você quer deixar suas aulas mais leves, criativas e engajantes, esse material vai te ajudar muito."
            </p>
            <p className="text-[10px] text-slate-350 font-bold uppercase tracking-wider">
              Aproveite a oportunidade única de upsell por tempo limitado.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-black bg-brand-red text-white py-1 px-3 rounded uppercase animate-pulse">
              65% OFF Ativo
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
