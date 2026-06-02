import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ZoomIn, Info, Check, Sparkles } from 'lucide-react';

interface ActivityItem {
  id: number;
  title: string;
  url: string;
  badge: string;
  description: string;
}

const row1Items: ActivityItem[] = [
  {
    id: 1,
    title: "Vocabulário de Futebol e Match de Palavras",
    url: "https://i.ibb.co/bSss7Zb/Chat-GPT-Image-1-de-jun-de-2026-21-45-20-9.png",
    badge: "Vocabulário",
    description: "Atividade lúdica para conectar termos de futebol com ilustrações vivas (Soccer Ball, Goal, Whistle)."
  },
  {
    id: 2,
    title: "Cruzadinha Ilustrada da Copa do Mundo",
    url: "https://i.ibb.co/Wp290N32/Chat-GPT-Image-1-de-jun-de-2026-21-45-21-10.png",
    badge: "Crossword",
    description: "Desafio de cruzadinha divertido focado na grafia correta dos termos de esporte e futebol."
  },
  {
    id: 3,
    title: "Atividade Saudável com Cores - Soccer Code",
    url: "https://i.ibb.co/8DXFNnw4/Chat-GPT-Image-1-de-jun-de-2026-21-45-18-7.png",
    badge: "ColorByCode",
    description: "Pinte de acordo com o código numérico para revelar belas ilustrações da Copa do Mundo."
  },
  {
    id: 4,
    title: "Texto de Leitura & Reading Comprehension",
    url: "https://i.ibb.co/j9BFN7b2/Chat-GPT-Image-1-de-jun-de-2026-21-45-17-6.png",
    badge: "Leitura",
    description: "Pequeno texto em inglês sobre a competição mundial acompanhado de perguntas simples de compreensão."
  },
  {
    id: 5,
    title: "Bandeiras dos Campeões do Mundo",
    url: "https://i.ibb.co/k2j8gcxK/Chat-GPT-Image-1-de-jun-de-2026-21-45-16-5.png",
    badge: "Cultura",
    description: "Exercício cultural de pareamento de países campeões e suas respectivas flags em inglês."
  }
];

const row2Items: ActivityItem[] = [
  {
    id: 6,
    title: "Caça-Palavras Word Search Temático",
    url: "https://i.ibb.co/PzgFvyxV/Chat-GPT-Image-1-de-jun-de-2026-21-45-13-3.png",
    badge: "Divertido",
    description: "Encontre as palavras escondidas relacionadas aos uniformes, times e estádio em inglês!"
  },
  {
    id: 7,
    title: "Exercício Cortar e Colar - Stadium Puzzle",
    url: "https://i.ibb.co/PZgqN3Tq/Chat-GPT-Image-1-de-jun-de-2026-21-45-15-4.png",
    badge: "Cut & Paste",
    description: "Atividade de coordenação motora para recortar e parear elementos do gramado de futebol."
  },
  {
    id: 8,
    title: "Produção Escrita - My Favorite Player",
    url: "https://i.ibb.co/6cr08CxQ/Chat-GPT-Image-1-de-jun-de-2026-21-45-13-2.png",
    badge: "Escrita",
    description: "Ficha guiada de preenchimento para os alunos descreverem seu jogador de futebol favorito em inglês."
  },
  {
    id: 9,
    title: "Quiz Rápido de Contagem e Gols",
    url: "https://i.ibb.co/LzQCZvdv/Chat-GPT-Image-1-de-jun-de-2026-21-45-13-1.png",
    badge: "Quiz",
    description: "Combine diversão e matemática somando bolas e gols marcados enquanto pratica numerais."
  }
];

export default function WorldCupCarousel() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  // Duplicating items to make the continuous scroll completely seamless
  const extendedRow1 = [...row1Items, ...row1Items, ...row1Items];
  const extendedRow2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="py-12 bg-white border-y border-brand-blue/10 overflow-hidden relative">
      {/* Absolute Decorative background badges */}
      <div className="absolute top-4 left-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-9xl font-black text-brand-blue">COPA</span>
      </div>
      <div className="absolute bottom-4 right-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-9xl font-black text-brand-red">ENGLISH</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow/15 border border-brand-yellow/30 rounded-full text-xs font-bold text-brand-blue mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-current" />
          <span>AMOSTRA 100% REAL</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight">
          Amostra das Atividades de <span className="text-brand-red font-black underline decoration-brand-yellow decoration-wavy">Copa do Mundo</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium">
          Dê uma olhada na excelência de design do material pedagógico. <span className="text-brand-blue font-bold">Clique em qualquer folha</span> para visualizar em alta definição com zoom interativo.
        </p>
      </div>

      {/* Infinite Scrolling Track 1 (Left Scrolling) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left/Right Fading Shadows overlay for nice transition edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {extendedRow1.map((item, index) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              key={`row1-${item.id}-${index}`}
              onClick={() => setSelectedActivity(item)}
              className="w-[170px] sm:w-[210px] aspect-[1/1.414] bg-brand-beige/25 border border-slate-200 rounded-xl overflow-hidden shadow-xs relative group transition-all shrink-0"
              id={`activity-card-row1-${index}`}
            >
              {/* Card Image */}
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-brand-blue/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] uppercase font-black tracking-wider text-brand-yellow bg-black/30 px-2 py-0.5 rounded self-start mb-1">
                  {item.badge}
                </span>
                <h4 className="text-[11px] sm:text-xs font-bold leading-tight line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-200 mt-2 font-semibold">
                  <ZoomIn className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Clique para Zoom</span>
                </div>
              </div>

              {/* Static tiny badge */}
              <div className="absolute top-2 left-2 bg-brand-blue text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs group-hover:opacity-0 transition-opacity">
                {item.id} / 9
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Track 2 (Right Scrolling - Opposite Direction) */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused] cursor-pointer">
          {extendedRow2.map((item, index) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              key={`row2-${item.id}-${index}`}
              onClick={() => setSelectedActivity(item)}
              className="w-[170px] sm:w-[210px] aspect-[1/1.414] bg-brand-beige/25 border border-slate-200 rounded-xl overflow-hidden shadow-xs relative group transition-all shrink-0"
              id={`activity-card-row2-${index}`}
            >
              {/* Card Image */}
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-brand-blue/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] uppercase font-black tracking-wider text-brand-yellow bg-black/30 px-2 py-0.5 rounded self-start mb-1">
                  {item.badge}
                </span>
                <h4 className="text-[11px] sm:text-xs font-bold leading-tight line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-200 mt-2 font-semibold">
                  <ZoomIn className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Clique para Zoom</span>
                </div>
              </div>

              {/* Static tiny badge */}
              <div className="absolute top-2 left-2 bg-brand-blue text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs group-hover:opacity-0 transition-opacity">
                {item.id} / 9
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide Indicators / Instructions */}
      <div className="flex items-center justify-center gap-6 mt-4 text-[11px] text-slate-500 font-bold">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping" />
          Arraste o mouse sobre as atividades para pausar a rotação
        </span>
      </div>

      {/* Lightbox Modal Overlay for Interactive Zoom view */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedActivity(null)}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-xs cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-[95%] sm:max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row relative cursor-default shadow-2xl border border-white/10"
              id="activity-detail-modal"
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-all shrink-0 z-10 cursor-pointer"
                title="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Container with Zoom */}
              <div className="md:w-[55%] bg-slate-100 p-4 flex items-center justify-center relative overflow-hidden group">
                <img
                  src={selectedActivity.url}
                  alt={selectedActivity.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[50vh] md:max-h-[75vh] object-contain shadow-md rounded-lg max-w-full"
                />
                <div className="absolute bottom-3 left-3 bg-brand-blue/80 text-white text-[10px] px-2.5 py-1 rounded font-bold">
                  Documento PDF Imprimível original
                </div>
              </div>

              {/* Right Column: Information & Guarantee */}
              <div className="md:w-[45%] p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-brand-red text-white py-0.5 px-2 rounded-md font-bold uppercase">
                      {selectedActivity.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-bold font-mono">
                      Pack Atividade #0{selectedActivity.id}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-brand-blue leading-snug">
                    {selectedActivity.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedActivity.description}
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5 mt-2">
                    <span className="text-xs font-bold text-slate-700 block">⭐ Atributos do Material:</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-brand-green shrink-0 font-bold" />
                        <span>Formato A4 PDF Prontinho para Impressão</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-brand-green shrink-0 font-bold" />
                        <span>Ilustrações Vetoriais de altíssima nitidez</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-brand-green shrink-0 font-bold" />
                        <span>Revisado por Especialistas em Língua Inglesa</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-150 mt-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium bg-brand-beige/40 p-2.5 rounded-lg border border-brand-yellow/10">
                    <Info className="w-4 h-4 text-brand-yellow shrink-0 fill-current" />
                    <span>Incluso na adesão imediata do Pack Temático neste pedido.</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedActivity(null);
                      // Scroll to action
                      const offerRect = document.getElementById('offer-section');
                      if (offerRect) {
                        offerRect.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-brand-green hover:bg-brand-green/95 text-white font-extrabold py-3 rounded-xl transition-all shadow-md text-xs sm:text-sm tracking-wider cursor-pointer text-center"
                  >
                    QUERO ESTE COMBINADO DE ATIVIDADES
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
