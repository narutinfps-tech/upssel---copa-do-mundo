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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-yellow rounded-full shadow-xs"
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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight lg:leading-[1.15]"
          >
            Adicione agora o <span className="text-brand-red underline decoration-brand-yellow decoration-wavy">Pack Atividades Temáticas</span> ao seu pedido
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-2xl font-medium"
          >
            Receba atividades prontas, coloridas e criativas com os temas <strong className="text-brand-blue font-extrabold">Copa do Mundo</strong> e <strong className="text-brand-blue font-extrabold">São João</strong> para imprimir e aplicar em sala de aula de inglês de forma imediata.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-slate-600 leading-relaxed max-w-xl"
          >
            Ideal para professores que querem aulas mais divertidas, visuais e fáceis de preparar, sem perder horas criando materiais do zero.
          </motion.p>

          {/* Key Quick benefits badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2"
          >
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
              <div className="p-1.5 bg-brand-yellow/20 text-brand-blue rounded-lg">
                <Trophy className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="text-xs">
                <p className="font-extrabold text-brand-blue">Pack Copa do Mundo</p>
                <p className="text-slate-500">Vocabulário, jogos e exercícios de futebol</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
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
            className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center"
          >
            {!orderAdded ? (
              <button
                onClick={onAddToOrder}
                className="px-8 py-4 bg-brand-green hover:bg-brand-green/95 text-white font-extrabold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 text-center tracking-wider text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2"
              >
                SIM, QUERO ADICIONAR AO MEU PEDIDO
              </button>
            ) : (
              <div className="px-8 py-4 bg-neutral-800 text-brand-yellow font-extrabold rounded-2xl text-center text-sm sm:text-base shadow-lg animate-bounce">
                🎉 ADICIONADO AO PEDIDO COM SUCESSO!
              </div>
            )}

            <button
              onClick={onScrollToOffer}
              className="px-6 py-4 bg-white hover:bg-slate-50 text-brand-blue font-bold rounded-2xl border-2 border-brand-blue transition-colors text-center text-sm cursor-pointer"
            >
              Ver Oferta Especial
            </button>
          </motion.div>

          {/* Extra micro-copy */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-5 text-xs text-slate-500 pt-2 flex-wrap"
          >
            <span className="flex items-center gap-1">
              <Printer className="w-4 h-4 text-brand-blue" /> Arquivos PDF de alta definição prontos para impressão
            </span>
            <span className="flex items-center gap-1">
              ⭐ Condição exclusiva por apenas R$ {pricing.promoPrice.toFixed(2).replace('.', ',')}
            </span>
          </motion.div>
        </div>

        {/* Hero Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Notebook line structure container enclosing the image */}
          <div className="relative p-3 bg-white rounded-2xl shadow-xl border-3 border-brand-blue rotate-1 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
            {/* Playful elements inside card frame */}
            <div className="absolute -top-3.5 -right-3.5 bg-brand-yellow font-black text-brand-blue text-xs uppercase px-3 py-1.5 rounded-full border-2 border-brand-blue shadow-md z-10 scroll-m-2 flex items-center gap-1">
              Comprar 1 Levar 2!
            </div>
            
            {/* Notebook margins */}
            <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-red-400" />
            
            <div className="pl-6 pt-3 pr-2 bg-[linear-gradient(#f0f7ff_1px,transparent_1px)] [background-size:100%_24px] rounded-xl overflow-hidden">
              <div className="mb-3 text-center border-b border-brand-blue/20 pb-2">
                <span className="text-[10px] font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">Combo Multiuso 2 em 1</span>
              </div>
              
              <img
                src={heroImage}
                alt="Combo 2 em 1 — Copa do Mundo + São João"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg shadow-sm border border-slate-200 hover:scale-101 transition-transform"
              />
              
              <div className="mt-3 flex justify-between items-center text-[11px] text-slate-500 font-bold bg-slate-50 p-2 rounded-lg border border-slate-200">
                <span>⚽ Copa do Mundo</span>
                <span>🔥 São João Junino</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
