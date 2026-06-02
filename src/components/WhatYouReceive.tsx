import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Flame, ChevronRight, Check } from 'lucide-react';

interface WhatYouReceiveProps {
  worldCupImage: string;
  saoJoaoImage: string;
  onScrollToOffer: () => void;
}

export default function WhatYouReceive({ worldCupImage, saoJoaoImage, onScrollToOffer }: WhatYouReceiveProps) {
  return (
    <section className="bg-white py-16 px-6 border-y-4 border-brand-blue">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black uppercase text-brand-blue bg-brand-yellow px-3.5 py-1 rounded-full border border-brand-blue inline-block">
            Conteúdo do Combo
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Você recebe 2 packs temáticos em um só material
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Materiais didáticos independentes e complementares que cobrem as principais necessidades das datas comemorativas nacionais e internacionais mais adoradas pelos alunos.
          </p>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Copa do Mundo */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-brand-beige/50 rounded-2xl border-3 border-brand-blue overflow-hidden shadow-md flex flex-col justify-between"
          >
            {/* Header / Accent Bar */}
            <div className="bg-brand-blue p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-yellow/20 text-brand-yellow rounded-xl">
                  <Trophy className="w-6 h-6 fill-brand-yellow" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-yellow block">Tema Esportivo</span>
                  <h3 className="text-lg font-extrabold">Atividades de Inglês: Copa do Mundo</h3>
                </div>
              </div>
              <span className="text-xs font-black bg-brand-yellow text-brand-blue px-2.5 py-1 roundedClass border border-brand-blue rounded-full">
                Excelência
              </span>
            </div>

            {/* Inner Content */}
            <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between text-center sm:text-left">
              
              <div className="space-y-4 flex flex-col items-center sm:items-start">
                <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                  Materiais didáticos enriquecidos com vocabulário de futebol internacional, jogos lúdicos, textos de leitura, cruzadinhas temáticas, exercícios de caça-palavras de esporte, atividades lúdicas de colorir com códigos, escrita estimulante e exercícios com foco nas regras e curiosidades da competição mundial.
                </p>

                {/* Sub Bulletpoints */}
                <ul className="space-y-2 text-xs text-slate-700 text-left w-full">
                  {[
                    'Dicionário ilustrado de futebol (Ball, Goal, Trophy, Referee, Whistle)',
                    'Cruzadinhas divertidas e caça-palavras para fixação',
                    'Atividades de leitura com perguntas de compreensão progressiva',
                    'Fichas de pintura "color by number" e desenhos temáticos da Copa'
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Represent (Mockup Generated) */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-2.5 mt-6 flex items-center justify-center">
                <img
                  src={worldCupImage}
                  alt="Amostra Atividades Copa do Mundo de Inglês"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

            </div>
          </motion.div>

          {/* Card 2: São João */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-brand-beige/50 rounded-2xl border-3 border-brand-blue overflow-hidden shadow-md flex flex-col justify-between"
          >
            {/* Header / Accent Bar */}
            <div className="bg-brand-red p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-yellow/20 text-brand-yellow rounded-xl">
                  <Flame className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-yellow block">Tradições Juninas</span>
                  <h3 className="text-lg font-extrabold">Atividades de Inglês: São João</h3>
                </div>
              </div>
              <span className="text-xs font-black bg-brand-yellow text-brand-blue px-2.5 py-1 rounded-full border border-brand-blue">
                Cultura
              </span>
            </div>

            {/* Inner Content */}
            <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between text-center sm:text-left">
              
              <div className="space-y-4 flex flex-col items-center sm:items-start">
                <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                  Atividades lúdicas altamente criativas com vocabulário típico de Festa Junina adaptado para inglês, comidas típicas (popcorn, sweet corn), fogueira tradicional, bandeirinhas coloridas, música folclórica infantil, história das tradições, jogos cognitivos rápidos e ilustrações prontas para colorir e recortar.
                </p>

                {/* Sub Bulletpoints */}
                <ul className="space-y-2 text-xs text-slate-700 text-left w-full">
                  {[
                    'Vocabulário do Arraiá traduzido e ilustrado para fixação visual',
                    'Atividades de "Cut and Paste" para desenvolvimento motor e pareamento',
                    'Labirintos interativos e cartões do Jogo da Memória prontos em PDF',
                    'Cartelas temáticas prontas para Bingo Junino e tabuleiros de jogos de mesa'
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Represent (Mockup Generated) */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-2.5 mt-6 flex items-center justify-center">
                <img
                  src={saoJoaoImage}
                  alt="Amostra Atividades São João de Inglês"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onScrollToOffer}
            className="inline-flex items-center gap-2 text-xs font-black text-brand-blue uppercase hover:underline cursor-pointer"
          >
            Quero garantir esses dois packs agora no meu pedido <ChevronRight className="w-4 h-4 text-brand-red animate-pulse" />
          </button>
        </div>

      </div>
    </section>
  );
}
