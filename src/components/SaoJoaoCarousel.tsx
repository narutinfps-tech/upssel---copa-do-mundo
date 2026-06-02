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
    title: "Vocabulário Ilustrado de São João",
    url: "https://i.ibb.co/h11Y7X2s/Chat-GPT-Image-1-de-jun-de-2026-22-02-27-10.png",
    badge: "Vocabulário",
    description: "Aprenda termos festivos juninos tradicionais traduzidos metodologicamente para o inglês (bonfire, corn, straw hat)."
  },
  {
    id: 2,
    title: "Caça-Palavras Junino Word Search",
    url: "https://i.ibb.co/gLjThq7F/Chat-GPT-Image-1-de-jun-de-2026-22-02-26-9.png",
    badge: "Divertido",
    description: "Fabulosa busca guiada pelos elementos típicos das Festas de São João adaptada para a língua inglesa."
  },
  {
    id: 3,
    title: "Cruzadinha Temática de Festas Juninas",
    url: "https://i.ibb.co/KxPJS54p/Chat-GPT-Image-1-de-jun-de-2026-22-02-25-7.png",
    badge: "Gramática",
    description: "Excelente cruzadinha com pistas visuais para estimular a escrita lógica dos termos juninos."
  },
  {
    id: 4,
    title: "Bingo Temático e Flashcards Interativos",
    url: "https://i.ibb.co/Q7dnYSwJ/Chat-GPT-Image-1-de-jun-de-2026-22-02-26-8.png",
    badge: "Dinâmica",
    description: "Recorte, embaralhe e jogue com cartões ilustrativos super coloridos para engajamento total da turma."
  },
  {
    id: 5,
    title: "Pareamento e Reconhecimento de Sombras",
    url: "https://i.ibb.co/KxvNySPK/Chat-GPT-Image-1-de-jun-de-2026-22-02-23-5.png",
    badge: "Cognitivo",
    description: "Identificação lógica e pareamento das silhuetas dos símbolos folclóricos da Festa Junina."
  }
];

const row2Items: ActivityItem[] = [
  {
    id: 6,
    title: "Pintura Guiada por Código Numérico",
    url: "https://i.ibb.co/yBqvQ88m/Chat-GPT-Image-1-de-jun-de-2026-22-02-24-6.png",
    badge: "Arte e Cor",
    description: "Atividade de colorir decifrando os códigos de numerais e cores em inglês para revelar a arte junina."
  },
  {
    id: 7,
    title: "Reading Comprehension sobre São João",
    url: "https://i.ibb.co/PZ9QYVRX/Chat-GPT-Image-1-de-jun-de-2026-22-02-22-4.png",
    badge: "Leitura",
    description: "Mini-texto cultural explicando a maravilhosa tradição brasileira aos alunos com perguntas diretas em inglês."
  },
  {
    id: 8,
    title: "Desafio de Contagem dos Símbolos Juninos",
    url: "https://i.ibb.co/rG8jZyHt/Chat-GPT-Image-1-de-jun-de-2026-22-02-21-3.png",
    badge: "Matemática",
    description: "Desenvolva o raciocínio matemático inicial contando bandeirinhas, milhos e balões multicoloridos."
  },
  {
    id: 9,
    title: "Completar Palavras com Letras Faltantes",
    url: "https://i.ibb.co/5gtfxpHF/Chat-GPT-Image-1-de-jun-de-2026-22-02-20-2.png",
    badge: "Ortografia",
    description: "Exercício de escrita e memorização de alimentos juninos exercitando a fonética inglesa estrutural."
  },
  {
    id: 10,
    title: "Labirinto Junino 'Corn Maze'",
    url: "https://i.ibb.co/Mxz1dRB6/Chat-GPT-Image-1-de-jun-de-2026-22-02-20-1.png",
    badge: "Atencional",
    description: "Leve os simpáticos personagens até as deliciosas espigas de milho resolvendo o labirinto pedagógico."
  }
];

export default function SaoJoaoCarousel() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  // Duplicating items to make the continuous scroll completely seamless
  const extendedRow1 = [...row1Items, ...row1Items, ...row1Items];
  const extendedRow2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="py-12 bg-slate-50 border-y border-brand-blue/10 overflow-hidden relative">
      {/* Absolute Decorative background badges */}
      <div className="absolute top-4 left-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-9xl font-black text-brand-blue">SÃO</span>
      </div>
      <div className="absolute bottom-4 right-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-9xl font-black text-brand-yellow">JOÃO</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/15 border border-brand-green/35 rounded-full text-xs font-bold text-brand-blue mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-green fill-current" />
          <span>AMOSTRA ATIVIDADES JUNINAS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight">
          Amostra das Atividades de <span className="text-brand-green font-black underline decoration-brand-yellow decoration-wavy">São João em Inglês</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium">
          Confira o design apaixonante e didático do bloco junino. <span className="text-brand-green font-bold">Clique em qualquer folha</span> para abrir o zoom detalhado e ver os exercícios.
        </p>
      </div>

      {/* Infinite Scrolling Track 1 (Left Scrolling) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left/Right Fading Shadows overlay for nice transition edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {extendedRow1.map((item, index) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              key={`sj-row1-${item.id}-${index}`}
              onClick={() => setSelectedActivity(item)}
              className="w-[170px] sm:w-[210px] aspect-[1/1.414] bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs relative group transition-all shrink-0"
              id={`sj-activity-card-row1-${index}`}
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
              <div className="absolute top-2 left-2 bg-brand-green text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs group-hover:opacity-0 transition-opacity">
                {item.id} / 10
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Track 2 (Right Scrolling - Opposite Direction) */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused] cursor-pointer">
          {extendedRow2.map((item, index) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              key={`sj-row2-${item.id}-${index}`}
              onClick={() => setSelectedActivity(item)}
              className="w-[170px] sm:w-[210px] aspect-[1/1.414] bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs relative group transition-all shrink-0"
              id={`sj-activity-card-row2-${index}`}
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
              <div className="absolute top-2 left-2 bg-brand-green text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs group-hover:opacity-0 transition-opacity">
                {item.id} / 10
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide Indicators / Instructions */}
      <div className="flex items-center justify-center gap-6 mt-4 text-[11px] text-slate-500 font-bold">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping" />
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
              id="sj-activity-detail-modal"
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
                <div className="absolute bottom-3 left-3 bg-brand-green/80 text-white text-[10px] px-2.5 py-1 rounded font-bold">
                  Documento PDF Imprimível original
                </div>
              </div>

              {/* Right Column: Information & Guarantee */}
              <div className="md:w-[45%] p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-brand-green text-white py-0.5 px-2 rounded-md font-bold uppercase">
                      {selectedActivity.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-bold font-mono">
                      Atividade Junina #0{selectedActivity.id}
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
                        <span>Formato A4 PDF prontinho para impressão</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-brand-green shrink-0 font-bold" />
                        <span>Ilustrações de alta resolução e nítidas</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-brand-green shrink-0 font-bold" />
                        <span>Metodologia Ativa de Ensino Bilíngue</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-150 mt-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium bg-brand-beige/40 p-2.5 rounded-lg border border-brand-yellow/10">
                    <Info className="w-4 h-4 text-brand-yellow shrink-0 fill-current" />
                    <span>Incluso na oferta exclusiva de hoje com São João + Copa do Mundo.</span>
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
                    className="w-full bg-brand-green hover:bg-brand-green/95 text-white font-extrabold py-3 rounded-xl transition-all shadow-md text-xs sm:text-sm tracking-wider cursor-pointer text-center animate-pulse"
                  >
                    GARANTIR ESSE COMBINADO COM % DESCONTO
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
