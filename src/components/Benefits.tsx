import React from 'react';
import { Clock, Heart, Sparkles, Calendar, Printer } from 'lucide-react';

export default function Benefits() {
  const benefitItems = [
    {
      id: 1,
      title: 'Economize tempo',
      description: 'Você não precisa passar horas criando atividades do zero no Canva ou Word. O material já está revisado e pronto para uso.',
      icon: <Clock className="w-6 h-6 text-brand-blue" />,
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Aulas mais divertidas',
      description: 'Temas festivos como Copa do Mundo e São João chamam a atenção genuína dos alunos e deixam a sala de aula infinitamente mais leve.',
      icon: <Heart className="w-6 h-6 text-brand-red" />,
      bg: 'bg-red-50'
    },
    {
      id: 3,
      title: 'Material visual e colorido',
      description: 'As atividades foram criadas de forma didática com cores atrativas para as crianças e adolescentes, mas também acompanham versão de economia de tinta.',
      icon: <Sparkles className="w-6 h-6 text-brand-yellow" />,
      bg: 'bg-yellow-50'
    },
    {
      id: 4,
      title: 'Perfeito para datas especiais',
      description: 'Ideal para usar em semanas temáticas escolares, preparativos de festas, revisão de vocabulário ou para aqueles momentos dinâmicos de quebra de rotina.',
      icon: <Calendar className="w-6 h-6 text-brand-green" />,
      bg: 'bg-green-50'
    },
    {
      id: 5,
      title: 'Pronto para imprimir',
      description: 'Você recebe arquivos devidamente organizados em PDF de alta qualidade e com gabaritos completos. É só baixar, enviar para a impressora e aplicar.',
      icon: <Printer className="w-6 h-6 text-slate-700" />,
      bg: 'bg-slate-100'
    }
  ];

  return (
    <section className="bg-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black uppercase text-brand-blue bg-brand-yellow px-3.5 py-1 rounded-full border border-brand-blue inline-block">
            Vantagens do Pack
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Por que adicionar esse pack agora?
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Entenda como este material complementar agiliza sua rotina e aumenta o engajamento dos seus alunos com o inglês.
          </p>
        </div>

        {/* Bento/List Grid spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {benefitItems.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 rounded-2xl border-2 border-brand-blue/15 hover:border-brand-blue hover:shadow-lg transition-all space-y-4 relative group"
            >
              {/* Floating index */}
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200/50 group-hover:text-brand-yellow/50 transition-colors">
                {String(item.id).padStart(2, '0')}
              </span>

              <div className={`p-3 rounded-xl inline-block ${item.bg}`}>
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-brand-blue">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Last 2 items span columns nicely depending on display width */}
          {benefitItems.slice(3, 5).map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 rounded-2xl border-2 border-brand-blue/15 hover:border-brand-blue hover:shadow-lg transition-all space-y-4 relative group md:col-span-1 lg:col-span-1"
            >
              {/* Floating index */}
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-200/50 group-hover:text-brand-yellow/50 transition-colors">
                {String(item.id).padStart(2, '0')}
              </span>

              <div className={`p-3 rounded-xl inline-block ${item.bg}`}>
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-brand-blue">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Prompting Extra Callout Card in the empty spot of 3x2 grid */}
          <div className="bg-brand-blue text-white p-6 rounded-2xl border-3 border-brand-blue shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">Garantia</span>
              <h3 className="text-base font-bold text-brand-yellow">Satisfação Garantida</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Adicione o pack com total segurança. Nosso material é altamente elogiado por mais de 1.400 professores do Brasil inteiro!
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-300 font-bold">
              ★ 4.9/5 estrelas de avaliação dos professores.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
