import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Trophy, Sparkles, Printer } from 'lucide-react';
import { PricingState } from '../types';

interface HeroSectionProps {
  pricing: PricingState;
  onScrollToOffer: () => void;
  onAddToOrder: () => void;
  orderAdded: boolean;
  heroImage: string;
}

export default function HeroSection({
  pricing,
  onScrollToOffer,
  onAddToOrder,
  orderAdded,
  heroImage
}: HeroSectionProps) {
  return (
    <section className="relative px-6 py-12 md:py-20 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background decorations - playful grid and circles */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#0B2E6D_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
        
        {/* Text Content */}
        <div className="space-y-6 text-center flex flex-col items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-yellow rounded-full shadow-xs mx-auto"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="text-xs font-bold text-brand-blue tracking-wide uppercase flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" /> Oportunidade Única Para Professores de Inglês
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight lg:leading-[1.15] text-center"
          >
            Adicione agora o <span className="text-brand-red underline decoration-brand-yellow decoration-wavy">Pack Atividades Temáticas</span> ao seu pedido
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-2xl font-medium text-center mx-auto"
          >
            Receba atividades prontas, coloridas e criativas com os temas <strong className="text-brand-blue font-extrabold">Copa do Mundo</strong> e <strong className="text-brand-blue font-extrabold">São João</strong> para imprimir e aplicar em sala de aula de inglês de forma imediata.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-slate-600 leading-relaxed max-w-xl text-center mx-auto"
          >
            Ideal para professores que querem aulas mais divertidas, visuais e fáceis de preparar, sem perder horas criando materiais do zero.
          </motion.p>

          {/* Key Quick benefits badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 w-full max-w-lg"
          >
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs text-left">
              <div className="p-1.5 bg-brand-yellow/20 text-brand-blue rounded-lg">
                <Trophy className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="text-xs">
                <p className="font-extrabold text-brand-blue">Pack Copa do Mundo</p>
                <p className="text-slate-500">Vocabulário, jogos e exercícios de futebol</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs text-left">
              <div className="p-1.5 bg-brand-red/10 text-brand-red rounded-lg">
                <Flame className="w-5 h-5 text-brand-red" />
              </div>
              <div className="text-xs">
                <p className="font-extrabold text-brand-blue">Pack São João</p>
                <p className="text-slate-500">Festa Junina adaptada, cruzadinhas, comidas</p>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center w-full max-w-md sm:max-w-xl"
          >
            <a
              href="https://pay.wiapy.com/9rccEpBlqd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-green hover:bg-brand-green/95 text-white font-extrabold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 text-center tracking-wider text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 flex-1 no-underline"
            >
              SIM, QUERO ADICIONAR AO MEU PEDIDO
            </a>

            <button
              onClick={onScrollToOffer}
              className="px-6 py-4 bg-white hover:bg-slate-50 text-brand-blue font-bold rounded-2xl border-2 border-brand-blue transition-colors text-center text-sm cursor-pointer whitespace-nowrap opacity-90 hover:opacity-100"
            >
              Ver Oferta Especial
            </button>
          </motion.div>

          {/* Extra micro-copy */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2 flex-wrap"
          >
            <span className="flex items-center gap-1">
              <Printer className="w-4 h-4 text-brand-blue" /> Arquivos PDF prontos para impressão
            </span>
            <span className="flex items-center gap-1">
              ⭐ Condição exclusiva por apenas R$ {pricing.promoPrice.toFixed(2).replace('.', ',')}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
